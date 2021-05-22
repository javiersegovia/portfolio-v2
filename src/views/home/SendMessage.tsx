import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '@components/Forms/Input'
import { Button } from '@components/Button'
import { CloseButton } from '@components/Button/CloseButton'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'

interface MessageForm {
  name: string
  email: string
  message: string
}

interface SendMessageProps {
  onRequestClose?: () => void
}

export const SendMessage = ({ onRequestClose }: SendMessageProps) => {
  const formMethods = useForm<MessageForm>()

  const {
    watch,
    formState: { isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)

  const { t } = useTranslation('home')

  const onSubmit = async (data: MessageForm) => {
    const { name, email, message } = data

    setIsLoading(true)

    await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    setIsLoading(false)
  }

  const clientName = watch('name')

  return (
    <>
      {onRequestClose && (
        <CloseButton
          onClick={onRequestClose}
          tw="text-2xl top-5 right-5 md:text-3xl md:(top-3 right-3)"
        />
      )}

      {isSubmitSuccessful ? (
        <div tw="text-center mb-10 whitespace-pre-line">
          <h4 tw="text-5xl">{t`send-message.title-successful`}</h4>

          {/* <p tw="text-sm mt-4">{t`send-message.content-successful`}</p> */}
          <p tw="text-sm mt-6">
            {t('send-message.content-successful', { name: clientName })}
          </p>
        </div>
      ) : (
        <>
          <div tw="text-center mb-10">
            <h4 tw="text-5xl">{t`send-message.title`}</h4>
            <p tw="text-sm mt-4">{t`send-message.subtitle`}</p>
          </div>

          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)} tw="space-y-4">
              <Input
                name="name"
                label={t`send-message.fields.name.label`}
                validations={{
                  required: {
                    value: true,
                    message: t`send-message.fields.name.required`,
                  },
                }}
              />

              <Input
                name="email"
                type="email"
                label={t`send-message.fields.email.label`}
                // TODO: add validations for invalid email address
                validations={{
                  required: {
                    value: true,
                    message: t`send-message.fields.email.required`,
                  },
                }}
              />

              <Input
                name="message"
                label={t`send-message.fields.message.label`}
                isTextArea
                tw="max-h-44"
                validations={{
                  required: {
                    value: true,
                    message: t`send-message.fields.message.required`,
                  },
                  minLength: {
                    value: 10,
                    message: t`send-message.fields.message.min-length`,
                  },
                }}
              />

              <Button
                type="submit"
                tw="rounded-md bg-primary-400 text-black font-bold"
                isLoading={isLoading || isSubmitting}
                disabled={isLoading || isSubmitting}
                showCheckOnSuccess
              >
                {t`send-message.submit`}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </>
  )
}

import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '@components/Forms/Input'
import { Button } from '@components/Button'
import { CloseButton } from '@components/Button/CloseButton'
import useTranslation from 'next-translate/useTranslation'

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
    handleSubmit,
    formState: { errors },
  } = formMethods

  const { t } = useTranslation('home')

  const onSubmit = (data: MessageForm) => {
    // Todo: handle form Data
  }

  return (
    <>
      {onRequestClose && (
        <CloseButton
          onClick={onRequestClose}
          tw="text-2xl top-5 right-5 md:text-3xl md:(top-3 right-3)"
        />
      )}

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
            tw="rounded-md bg-teal-500 text-white font-bold"
          >
            {t`send-message.submit`}
          </Button>
        </form>
      </FormProvider>
    </>
  )
}

import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '@components/Forms/Input'
import { Button } from '@components/Button'
import { CloseButton } from '@components/Button/CloseButton'

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
  const { handleSubmit, errors } = formMethods

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
        <h4 tw="text-5xl">Message me</h4>
        <p tw="text-sm mt-4">
          Want to say something? I&apos;m glad to hear it!
        </p>
      </div>

      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)} tw="space-y-4">
          <Input
            name="name"
            label="Name"
            error={errors?.name}
            validations={{
              required: {
                value: true,
                message: 'Who is sending this message?',
              },
            }}
          />

          <Input
            name="email"
            type="email"
            label="Email"
            error={errors?.email}
            // TODO: add validations for invalid email address
            validations={{
              required: {
                value: true,
                message: 'I will send you the response here!',
              },
            }}
          />

          <Input
            name="message"
            label="Message"
            isTextArea
            error={errors?.message}
            tw="max-h-44"
            validations={{
              required: {
                value: true,
                message: 'What do you want to say?',
              },
              minLength: {
                value: 10,
                message: 'Your message should have at least 10 characters',
              },
            }}
          />

          <Button
            type="submit"
            tw="rounded-md bg-teal-500 text-white font-bold"
          >
            Send
          </Button>
        </form>
      </FormProvider>
    </>
  )
}

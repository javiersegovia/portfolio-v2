import { Fragment } from 'react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import { Listbox, Transition } from '@headlessui/react'

const locales = ['es', 'en']

export const ChangeLanguage = ({ ...props }) => {
  const { lang } = useTranslation()

  return (
    <div tw="w-10 text-center relative" {...props}>
      <Listbox
        value={lang}
        onChange={async (value) => await setLanguage(value)}
      >
        <div tw="flex items-center w-full h-full">
          <Listbox.Button>
            <img
              src={`/svg/flag-${lang}.svg`}
              alt="flag"
              tw="w-6 m-auto rounded-sm object-contain"
            />
          </Listbox.Button>
        </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {locales.map((locale) => (
              <Listbox.Option
                key={locale}
                value={locale}
                tw="hover:(text-blue-900 bg-gray-300 dark:bg-gray-600 cursor-pointer) text-gray-900 cursor-default select-none relative p-2"
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      <img
                        src={`/svg/flag-${locale}.svg`}
                        alt="flag"
                        tw="rounded-sm"
                      />
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'About Me', href: '#', current: true },
  { name: 'Toolset', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderNav() {
  return (
    <Disclosure as="nav" className="bg-black">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            
            {/* Logo */}
            <div className="flex items-center justify-center">
                <h1 className="text-white text-2xl italic font-bold"> Juan Martinez </h1>
            </div>

            {/* Headers */}
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-decoration-line: underline text-amber-500' : 'text-gray-300 hover:text-white',
                      'rounded-md px-3 py-2 text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
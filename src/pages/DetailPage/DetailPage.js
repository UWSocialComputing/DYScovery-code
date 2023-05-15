import * as React from "react";
import Title from "../../components/Title/Title";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


function DetailPage() {
  const navigation = [
    { name: 'General', href: '#general', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Preferences', href: '#pref', current: false },
    { name: 'Neighborhood', href: '#neighborhood', current: false },
    { name: 'Reviews', href: '#reviews', current: false },
    { name: 'Social Media', href: '#social', current: false}
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const details = [
    {
      name: 'General',
      href: 'general',
      text: <p>
      Event: DYS Concert<br></br>
      Check-in: 4/28/23<br></br>
      Check-out: 4/29/23<br></br>
      We are: 2 females<br></br>
      Looking for: 2 females<br></br>
      Budget: $150-$300 per day
      </p>
    },
    {
      name: 'About',
      href: 'about',
      text: <p>
        We are college students and fans of DYS! We have already purchased tickets for the concert.
        </p>
    },
    {
      name: 'Preferences',
      href: 'pref',
      text: <p>
        We prefer you are also attending the DYS concert and in college. Looking for easygoing roommates who won't make noise after 1am. If you're interested in travelling around Seattle together, let us know.
      </p>
    },
    {
      name: 'Neighborhood',
      href: 'neighborhood',
      text: '',
    },
    {
      name: 'Reviews',
      href: 'reviews',
      text: <p>
        TODO
      </p>
    },
    {
      name: 'Social Media',
      text: '',
      href: 'social'
    },
  ]

  return (
    <div className="min-h-screen flex-col items-center justify-between p-8">
      <Title />

      <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1612000529646-f424a2aa1bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">VERIFIED TICKET</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          User's event ticket has been verified through TicketMaster. 
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Learn more! <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>

    <ul role="list" className="divide-y divide-gray-100">
      {/* General */}
        <li key={details[0].name} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p id={details[0].href} className="text-sm font-semibold leading-6 text-gray-900">{details[0].name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{details[0].text}</p>
            </div>
          </div>
        </li>

        {/* About */}
        <li key={details[1].name} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p id={details[1].href} className="text-sm font-semibold leading-6 text-gray-900">{details[1].name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{details[1].text}</p>
            </div>
          </div>
        </li>

        {/* Preferences */}
        <li key={details[2].name} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p id={details[2].href} className="text-sm font-semibold leading-6 text-gray-900">{details[2].name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{details[2].text}</p>
            </div>
          </div>
        </li>

        {/* Neighborhood */}
        <li key={details[3].name} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p id={details[3].href} className="text-sm font-semibold leading-6 text-gray-900">{details[3].name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{details[3].text}</p>
              <section class="text-gray-600 body-font relative">
                <div class="min-w-0 flex-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6239399290803!2d-122.34340762350878!3d47.61400158746624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154b7e336c5b%3A0x202a343f203ca321!2sWarwick%20Seattle!5e0!3m2!1sen!2sus!4v1684178350536!5m2!1sen!2sus" width="800" height="650" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </section>
            </div>
          </div>
        </li>

        {/* Reviews */}
        <li key={details[4].name} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p id={details[4].href} className="text-sm font-semibold leading-6 text-gray-900">{details[4].name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{details[4].text}</p>
            </div>
          </div>
        </li>

        {/* Social media */}
        <li key={details[5].name} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p id={details[5].href} className="text-sm font-semibold leading-6 text-gray-900">{details[5].name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{details[5].text}</p>
              
              <div class="grid grid-cols-4 gap-4">
              <a href="https://www.instagram.com">
              <button id="instagram" href="instagram.com" class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 ">
              <FontAwesomeIcon icon={icon({name: 'instagram', style: 'brands'})} />
              </button>
              </a>

              <a href="https://www.twitter.com">
              <button id="twitter" class="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
              <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />
              </button>
              </a>

              <a href="https://www.discord.com">
              <button id="discord" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl">
              <FontAwesomeIcon icon={icon({name: 'discord', style: 'brands'})} />
              </button>
              </a>

              <a href="https://www.spotify.com">
              <button id="spotify" class="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-green-500 border-green-500 hover:bg-green-500 hover:text-white text-2xl">
              <FontAwesomeIcon icon={icon({name: 'spotify', style: 'brands'})} />
              </button>
              </a>
              </div>
            </div>
          </div>
        </li>
    </ul>

  <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div class="max-w-xl lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Interested in this listing?</h2>
        <div class="mt-6 flex max-w-md gap-x-4">
          <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Begin chat</button>
        </div>
      </div>
    </div>
    </div>
      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      </div>
    </div>
  </div>
  );
}

export default DetailPage;

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-col gap-6 place-content-center place-items-center flex-grow lg:px-5 lg:py-6 lg:gap-4.5">
        <div className="relative">
          <img src={heroImg} className="w-[170px] relative z-0 mx-auto" width="170" height="179" alt="" />
          <img 
            src={reactLogo} 
            className="absolute inset-x-0 mx-auto z-10 top-[34px] h-7 transform perspective-[2000px] rotate-z-[300deg] rotate-x-[44deg] rotate-y-[39deg] scale-140" 
            alt="React logo" 
          />
          <img 
            src={viteLogo} 
            className="absolute inset-x-0 mx-auto z-0 top-[107px] h-[26px] w-auto transform perspective-[2000px] rotate-z-[300deg] rotate-x-[40deg] rotate-y-[39deg] scale-80" 
            alt="Vite logo" 
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium text-gray-900 dark:text-gray-100 my-8 -tracking-[1.68px] lg:text-4xl lg:my-5">Get started</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Edit <code className="inline-flex rounded px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm">src/App.tsx</code> and save to test <code className="inline-flex rounded px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm">HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="px-3 py-1.5 text-base rounded text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/15 border-2 border-transparent hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-colors focus-visible:outline-2 focus-visible:outline-purple-600 dark:focus-visible:outline-purple-400 focus-visible:outline-offset-2 mb-6"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-gray-200 dark:before:border-l-gray-700 after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-gray-200 dark:after:border-r-gray-700"></div>

      <section className="flex border-t border-gray-200 dark:border-gray-700 text-left lg:flex-col lg:text-center">
        <div className="flex-1 px-8 py-8 lg:px-5 lg:py-6">
          <svg className="w-5.5 h-5.5 mb-4" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-2 -tracking-[0.24px] lg:text-xl">Documentation</h2>
          <p className="text-gray-600 dark:text-gray-400">Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 lg:mt-5 lg:flex-wrap lg:justify-center">
            <li>
              <a href="https://vite.dev/" target="_blank" className="text-gray-900 dark:text-gray-100 text-base rounded bg-gray-100/50 dark:bg-gray-800/50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-lg">
                <img className="h-4.5" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" className="text-gray-900 dark:text-gray-100 text-base rounded bg-gray-100/50 dark:bg-gray-800/50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-lg">
                <img className="h-4.5 w-4.5" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-8 py-8 border-l border-gray-200 dark:border-gray-700 lg:px-5 lg:py-6 lg:border-l-0 lg:border-t">
          <svg className="w-5.5 h-5.5 mb-4" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-2 -tracking-[0.24px] lg:text-xl">Connect with us</h2>
          <p className="text-gray-600 dark:text-gray-400">Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 lg:mt-5 lg:flex-wrap lg:justify-center">
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" className="text-gray-900 dark:text-gray-100 text-base rounded bg-gray-100/50 dark:bg-gray-800/50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-lg">
                <svg
                  className="h-4.5 w-4.5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" className="text-gray-900 dark:text-gray-100 text-base rounded bg-gray-100/50 dark:bg-gray-800/50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-lg">
                <svg
                  className="h-4.5 w-4.5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" className="text-gray-900 dark:text-gray-100 text-base rounded bg-gray-100/50 dark:bg-gray-800/50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-lg">
                <svg
                  className="h-4.5 w-4.5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" className="text-gray-900 dark:text-gray-100 text-base rounded bg-gray-100/50 dark:bg-gray-800/50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-lg">
                <svg
                  className="h-4.5 w-4.5"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-gray-200 dark:before:border-l-gray-700 after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-gray-200 dark:after:border-r-gray-700"></div>
      <section className="h-22 border-t border-gray-200 dark:border-gray-700 lg:h-12"></section>
    </>
  )
}

export default App

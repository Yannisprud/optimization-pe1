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
          <h1 className="text-5xl font-medium text-black my-8 - tracking-[1.68px] lg:text-4xl lg:my-5">Get started</h1>
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

      <div className="relative w-full before:content-[''] before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-gray-200 dark:before:border-l-gray-700 after:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-gray-200 dark:after:border-r-gray-700"></div>
      
    </>
  )
}

export default App

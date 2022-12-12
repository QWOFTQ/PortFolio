import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-black">
          <Link href="/">
            <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-2xl text-white font-bold">
                PortFolio
              </span>{' '}
            </p>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <p className="mr-5 text-white hover:text-yellow-400">Home</p>
            </Link>

            <Link href="/projects">
              <p className="mr-5 text-white hover:text-yellow-400">Project</p>
            </Link>

            <Link href="/login">
              <p className="mr-5 text-white hover:text-yellow-400">Login</p>
            </Link>

            <a
              href="https://github.com"
              className="mr-5 text-white hover:text-yellow-400"
            >
              GitHub
            </a>
            <a
              href="https://vercel.com/dashboard"
              className="mr-5 text-white hover:text-yellow-400"
            >
              Vercel
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

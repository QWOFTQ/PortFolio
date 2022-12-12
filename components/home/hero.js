import Animation from './animation'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-3xl text-3xl mb-4 text-gray-900 font-bold">
          안녕하세요!
          <br className="hidden lg:inline-block" />
          개인 포트폴리오 사이트입니다!
          <br className="hidden lg:inline-block" />
          프로젝트를 클릭하면 Notion 링크로 연결됩니다!
        </h1>
      
        <div className="flex justify-center">
          <Link href="/projects">
            <p className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </p>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}

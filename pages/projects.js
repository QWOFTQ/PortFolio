import Layout from '../components/layout'
import Head from 'next/head'
import styled from 'styled-components'

const ImageBox = styled.img`
  width: 800px;
  height: 700px;
  display: block;
`
export default function Projects({ projects }) {
  console.log(projects)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>포트폴리오</title>
          <meta name="description" content="제작중" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <a href="https://www.notion.so/5f0b08db4aee49bba3639bef6cb88bb4">
          <ImageBox src="/images/notion.png" />
        </a>
      </div>
    </Layout>
  )
}

import Layout from '../components/Layout'

type Props = {
  devices: string[],
}

const IndexPage: React.FC<Props> = ({devices}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      {devices.map(device => device)}
    </p>
  </Layout>
)

export const getServerSideProps = async(): Promise<string[]> => {
  return []
}


export default IndexPage

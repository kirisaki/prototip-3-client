import Layout from '../components/Layout'
import Item from '../components/Item'

type Props = {
  devices: string[],
}

type ServerSideProps = {
  props: Props,
}

const IndexPage: React.FC<Props> = ({devices}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      {devices.map(device => <Item device={device} />)}
    </p>
  </Layout>
)

export const getServerSideProps = async(): Promise<ServerSideProps> => {
  return {props: {devices: ["a", "b"]}}
}


export default IndexPage

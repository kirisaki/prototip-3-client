import Layout from '../components/Layout'
import Item from '../components/Item'
import {req} from '../utils/req'

type Props = {
  devices: string[],
}

type ServerSideProps = {
  props: Props,
}

const IndexPage: React.FC<Props> = ({devices}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js</h1>
    <p>
      {devices.map(device => <Item device={device} />)}
    </p>
  </Layout>
)

export const getServerSideProps = async(): Promise<ServerSideProps> => {
  const result = await req<Props>('https://prototip-3-server-tawny.vercel.app/devices')
  return {props: {devices: result.devices}}
}


export default IndexPage

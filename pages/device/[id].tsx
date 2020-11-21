import {GetServerSideProps} from 'next'
import Layout from '../../components/Layout'
import {req} from '../../utils/req'

type Props = {
  id: string,
  detail: string,
}


const Device: React.FC<Props> = ({id, detail}) => {

  return (
    <Layout title={`device "${id}"`}>
      <h1>
        Device: {id}
      </h1>
      <p>
        {detail}
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  let { id } = ctx.query
  if (typeof id !== 'string') {
    id = id[0]
  }
  let result: Props
  try {
    result = await req<Props>(`https://prototip-3-server-tawny.vercel.app/device/${id}`)
  } catch {
    return {notFound: true}
  }
  return {props: {id: result.id, detail: result.detail}}
}

export default Device

import {GetServerSideProps} from 'next'
import Layout from '../../components/Layout'

type Props = {
  id: string,
  detail: string,
}

type ServerSideProps = {
  props: Props,
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

export const getServerSideProps: GetServerSideProps = async(ctx): Promise<ServerSideProps> => {
  let { id } = ctx.query
  if (typeof id !== 'string') {
    id = id[0]
  }

  return {props: {id: id, detail: "a dayo"}}
}

export default Device

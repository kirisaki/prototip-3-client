import Link from 'next/link'

type Props = {
  device: string,
}

const Item: React.FC<Props> = ({device}) => (
  <div>
    <Link href={`/device/${device}`}>
      {device}
    </Link>
  </div>
)

export default Item

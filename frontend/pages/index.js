import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href = '/list'>
      <button>Listar</button>
      </Link>

      <Link href = '/cadastrar'>
      <button>Cadastrar</button>
      </Link>
    </div>
  )
}

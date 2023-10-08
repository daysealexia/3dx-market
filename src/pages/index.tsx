
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className= 'container-center bg-white w-1/2 h-auto top-10 absolute left-1/4 pt-10 pb-10' >
      <h1>Welcome to 3D-X</h1>
      <a href='/login'> Are you our client? Go to login</a>
      <a href='/createUser'> New here? Register here</a>
    </div>
  )
}

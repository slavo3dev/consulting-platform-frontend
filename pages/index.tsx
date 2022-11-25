import styles from '../styles/Home.module.css';
import { Header } from '../components/index';
import { Footer } from '../components/index';
import {UserInput} from '../components/index';





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
<UserInput />
       <Footer />
    </div>
      
  )
}

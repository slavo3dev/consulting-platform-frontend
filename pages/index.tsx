import styles from '../styles/Home.module.css';
import {Header} from '../components/index';
import {Footer} from '../components/index';
import { Form } from '../components/index'



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Form /> {/* needs to be popup */}
       <Footer />
    </div>
      
  )
}

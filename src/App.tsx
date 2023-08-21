import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { UserProvider } from './context/UserContext'
import './styles/index.scss'
import DiscountBanner from './components/DiscountBanner';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)

  return (
      <UserProvider>
        <Header />
        <DiscountBanner />
        <Modal 
        isModalOpen={isModalOpen}
         setIsModalOpen={setIsModalOpen}
         />
      </UserProvider>
  )
}

export default App

import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { UserProvider } from './context/UserContext'
import './styles/index.scss'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)

  return (
      <UserProvider>
        <Header />
        <MainContent />
        <Footer />

        <Modal 
        isModalOpen={isModalOpen}
         setIsModalOpen={setIsModalOpen}
         />
      </UserProvider>
  )
}

export default App

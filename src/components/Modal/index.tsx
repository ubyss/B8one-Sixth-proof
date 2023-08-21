import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useUser } from '../../context/UserContext';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const Modal: React.FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {

  const { setIsOver65 } = useUser();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const isButtonEnabled = day && month && year;

  const calculateAge = () => {

    if (!isButtonEnabled) return null

    const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      setIsOver65(age - 1 >= 65);
    }
    setIsOver65(age >= 65);

    setIsModalOpen(false)
  };

  if (!isModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal__overlay">
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">Olá! Que bom te ver aqui.</h2>
        <h2 className="modal__notify">Para continuar, informe a sua data de nascimento</h2>
        <div className="modal__select-group">
          <label className="select-wrapper">
            <select className="modal__select" onChange={(e) => setDay(e.target.value)} value={day}>
              <option value="" disabled>Dia</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="select-wrapper">
            <select className="modal__select" onChange={(e) => setMonth(e.target.value)} value={month}>
              <option value="" disabled>Mês</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
          <label className="select-wrapper">
            <select className="modal__select" onChange={(e) => setYear(e.target.value)} value={year}>
              <option value="" disabled>Ano</option>
              {Array.from({ length: 76 }, (_, i) => 1946 + i).map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </label>
        </div>
        <button className={`modal__button ${!isButtonEnabled ? 'modal__button--disabled' : 'modal__button--enabled'}`} disabled={!isButtonEnabled} onClick={calculateAge}>
          Acessar loja
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

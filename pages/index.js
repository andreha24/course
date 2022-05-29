import { useState } from "react";
import { AddCriminalModal } from "../components/add-criminal-modal";
import { CriminalFilter } from "../components/criminal-filter";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [criminals, setCriminals] = useState([]);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="h-3 bg-purple">
      <button onClick={() => setModalIsOpen(true)}>Добавить преступника</button>
      {modalIsOpen && <AddCriminalModal onClose={closeModal} />}
      <CriminalFilter />
    </div>
  );
}

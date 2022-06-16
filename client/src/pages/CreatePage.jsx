import { useState } from 'react';
import PetForm from '../components/PetForm';
import { createPet } from '../services/pet';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [pet, setPet] = useState({
    name: '',
    species: 'dog',
    picture: '',
    position: null
  });
  const navigate = useNavigate();

  const handlePetCreation = () => {
    createPet(pet).then((data) => {
      const id = data.pet._id;
      navigate(`/${id}`);
    });
  };

  return (
    <div>
      <PetForm pet={pet} onPetChange={setPet} />
      <button onClick={handlePetCreation}>Create Pet</button>
    </div>
  );
};

export default CreatePage;

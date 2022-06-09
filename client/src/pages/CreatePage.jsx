import { useState } from 'react';
import PetForm from '../components/PetForm';

const CreatePage = () => {
  const [pet, setPet] = useState({ name: '', species: 'dog', picture: '' });

  return (
    <div>
      <PetForm pet={pet} onPetChange={setPet} />
    </div>
  );
};

export default CreatePage;

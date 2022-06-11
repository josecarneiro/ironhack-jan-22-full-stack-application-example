import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadPet, editPet } from '../services/pet';
import PetForm from './../components/PetForm';

const EditPage = () => {
  const [pet, setPet] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadPet(id).then((data) => {
      setPet(data.pet);
    });
  }, [id]);

  const handlePetEdit = () => {
    editPet(id, pet).then(() => {
      navigate(`/${id}`);
    });
  };

  return (
    <div>
      {pet && (
        <>
          <PetForm pet={pet} onPetChange={setPet} />
          <button onClick={handlePetEdit}>Save Pet</button>
        </>
      )}
    </div>
  );
};

export default EditPage;

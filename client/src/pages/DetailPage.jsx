import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PetMap from '../components/PetMap';
import { deletePet, loadPet } from '../services/pet';

const DetailPage = () => {
  const [pet, setPet] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    loadPet(id).then((data) => {
      setPet(data.pet);
    });
  }, [id]);

  const handlePetDeletion = () => {
    deletePet(id).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      {pet && (
        <>
          <h1>{pet.name}</h1>
          <strong>{pet.species}</strong>
          <PetMap marker={pet.position} />
          <br />
          <Link to={`/${id}/edit`}>Edit Pet</Link>
          <br />
          <button onClick={handlePetDeletion}>Delete Pet</button>
        </>
      )}
    </div>
  );
};

export default DetailPage;

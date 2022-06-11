import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadPet } from '../services/pet';

const DetailPage = () => {
  const [pet, setPet] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    loadPet(id).then((data) => {
      setPet(data.pet);
    });
  }, [id]);

  return (
    <div>
      {pet && (
        <>
          <h1>{pet.name}</h1>
          <strong>{pet.species}</strong>
        </>
      )}
    </div>
  );
};

export default DetailPage;

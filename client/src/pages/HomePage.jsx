import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PetMapList from '../components/PetMapList';
import { listPets } from '../services/pet';

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listPets().then((data) => {
      setPets(data.pets);
    });
  }, []);

  const navigate = useNavigate();

  const handleMarkerOpen = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            <Link to={`/${pet._id}`}>{pet.name}</Link>
          </li>
        ))}
        <PetMapList pets={pets} onMarkerOpen={handleMarkerOpen} />
      </ul>
    </div>
  );
};

export default HomePage;

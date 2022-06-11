import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listPets } from '../services/pet';

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    listPets().then((data) => {
      setPets(data.pets);
    });
  }, []);

  return (
    <div>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            <Link to={`/${pet._id}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

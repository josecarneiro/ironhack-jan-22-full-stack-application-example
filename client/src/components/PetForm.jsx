import ImageInput from './ImageInput';
import PetMap from './PetMap';

const PetForm = (props) => {
  return (
    <form>
      <label htmlFor="input-name">Pet Name</label>
      <input
        id="input-name"
        type="text"
        placeholder="Pet Name"
        value={props.pet.name}
        onChange={(event) => {
          props.onPetChange({ ...props.pet, name: event.target.value });
        }}
      />
      <label htmlFor="input-species">Pet Species</label>
      <select
        id="input-species"
        value={props.pet.species}
        onChange={(event) => {
          props.onPetChange({ ...props.pet, species: event.target.value });
        }}
      >
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
      </select>
      <label htmlFor="input-picture">Pet Picture</label>
      <ImageInput
        image={props.pet.picture}
        onImageChange={(url) => {
          props.onPetChange({ ...props.pet, picture: url });
        }}
      />

      <PetMap
        marker={props.pet.position}
        onMarkerChange={(value) => {
          props.onPetChange({ ...props.pet, position: value });
        }}
      />
    </form>
  );
};

export default PetForm;

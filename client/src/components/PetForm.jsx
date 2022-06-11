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
      <input
        id="input-picture"
        type="text"
        placeholder="Pet Picture"
        value={props.pet.picture}
        onChange={(event) => {
          props.onPetChange({ ...props.pet, picture: event.target.value });
        }}
      />
    </form>
  );
};

export default PetForm;

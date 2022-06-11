# Pet management application

## Client

### Pages

- Home - List all pets.
- Detail - Display details on a single pet.
- Create - Allow user to add single pet to application.
- Edit - Allow user to update single pet.
- LogIn - Allows visitor to log into existing account.
- Register - Allows visitor to create new account.

### Services

- listPets - issues GET to '/pet/list' - List all pets.
- loadPet - issues GET to '/pet/:id' - Load details on a single pet.
- editPet - issues PATCH to '/pet/:id' - Edit single pet.
- deletePet - issues DELETE to '/pet/:id' - Delete single pet.
- createPet - issues POST to '/pet' - Creates single pet.

- registerUser - issues a POST to '/authentication/sign-up' - Registers new user.
- logInUser - issues a POST to '/authentication/sign-in' - Authenticates existing user.
- signOutUser - issues a POST to '/authentication/sign-out' - Signs out user.
- loadUserInformation - issues a GET to '/authentication/me' - Loads information about authenticated user.

## Server

### Model

#### Pet

- name - String, required
- species - String, required, 'dog' or 'cat'
- picture - String

### Routes

- GET - '/pet/list' - List all pets.
- GET - '/pet/:id' - Load details on a single pet.
- PATCH - '/pet/:id' - Edit single pet.
- DELETE - '/pet/:id' - Delete single pet.
- POST - '/pet' - Creates single pet.

- POST - '/authentication/sign-up' - Registers new user.
- POST - '/authentication/sign-in' - Authenticates existing user.
- POST - '/authentication/sign-out' - Signs out user.
- GET - '/authentication/me' - Loads information about authenticated user.

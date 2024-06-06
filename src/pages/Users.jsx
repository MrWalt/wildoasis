import SignUpForm from "../features/authentication/SignupForm";

import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <SignUpForm />
      <Heading as="h1">Create a new user</Heading>
    </>
  );
}

export default NewUsers;

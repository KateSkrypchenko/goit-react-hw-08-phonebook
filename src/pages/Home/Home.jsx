import { Hearts } from 'react-loader-spinner';

import { Container, Link } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <h1>Welcome to the Phonebook application!</h1>
      <p>With this program you can manage contacts.</p>
      <p>
        You can <Link to="/register">register</Link> or <Link to="/login">login</Link> if you
        already have an account..
      </p>
      <p>Please, do it and we will start.</p>
      <Hearts
        height="100"
        width="100"
        color="#002359"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

export default Home;

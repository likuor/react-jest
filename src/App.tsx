import Button from './components/Button';
// import AsyncComponent from './components/AsyncComponent';
// import { UserSearch } from './components/UserSearch';
// import Form from './components/Form';

function App() {
  return (
    <>
      <Button label='button' onClick={() => alert('click')} primary={true} />
      {/* <Form /> */}
      {/* <AsyncComponent /> */}
      {/* <UserSearch /> */}
    </>
  );
}

export default App;

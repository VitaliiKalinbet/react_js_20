import React from 'react';
import Product1 from './Product1/Product1';
import Product2 from './Product2/Product2';
import Mailbox from './Mailbox/Mailbox';
import Techlist from './Techlist/Techlist';
import Button from './Button/Button';
import Button2 from './Button2/Button2';
import Button3 from './Button3/Button3';

const url =
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';

const price = 10.99;

const technologies = [
  { id: 'id-1', name: 'JavaScript' },
  { id: 'id-2', name: 'Rcvcvcvcvt' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: '1111111' },
];

const App = () => {
  return (
    <>
      <h2>Инлайн CSS</h2>
      <Button propDisabled={false} />
      <hr />
      <h2>Внешний CSS</h2>
      <Button2 propDisabled={true} />
      <hr />
      <h2>CSS-модули</h2>
      <Button3 propDisabled={true} />
      <Button3 propDisabled={false} />
      <hr />
      <h2>Пример на styled components</h2>
      <Mailbox
        paddingValue="30px"
        changeStyle={false}
        name="Vitalii"
        unreadMessages={[1, 2, 3]}
      />
      <Techlist items={technologies} active={false} small={false} />
      {/* 
      <Product1 productUrl={url} productPrice={400}>
        Hello world
      </Product1>

      <Product2 product2Alt="Fries and Burger" /> */}
    </>
  );
};

export default App;

/* eslint-disable react/prop-types */
import './App.css';
import Profile from './components/Profile';


const users = [{
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  wiki: 'https://pt.wikipedia.org/wiki/Hedy_Lamarr',
},
{
  name: 'Ada Lovelace',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
  imageSize: 90,
  wiki: 'https://pt.wikipedia.org/wiki/Ada_Lovelace',
},
{
  name: 'Isaac Newton',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/800px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg',
  imageSize: 90,
  wiki: 'https://pt.wikipedia.org/wiki/Isaac_Newton',
}];

export default function App() {
  console.info('render');
  // const profiles = [];
  //   <Profile key={users[0].name} user={users[0]} />,
  //   <Profile key={users[1].name} user={users[1]} />,
  //   <Profile key={users[2].name} user={users[2]} />
  // ];

  // users.forEach((user) => {
  //   profiles.push(<Profile key={user.name} user={user} />);
  // });

  return (
    <>
      {users.map((user) =>
        <div key={user.name}>
          <Profile user={user} />
        </div>
      )}
    </>
  );
}




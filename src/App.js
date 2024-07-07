import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg/MyOrg';
import Equipment from './components/Equipment/Equipment';
import Footer from './components/Footer/Footer';

function App() {

  /* States */
  const [showForm, updateShowForm] = useState(false);
  const [dataCollaborator, updateDataCollaborator] = useState([
    {
      id: uuid(),
      nombre: "Génesis",
      equipo: "Programación",
      puesto: "Desarrolladora",
      foto: "https://picsum.photos/300",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Christian",
      equipo: "Programación",
      puesto: "Desarrollador",
      foto: "https://picsum.photos/300",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Luri",
      equipo: "Front End",
      puesto: "Desarrolladora",
      foto: "https://picsum.photos/300",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Jean Marie",
      equipo: "UX y Diseño",
      puesto: "Diseñadora",
      foto: "https://picsum.photos/300",
      fav: false
    },
    {
      id: uuid(),
      nombre: "José González",
      equipo: "Innovación y gestión",
      puesto: "Gestor",
      foto: "https://picsum.photos/300",
      fav: false
    }]);
  const [teams, upgradeTeams] = useState([
    {
      id: uuid(),
      tittle: 'Programación',
      mainColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      id: uuid(),
      tittle: 'Front End',
      mainColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      id: uuid(),
      tittle: 'Data Science',
      mainColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      id: uuid(),
      tittle: 'Devops',
      mainColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      id: uuid(),
      tittle: 'UX y Diseño',
      mainColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      id: uuid(),
      tittle: 'Móvil',
      mainColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      id: uuid(),
      tittle: 'Innovación y  Gestión',
      mainColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ])
  

  const functionUpdateShowForm = () => {
    updateShowForm(!showForm)
  };
  /* Recibir colaboradores */
  const getCollaborators = (collaborators) => {
    console.log('recibiendo', collaborators);
    updateDataCollaborator([...dataCollaborator, collaborators])
  };
  /* Update colors */
  const updateColors = (color, id) => {
    const upgradedTeams = teams.map((teams) => {
      console.log('actualizar', color, id)
      if (teams.id === id) {
        teams.mainColor = color
      }
      return teams
    })
    upgradeTeams(upgradedTeams)
  };
  /* Delete collaborato */
  const removeCollaborator = (id) => {
    console.log('marditasea',id);
    const newCollaboratos = dataCollaborator.filter((colaborators) => colaborators.id !== id)
    updateDataCollaborator(newCollaboratos);
  };

  // Create team
  const createTeam = (newTeam) => {
    console.log(newTeam);
    upgradeTeams([...teams, {...newTeam, id:uuid()}]);
  }

  //Favorite collaborator
  const like = (id) => {
    console.log('like', id)
    const likeCollaborator = dataCollaborator.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav
      }
      console.log(collaborator.fav)
      return collaborator
    })
    updateDataCollaborator(likeCollaborator)
  }

  return (
    <div className="App">
      <Header />
      {/* { showForm ? <Form/> : <></> } */}
      {showForm && <Form 
        createTeam= {createTeam}
        equipments={
          teams.map((equipments) => equipments.tittle)
      }
        getCollaborators={getCollaborators} />}
      <MyOrg formSwitch={functionUpdateShowForm} />
      {
        teams.map((teams) => {
          return <Equipment
            tittle={teams.tittle}
            key={teams.tittle}
            id = {teams.id}
            idC = {dataCollaborator}
            mainColor={teams.mainColor}
            secondaryColor={teams.secondaryColor}
            dataCollaborator={dataCollaborator.filter(collaborator => collaborator.equipo === teams.tittle)}
            removeCollaborator={removeCollaborator}
            updateColors={updateColors}
            like= {like}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;

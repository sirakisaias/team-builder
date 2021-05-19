import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import TeamMember from './TeamMember';



const teamList = [
  {
    name: 'Sirak',
    email: 'sikuisa90@yahoo.com',
    role:'fullstack'
  },
  {
    name:'mike',
    email:'mike@mike.com',
    role:'frontend',
  },
]

const initialFormValues ={
  name:'',
  email:'',
  role:'',
}

function App() {

  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newFriend = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newFriend.username || !newFriend.email || !newFriend.role) {
      return;
    }

 setTeamMember([...teamMember, newFriend])
 setFormValues(initialFormValues);
  }
  return (
    <div className="App">
      <h1> Team members</h1>
      <Form 
      value = {formValues}
      update = {updateForm}
      submit = {submitForm}
      />
      {
        teamMember.map(friend =>{
          return <TeamMember key = {friend.id} details = {friend} />
        })
      }
    </div>
  );
}

export default App;

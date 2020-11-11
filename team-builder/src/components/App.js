import '../App.css';
import React,{useState} from 'react';
import Form from './Form';
import Friend from './Friend';

const initialFormValues = {
name: "",
email:"",
role: "",
}

function App() {
  const [friends, setFriends] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName,inputValue) => {
  setFormValues({
    ...formValues,
    [inputName]: inputValue
  });
  }
  const submitForm = ()=> {
const newFriend = {
  name: formValues.name.trim(),
  email: formValues.email.trim(),
  role: formValues.role
};
if (!newFriend.name || !newFriend.email || !newFriend.role) return;
console.log(newFriend)
setFriends([...friends,newFriend]);

setFormValues(initialFormValues);
  }
  return (
    
    <div className="App">
      <Form values={formValues}
      update={updateForm}
      submit={submitForm} />

      {friends.map((friend) => {
      return <Friend key={friend.email} details={friend}/>

})}
     
    </div>
  );
}

export default App;

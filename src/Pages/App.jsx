import { useState } from 'react'
import App from '../App';
import './app.css'

const App = () => {
    const [values,setValues] = useState({
      usernmae:"",
      birthday:"",
      password:"",
      confirmPassword:"",
    });

    const input = [
      {
        id:1,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
        lablel: 'Username',
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id:2,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        errorMessage:'It should be a vaild email address!',
        lablel: 'Email',
        required: true,
      },
      {
        id:3,
        name: 'birthday',
        type: 'date',
        placeholder: 'Birthday',
        lablel: 'Birthday',
      },
      {
        id:4,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        errorMessage:'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
        lablel: 'Password',
        pattern: `^(?=[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}`,
        required: true,
      },
      {
        id:5,
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm Password',
        errorMessage:"Password don't match!",
        lablel: 'Confirm Password',
        pattern: values.password,
        required: true,
      },
    ];
    
    console.log('re-rendered')
    
    const handleSubmit = (e)=>{
      e.preventDefault();
    };

    const onChange = (e)=>{
      setValues({...values, [e.target.name]: e.target.value});
    };

    console.log(values);
  
  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {input.map(input=>(
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
          ))}
          <button>Register</button>
        </form>
    </div>
  )
}

export default App
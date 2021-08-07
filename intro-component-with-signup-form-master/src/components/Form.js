import React,{useState,useRef} from 'react';
import '../css/form.css';
import Message from './Message';
import Message2 from './Message2';
import Message3 from './Message3';



const Form = () => {
    const [message1, setMessage1] = useState();
    const [message2, setMessage2] = useState();
    const [message3, setMessage3] = useState();
    const [message4, setMessage4] = useState();
    const [regmessage, setRegmessage] = useState();

    const usernameInput = useRef(null);
    const lastnameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const showmessage = e =>{
      e.preventDefault();
      const reg = /\S+@\S+\.\S+/;
      

      if(usernameInput.current.value === ''){
        setMessage1( <p className="errormessage"> <Message/>First Name cannot be empty</p>)
        usernameInput.current.className="inputnameerrorhight";
      }else{
        usernameInput.current.className="inputname";
        setMessage1("");
      } 
      
      if(lastnameInput.current.value === ''){
        setMessage2(<p className="errormessage"><Message/>Last Name cannot be empty</p>)
        lastnameInput.current.className="inputnameerror";
      }else{
        setMessage2("");
        lastnameInput.current.className="";
      } 
      
      if(emailInput.current.value === ''){
        setRegmessage("");
        setMessage3(<p className="errormessage"><Message2/>Email cannot be empty</p>)
        emailInput.current.className="inputnameerror";
      }else{
        setMessage3("");
        emailInput.current.className="inputname";
        if(reg.test(emailInput.current.value)) {
          setRegmessage("");
          emailInput.current.className="";
        } else { 
         setRegmessage(<p className="errormessage"><Message3/>Looks like this is not an email</p>);
          emailInput.current.className="inputnameerror";
        } 
      } 
      
      if(passwordInput.current.value === ''){
        setMessage4(<p className="errormessage"><Message/>Password cannot be empty</p>)
        passwordInput.current.className="inputnameerror";
      } else{
        setMessage4("");
        passwordInput.current.className="";
       
        
      }if(reg.test(emailInput.current.value) == true &&usernameInput.current.value != "" && lastnameInput.current.value != "" && emailInput.current.value != "" && passwordInput.current.value != ""){
        usernameInput.current.value = "";
        lastnameInput.current.value = "";
        emailInput.current.value = "";
        passwordInput.current.value = "";
      }
     
    }

  return (
    <div className='form'>
      <form  className='form' >
        <div className='inputs'>
          <input
            className='inputname'
            type='text'
            name='username'
            placeholder='First name'
            ref={usernameInput}     
          />
          {message1}
        </div>
        <div className='inputs'>
         <input
           className='input'
           type='text'
           name='lastname'
           placeholder='Last name'
           ref={lastnameInput} 
         />
        {message2}
       </div>
        <div className='inputs'>
          <input
            className='input'
            name='email'
            placeholder='Email Address'
            ref={emailInput}
          />
          {message3}
          {regmessage}
        </div>
        <div className='inputs'> 
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Password'
            ref={passwordInput} 
          />
         {message4}
        </div>  
        <button className='form-input-btn' onClick={showmessage}>
          claim your free trial
        </button>
        <div className="smalltext">
        <p className="text2"> By clicking the button, you are agreeing to our </p>
        <p className="terms">Terms and Services</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
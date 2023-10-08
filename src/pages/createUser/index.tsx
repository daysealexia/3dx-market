import { eventNames } from 'process'
import React, {useState} from 'react'
import BackToHomeButton from '@/components/back-home-button'


export default function registerUser() {
  
        const [formData, setFormData] = useState({
            fname:'',
            email:'',
            adress:'',
            numberhome:'',
            complement:'',
            district:'',
            city:'',
            state:'',
            password:'',
            repeatpassword:'',
        })


const handleInputChange = (
    event:  React.ChangeEvent<HTMLInputElement>
): void => {
    const { name, value } =  event.target;
    setFormData({
        ...formData, 
        [name]: value,
    })
};

const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log('FormData:' ,  formData);
};

  return (
    <div className= 'container-center bg-white w-1/2 h-auto top-10 absolute left-1/4 pt-10 pb-10'>
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Personal data</h1>
      <label htmlFor="fname">Full name:</label>
      <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleInputChange} ></input>
      </div>
      
      <div>
      <label htmlFor="email" >e-mail:</label>
      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}></input>
      </div>

      <div>
      <label htmlFor="adress"> Adress:</label>
      <input type="text" id="adress" name="adress" required value={formData.adress} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="numberhome"> Number of home:</label>
      <input type="text" id="numberhome" name="numberhome" required value={formData.numberhome} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="complement">Complement:</label>
      <input type="text" id="complement" name="complement" required value={formData.complement} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="district">District:</label>
      <input type="text" id="district" name="district" required value={formData.district} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" required value={formData.city} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" required value={formData.state} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required value={formData.password} onChange={handleInputChange}></input>
      </div>
      
      <div>
      <label htmlFor="repeatpassword">Repeat Password:</label>
      <input type="password" id="repeatpassword" name="repeatpassword" required value={formData.repeatpassword} onChange={handleInputChange}></input>
      </div>
      <button>SUBMIT</button>
    </form>
    <a href='/login'> Go to Login</a>
    <BackToHomeButton/> 
  </div>
  )
}

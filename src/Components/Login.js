import React from 'react'
// import Login from './Login';
import './Login.css'
const Login = () => {
  return (
    <>
    <div class="container">
    <div class="text">Responsive Contact us Form</div>
    <form action="#">
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">First Name</label>
          </div>
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Last Name</label>
          </div>
       </div>
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Email Address</label>
          </div>
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Website Name</label>
          </div>
       </div>
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Email Address</label>
          </div>
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Website Name</label>
          </div>
       </div>
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Email Address</label>
          </div>
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Website Name</label>
          </div>
       </div>
       <div class="form-row">
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Email Address</label>
          </div>
          <div class="input-data">
             <input type="text" required/>
             <div class="underline"></div>
             <label for="">Website Name</label>
          </div>
       </div>
       
       <div class="form-row">
          <div class="input-data textarea">
             {/* <textarea rows="8" cols="80" required></textarea>
             <br />
             <div class="underline"></div>
             <label for="">Write your message</label>
             <br /> */}
             <div class="form-row submit-btn">
                <div class="input-data">
                   <div class="inner"></div>
                   <input type="submit" value="submit"/>
                </div>
             </div>
          </div>
       </div>
    </form>
 </div>
 </>
  )
}

export default Login


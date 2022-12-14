import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';





class Mainpage extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    setTimeout(async () => {
      const f = await fetch('https://dummyjson.com/users');
      const data = await f.json();
      this.setState({ users: data.users });
    }, 3000);
  }

  render() {
    return (
      <div className='major'>
        {!!this.state.users.length ? this.state.users.map((el) =>
          <div key={el.id} >
            <div className='idcard'>
              <div className="img">
                <img className='img1' src={el.image}  alt="" />
              </div>
              <div className="data">
                <h4>{el.firstName} {el.lastName}</h4>
                <br />
                <span>{el.email}</span>
                <p>{el.phone}</p>
              </div>
              <div id='modal'>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#exampleModal" + el.id}>
                  Click here to View Details
                </button>


                <div class="modal fade" id={"exampleModal" + el.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Personal Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>First Name: {el.firstName} </p>
                        <p>Last Name: {el.lastName}</p>
                        <p>Email: {el.email}</p>
                        <p>Phone Number: {el.phone}</p>
                        <p>Date of birth: {el.birthDate}</p>
                        <p>Department: {el.department}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>) : 'Loading...!'}



  


          


      </div>
    );
  }
}

export default Mainpage;
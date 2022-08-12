import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Mainpage extends React.Component {
  render() {
    return (
      <div className='idcard'>
        <div className="img">

        </div>
        <div className="data">
          <h4>full name</h4>
          <br />
          <span>email</span>
          <p>phone number</p>
        </div>
        <div id='modal'>

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Click here to View Details
          </button>


          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Personal Details</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>First Name</p>
                  <p>Last Name</p>
                  <p>Email</p>
                  <p>Phone Number</p>
                  <p>Date Of Birth</p>
                  <p>Department</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>



        </div>
        </div>
        )
  }
}
        export default Mainpage;
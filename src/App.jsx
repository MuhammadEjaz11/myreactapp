import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// class Mainpage extends React.Component {
//   render() {
//     return (
//       <div className='idcard'>
//         <div className="img">

//         </div>
//         <div className="data">
//           <h4>full name</h4>
//           <br />
//           <span>email</span>
//           <p>phone number</p>
//         </div>
//         <div id='modal'>

//           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//             Click here to View Details
//           </button>


//           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog">
//               <div class="modal-content">
//                 <div class="modal-header">
//                   <h5 class="modal-title" id="exampleModalLabel">Personal Details</h5>
//                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body">
//                   <p>First Name</p>
//                   <p>Last Name</p>
//                   <p>Email</p>
//                   <p>Phone Number</p>
//                   <p>Date Of Birth</p>
//                   <p>Department</p>
//                 </div>
//                 <div class="modal-footer">
//                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

//                 </div>
//               </div>
//             </div>
//           </div>



//         </div>
//       </div>
//     )
//   }
// }

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
                        <p>{el.firstName} </p>
                        <p>{el.lastName}</p>
                        <p>{el.email}</p>
                        <p>{el.phone}</p>
                        <p>{el.birthDate}</p>
                        <p>{el.department}</p>
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
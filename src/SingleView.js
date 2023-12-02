import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleView() {
  //Pstep5 create a usestate
  const [allUser,setUser]=useState([])

  // Pstep1
  const params=useParams()
  //Pstep3
  const getUser=async()=>{
    const result=await fetch('/db.json')
    result.json().then(data=>{
      // console.log(data);
      setUser(data.contacts)
    })
  }

  //Pstep6
  // console.log(allUser);


  // Pstep2
  useEffect(()=>{
    // Pstep4
    getUser()
    // console.log((params.id));
  },[]) 

  // Pstep7
  const singleUser=allUser.find(i=>i.id==params.id)
  console.log(singleUser);

  return (
    <div>
        {
          singleUser?//if state
          <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={singleUser.profile} alt="" style={{ height: '500px', width: "100%" }} /></div>
                    <div class="col-md-6">
                        {/* <div class="small mb-1">SKU: BST-498</div> */}
                        <h1 class="display-5 fw-bolder">{singleUser.username}</h1>
                        <div class="fs-5 mb-5">
                            {/* <span class="text-decoration-line-through"></span> */}
                            <span>Place: {singleUser.place}</span>
                        </div>
                        <p class="lead">Address:  {singleUser.address}</p>
                        
                          <li>Mobile Number: {singleUser.mobile}</li>
                          <li>Email: {singleUser.email}</li>                      

                    </div>
                </div>
            </div>
        </section>
        :""//else state
      }
    </div>
  )
}

export default SingleView
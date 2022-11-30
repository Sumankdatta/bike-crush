import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const MyOrder = () => {

    const {user}=useContext(AuthContext);
    useTitle('my orders')

    const url=`http://localhost:5000/bookings?email=${user?.email}`;

    const {data:bookings=[]}=useQuery({
       
        queryKey:['bookings',user?.email],
        queryFn:()=>fetch(url,{
          header:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        
    })
    

    return (
        <div>
        <h1 className='text-2xl'>My Orders</h1>
        <div className="overflow-x-auto">
<table className="table w-full">
 
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>Treatment</th>
     <th>Location</th>
     <th>Email</th>
     <th>Price</th>
   </tr>
 </thead>
 <tbody>
   
   
     {
         bookings.map((booking,i)=><tr key={booking._id}>
             <th>{i+1}</th>
             <td>{booking.name}</td>
             <td>{booking.product}</td>
             <td>{booking.location}</td>
             <td>{booking.email}</td>
             <td>{booking.price}</td>
           </tr>)
        
     }
     
   
  </tbody>
</table>
</div>
     </div> 
    );
};

export default MyOrder;
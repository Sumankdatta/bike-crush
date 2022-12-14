import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const BookingModal = ({ productName,setProductName }) => {
    const {title}=productName;
    const {user}=useContext(AuthContext)
    useTitle('booking')


    const handleBooking=(event)=>{
        event.preventDefault()
        
        const form=event.target;
         const name=form.name.value;
        const email=form.email.value;
        const price=form.price.value;
        const location=form.location.value;
        const phone=form.phone.value;

        const booking ={
           
            product:title,
           name,
            email,
            price,
            location,
            phone
        }
        console.log(booking)

        fetch('https://bike-sale-server.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                
        setProductName(null)
            toast.success('Booking conformed')
            
            }
            else{
                toast.error(data.message)
            }
            
        })



    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" text-lg font-bold text-center ">{productName.title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name'  type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='price' type="text" defaultValue={productName.sell_price} disabled placeholder="Type here" className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full " />
                        <input name='phone' type="phone" placeholder="Your Phone Number" className="input input-bordered w-full " />
                        <br />
                       <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
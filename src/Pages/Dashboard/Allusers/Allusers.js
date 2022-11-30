import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Allusers = () => {
    useTitle('Allsellers')
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{ 
            const res=await fetch('https://bike-sale-server.vercel.app/users');
            const data=await res.json();
            return data
    }
    })

    return (
        <div>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Seller Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user?.role !=='admin' &&  <button  className='btn btn-xs btn-primary text-white'>Verify</button>}</td>
                            <td><button className='btn btn-xs btn-warning text-white'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Allusers;
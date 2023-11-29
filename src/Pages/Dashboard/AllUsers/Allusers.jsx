import { useQuery } from "@tanstack/react-query";

import { AiFillDelete, AiOutlineUser } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {



    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey: ['users'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/users',{
              headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
              }
            })
            return res.data
        }
    })

    const handleMakeAdmin= item=>{
      axiosSecure.patch(`/users/admin/${item._id}`)
      .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

    }

    const handleDelete= item=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        axiosSecure.delete(`/users/${item._id}`)
        .then(res=>{
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({ 
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
            }
        })
        }
      });
        
    }
    


    return (
        <div>
            <div className="flex justify-evenly">
            <h2 className="text-3xl">All Users</h2>
            <h2 className="text-3xl">Total Users: {users.length}</h2>
        </div>
        <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((item,index)=><tr key={item._id}>
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
           { item.role ==="admin" ? 'Admin' :
            <button onClick={()=>handleMakeAdmin(item)} className="btn btn-ghost btn-md bg-orange-700"><AiOutlineUser className="text-white text-2xl"></AiOutlineUser></button>}
            </td>
            <td>
            <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-md bg-red-500"><AiFillDelete></AiFillDelete></button>
            </td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
        </div>
    );
};

export default AllUsers;
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData()

    const [users, setUsers] = useState(loadedUser)
    const handleDelete = id => {
        // make sure user is confirmed to delete
        fetch(`https://coffee-store-server-dgfm.onrender.com/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    console.log(data)
                    console.log('deleted successfully')
                    //   remove the user from ui
                    const remainingUser = users.filter(user => user._id !== id);
                    setUsers(remainingUser);
                }
            })
    }


    return (
        <div>
            <h2>Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user) => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{users.lastLOggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
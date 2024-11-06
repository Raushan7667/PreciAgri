import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../Redux/Auth/Action';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  console.log("jwt is ",jwt)
  const {auth}=useSelector(store=>store);

   useEffect(() => {
    if (jwt) {
        dispatch(getUser( jwt ));
    }
}, [jwt, dispatch]);

// Separate useEffect to update profile when auth.user changes
useEffect(() => {
    if (auth.user) {
        console.log("User data is", auth.user);
        setProfile(auth.user);
    }
}, [auth.user]);

console.log("Profile is", profile);
   
      
    if (!profile) return <p className="text-center text-gray-500">Loading profile...</p>;

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">User Profile</h2>
            
            <div className="mb-4">
                <p className="text-lg font-semibold">Name:</p>
                <p className="text-gray-600">{profile.firstName} {profile.lastName}</p>
            </div>
            
            <div className="mb-4">
                <p className="text-lg font-semibold">Email:</p>
                <p className="text-gray-600">{profile.email}</p>
            </div>
            
            <div className="mb-4">
                <p className="text-lg font-semibold">Role:</p>
                <p className="text-gray-600">{profile.role}</p>
            </div>

            {profile.addresses.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-700">Addresses:</h3>
                    {profile.addresses.map((address, index) => (
                        <div key={address._id} className="mt-4 p-4 border border-gray-200 rounded-lg">
                            <p><span className="font-semibold">Street:</span> {address.streetAddress}</p>
                            <p><span className="font-semibold">City:</span> {address.city}</p>
                            <p><span className="font-semibold">State:</span> {address.state}</p>
                            <p><span className="font-semibold">Zip Code:</span> {address.zipCode}</p>
                            <p><span className="font-semibold">Mobile:</span> {address.mobile}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;




import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import "../Profile.css";
import { useQuery} from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Card = () => {

  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {}
  // navigate to personal profile page if username is the logged-in user's
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Navigate to="/profile" />;
//   }

  if (loading) {
    return <div>Loading...</div>;
  }
  
//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this page. Use the navigation links above to sign up or log in!
//       </h4>
//     );
//   }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card">
        <img src="./gymlogo.png" alt="John" style={{ width: "100%" }} />
        <h1 id="NameOfuser">{user.username}</h1>
        <p className="trainer">Personal Trainer</p>
        <p id="NameOftrainer"></p>
        <p className="membership">Membership Plan</p>
        <p id="MemberShipPlan">Membershipplan</p>
        
      </div>
    </div>
  );
};
export default Card;
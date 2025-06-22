import React from 'react';
import {useParams} from "react-router-dom";

const UserDetail = () => {
    const params = useParams()
    const {id, username} =params;
  return (
    <div>
      <h4>This is userdetail page</h4>
      <p>user id: {id}</p>
      <p>username:{username}</p>
    </div>
  );
};

export default UserDetail;

import React from "react";
import { useLocation } from "react-router-dom";

export default function UserChat() {
  const { state } = useLocation();
  const { user, singleJob } = state || {};

  return (
    <div>
      <h2>User Chat</h2>
      {user && (
        <div>
          <p> First name: {user && user?.firstName}</p>
          {/console.log(user.lastName)/}
          <p>User Email: {user.email}</p>
          {/console.log(user.email)/}
        </div>
      )}
      {singleJob && (
        <div>
          <p>Job Title: {singleJob.title}</p>
          <p>Job Description: {singleJob.description}</p>
          <p>Job Salary: {singleJob.salary}</p>
          <p>Job Location: {singleJob.location}</p>
        </div>
      )}
    </div>
  );
}
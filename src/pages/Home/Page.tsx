import React from "react";

const myPantry = [
  {
    name: "pasta",
    expiryDate: "2021-10-10",
  },
  {
    name: "rice",
    expiryDate: "2021-12-03",
  },
  {
    name: "potatoes",
    expiryDate: "2021-04-15",
  },
];

function Page() {
  return (
    <div>
      this is the homepage
      <h1>notifcations of upcoming expiry dates</h1>
      <h1>link to your pantry</h1>
      <h1>link to all your saved recipes</h1>
    </div>
  );
}

export default Page;

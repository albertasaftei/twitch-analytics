import React from "react";
import { GET } from "../api/route";

const Homepage = async () => {
  const data = await GET();
  return <div>Homepage </div>;
};

export default Homepage;

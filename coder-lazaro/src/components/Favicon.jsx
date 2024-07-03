import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const DynamicFavicon = () => {
  const [favicon, setFavicon] = useState("../../public/icons8-internet-48.png");

  const data = new Date().getHours()

  useEffect(() => {
    
    const determineFavicon = () => {
      
      const newFavicon = data >= 19 ? "../../public/icons8-internet-48.png" : "../../public/icons8-internet-48.png";
      setFavicon(newFavicon);
    };

    
    determineFavicon();

    
  }, [data]); 

  return (
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
  );
};

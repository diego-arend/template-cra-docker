import React, { useState, useEffect } from "react";
import { getDepositListRequest } from "./../../services/gitHubServices";

const UserInfo = () => {
  const [teste, setTeste] = useState("teste");

  useEffect(() => {
    getDepositListRequest("diego-arend").then((response) => {
      setTeste(response);
    });
  }, []);

  return (
    <div>
      <h1>{teste}</h1>
    </div>
  );
};

export default UserInfo;

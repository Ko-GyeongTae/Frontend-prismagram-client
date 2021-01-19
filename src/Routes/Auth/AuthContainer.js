import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN } from "./AuthQueries";
import { useMutation } from "react-apollo-hooks";

export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const [requestSecret] = useMutation(LOG_IN, {variables: {email: email.value}});
    
    const onLogin = (e) => {
    e.preventDefault();
    if(email !== ""){
        requestSecret();
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};

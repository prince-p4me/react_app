import React from "react";
import Routes from "../utils/Routes";
import Button from "../components/Button";


const Success = () => {
  return (
    <div >
      <p>Success Page</p>

      <Button navigatePath={Routes.PERSONAL} btnName={'OK'} />
    </div>
  )
}

export default Success;
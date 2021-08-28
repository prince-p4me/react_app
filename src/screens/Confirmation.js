import React from "react";
import Button from "../components/Button";
import Routes from "../utils/Routes";


const Confirmation = () => {
  return (
    <div >
      <p>Confirmation Page</p>

      <Button navigatePath={Routes.SUCCESS} />
    </div>
  )
}

export default Confirmation;
import React from "react";
import Button from "../components/Button";
import Routes from "../utils/Routes";


const Official = () => {
  return (
    <div >
      <p>Official Page</p>

      <Button navigatePath={Routes.CONFIRMATION} />
    </div>
  )
}

export default Official;
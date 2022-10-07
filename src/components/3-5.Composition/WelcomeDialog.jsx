import React from "react";
import CustomDialog from "./CustomDialog";
import Dialog from "./Dialog";

export default function WelcomeDialog() {
  return (
    <div>
      <Dialog>
        <h1>Welcome</h1>
        <h5>Thank you!</h5>
      </Dialog>

      <br />

      <CustomDialog title="Welcome" description="Thanks"></CustomDialog>
    </div>
  );
}

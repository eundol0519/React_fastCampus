import React from "react";

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome
      {props.count ? ` It's ${props.count} times` : null}
      {/* or {Boolean(props.count) && ` It's ${props.count} times`} */}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //  return <UserGreeting name="bom" count={0} />;
  // } else {
  //  return <GuestGreeting />;
  // }

  return props.isLoggedIn ? (
    <UserGreeting name="jimmy" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

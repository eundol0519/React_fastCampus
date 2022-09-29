import React, { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  // 컴포넌트가 그려지자마자 호출되는 함수
  useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, 1000);

    // 컴포넌트가 사라지기 직전에 호출되는 함수
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

import React, { useRef, useState } from "react";
import dayjs from "dayjs";

import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function MomentExample() {
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.add(1, "week");

  const [birthDay, setBirthDay] = useState(null);
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (e) => {
    const value = e.target.value;
    setBirthDay(dayjs(value, "YYYY-MM-DD").format("dddd")); // 요일 : dddd
  };

  return (
    <div>
      <h1>Day.js</h1>
      <p>Immutable Check</p>
      {dayjsDate.format()}
      <br />
      {newDayjsDate.format()}
      <br />
      {cloneNewDayjsDate.format()}
      <hr />
      <p>Summer Time (New-York)</p>
      <div>{dayjs.tz.guess()}</div>
      <br />
      2018년 3월 10일 13시에 하루 더하기:&nbsp;
      {dayjs.tz("2018-03-13 13:00", "America/New_York").add(1, "day").format()}
      <br />
      2018년 3월 10일 13시에 24시간 더하기:&nbsp;
      {dayjs
        .tz("2018-03-13 13:00", "America/New_York")
        .add(24, "hour")
        .format()}
      <hr />
      <p>Leap Year (Korea)</p>
      2017년 1월 1일에서 1년 빼기:&nbsp;
      {dayjs("2017-01-01").subtract(1, "year").format()}
      <br />
      2017년 1월 1일에서 365일 빼기:&nbsp;
      {dayjs("2017-01-01").subtract(365, "day").format()}
      <hr />
      <p>한국어로 표기하기 (10-30-2022을 2022년 10월 30일로 표기)</p>
      {dayjs("10-30-2022").format("YYYY년 MM월 DD일")}
      <hr />
      <p>자기 생일 요일 찾기</p>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <p>무슨 요일이었을까?</p>
      <span>{birthDay}</span>
      <hr />
      <p>두 날짜 비교</p>
      2022년 10월 30일 03:00와 2022년 10월 31일 02:00는 몇시간 차이인가?
      <br />
      {dayjs("10-30-2022 03:00").diff(
        dayjs("10-31-2022 02:00").format(),
        "hour"
      )}
      시간
    </div>
  );
}

import React, { useRef, useState } from "react";

import {
  add,
  format,
  addWeeks,
  sub,
  differenceInHours,
  toDate,
} from "date-fns";
import { ko } from "date-fns/locale"; // === import ko from "date-fns/locale/ko";

import { format as tzFormat } from "date-fns-tz";

export default function MomentExample() {
  const datefnsDate = new Date();
  const newDatefnsDate = add(datefnsDate, { weeks: 1 });
  const newDatefnsDate2 = addWeeks(newDatefnsDate, 1);

  const [birthDay, setBirthDay] = useState(null);
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (e) => {
    const value = e.target.value;
    setBirthDay(format(new Date(value), "EEEE", { locale: ko })); // 요일 : eeee
  };

  return (
    <div>
      <h1>date-fns</h1>
      <p>Immutable Check</p>
      {format(datefnsDate, "yyyy-MM-dd")}
      <br />
      {format(newDatefnsDate, "yyyy-MM-dd")}
      <br />
      {format(newDatefnsDate2, "yyyy-MM-dd")}
      <hr />
      <p>Summer Time (New-York)</p>
      {/* <div>{dayjs.tz.guess()}</div> */}
      <br />
      2023년 1월 1일 13시에 하루 더하기:&nbsp;
      {tzFormat(
        add(new Date("2023-01-01 13:00"), { days: 1 }),
        "yyyy-MM-dd HH:mm:ssXXX",
        {
          timezone: "America/New_York",
        }
      )}
      <br />
      2023년 1월 1일 13시에 24시간 더하기:&nbsp;
      <br />
      {tzFormat(
        add(
          toDate(new Date("2023-01-01 13:00"), {
            timezone: "America/New_York",
          }),
          { hours: 24 }
        ),
        "yyyy-MM-dd HH:mm:ssXXX",
        { timeZone: "America/New_York" }
      )}
      <br />
      {format(
        add(
          toDate(new Date("2023-01-01 13:00"), {
            timezone: "America/New_York",
          }),
          { hours: 24 }
        ),
        "yyyy-MM-dd HH:mm:ssXXX"
      )}
      <hr />
      <p>Leap Year (Korea)</p>
      2023년 1월 1일에서 1년 빼기:&nbsp;
      {format(sub(new Date("2023-01-01"), { years: 1 }), "yyyy-MM-dd")}
      <br />
      2023년 1월 1일에서 365일 빼기:&nbsp;
      {format(sub(new Date("2023-01-01"), { days: 365 }), "yyyy-MM-dd")}
      <hr />
      <p>한국어로 표기하기 (01-01-2023을 2023년 1월 1일로 표기)</p>
      {format(new Date("01-01-2023"), "yyyy년 MM월 dd일")}
      <hr />
      <p>자기 생일 요일 찾기</p>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <p>무슨 요일이었을까?</p>
      <span>{birthDay}</span>
      <hr />
      <p>두 날짜 비교</p>
      2023년 10월 30일 03:00와 2023년 10월 31일 02:00는 몇시간 차이인가?
      <br />
      {differenceInHours(
        new Date("01-01-2023 03:00"),
        new Date("01-01-2023 02:00")
      )}
      시간
    </div>
  );
}

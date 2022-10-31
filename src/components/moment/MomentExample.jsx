import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko"; // 한국어로 변경해주는 역할

export default function MomentExample() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

  const [birthDay, setBirthDay] = useState(null);
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (e) => {
    const value = e.target.value;
    setBirthDay(moment(value, "YYYY-MM-DD").format("dddd")); // 요일 : dddd
  };

  return (
    <div>
      <h1>Moment</h1>
      <p>Immutable Check</p>
      {momentDate.format()}
      <br />
      {newMomentDate.format()}
      <br />
      {cloneNewMomentDate.format()}
      <hr />
      <p>Summer Time (New-York)</p>
      2018년 3월 10일 13시에 하루 더하기:&nbsp;
      {moment.tz("2018-03-10 13:00", "America/New_York").add(1, "day").format()}
      <br />
      2018년 3월 10일 13시에 24시간 더하기:&nbsp;
      {moment
        .tz("2018-03-10 13:00", "America/New_York")
        .add(24, "hour")
        .format()}
      <hr />
      <p>Leap Year (Korea)</p>
      2017년 1월 1일에서 1년 빼기:&nbsp;
      {moment("2017-01-01").subtract(1, "year").format()}
      <br />
      2017년 1월 1일에서 365일 빼기:&nbsp;
      {moment("2017-01-01").subtract(365, "day").format()}
      <hr />
      <p>한국어로 표기하기 (10-30-2022을 2022년 10월 30일로 표기)</p>
      {moment("10-30-2022").format("YYYY년 MM월 DD일")}
      <hr />
      <p>자기 생일 요일 찾기</p>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <p>무슨 요일이었을까?</p>
      <span>{birthDay}</span>
      <hr />
      <p>두 날짜 비교</p>
      2022년 10월 30일 03:00와 2022년 10월 31일 02:00는 몇시간 차이인가?
      <br />
      {/* from : day를 비교해주는 것 같다. */}
      {/* {moment("10-30-2022 03:00").from(moment("10-31-2022 02:00").format())} */}
      {/* diff : 속성에 따라 비교해주는 것 같다. */}
      {moment("10-30-2022 03:00").diff(
        moment("10-31-2022 02:00").format(),
        "hour"
      )}
      시간
    </div>
  );
}

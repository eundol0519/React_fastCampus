import React from "react";

export default function Event() {
  const handleButtonClick = () => {
    console.log("handleButtonClick");
  };

  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };

  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };

  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };

  /*
    # 캡처링(capturing) 
      : 버블링과 반대로 최상단 태그에서 해당 태그를 찾아 내려갑니다.
        (document에서 자식 태그로 내려가면서 탐색하고, 해당 태그에서 이벤트가 발생한다.)

    # 버블링(bubbling) 
      : 한 요소에서 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의
        핸들러가 동작합니다. 가장 최상단의 조상 요소(document)를 만날 때까지 이벤트가 전달된다.
        (자식 이벤트 발생 -> 부모 태그로 전달을 거치면서 핸들러가 동작한다.)

    즉, 캡쳐링이 먼저 일어난 후 타겟이 실행되고 버블링이 일어난다.

    아래 예제에 console.log을 살펴보자.
    1) handleClickCapture2
    2) handleButtonClick
    3) handleClickBubble
    4) handleClickCapture

    보통은 잘 사용하지 않지만, 자식보다 부모가 먼저 클릭(이벤트)를 감지하고 싶을 때는 유용할 수 있다.
  */
  return (
    <div onClick={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>버튼</button>
      </div>
    </div>
  );
}

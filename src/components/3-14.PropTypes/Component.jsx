import React from "react";
import PropTypes from "prop-types";
// → 유효하지 않은 prop에 대한 경고는 개발 모드에서만 동작한다. (프로덕션, 실제 서비스에서는 경고가 뜨지 않는다.)
// (개발자 모드에서 문제(버그)를 인지하고 수정하라는 의미에서 콘솔에 warning을 출력 해주는 것이다.)
// → custom은 RegExp 등으로 사용자 정의 가능하다.
// → children 제한은 원래 제약없던 갯수 제약 가능하다.

function PropComponent(props) {
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: "Jimmy",
  age: 8,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  // age: PropTypes.number.isRequired, → 필수사항 설정 : isRequired
  // → 커스텀 함수 설정
  age: function (props, propName, componentName) {
    if (!/7/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default function Component() {
  return <PropComponent />;
}

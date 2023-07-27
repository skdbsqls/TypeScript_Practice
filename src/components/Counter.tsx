import React, { useEffect, useState } from "react";

const Counter = () => {
  // <number> 제네릭은 여기서는 생략 가능함
  // 생략 시 initialState 값인 0에 따라 타입이 추론되어 number의 타입은 number가 됨
  const [number, setNumber] = useState<number>(0);

  const handleMinusButtonClick = () => setNumber((prev) => prev - 1);
  const handlePlusButtonClick = () => setNumber((prev) => prev + 1);

  // 타입스크립트에서 함수를 생성할 때는 input과 output에 대한 타입을 명시해야 함
  // input 타입 명시 : (num: number)
  // output 타입 명시 : : string
  const createAlerMsg = (num: number): string => {
    return `현재 숫자는 ${num} 입니다.`;
  };

  // 만약 input과 output이 없는 함수라면 타입을 명시하지 않아도 됨
  // const alertMsg = () => {
  //  alert(createAlerMsg(number));
  // };

  // 만약 input과 output이 없는 함수임에도 타입을 명시하고 싶다면
  // output 타입을 void라고 표기할 수 있음
  const alertMsg = (): void => {
    alert(createAlerMsg(number));
  };

  useEffect(() => {
    console.log(`number가 ${number}로 변경되어 알려드립니다.`);
  }, [number]);

  return (
    <>
      <div>
        <h4>{number}</h4>
      </div>
      <div>
        <button onClick={handleMinusButtonClick}>감소</button>
        <button onClick={handlePlusButtonClick}>증가</button>
      </div>
      <button onClick={alertMsg}>메시지 출력</button>
    </>
  );
};

export default Counter;

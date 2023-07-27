import { useState } from "react";

const Practice = () => {
  // 배열로 지정된 state의 타입을 지정 : <string[]>
  const [names, setNames] = useState<string[]>([
    "원장",
    "제천",
    "동훈",
    "상림",
    "명한",
    "병수",
    "창영",
    "재상",
  ]);

  // state의 타입을 객체로 지정하고 객체 상태와 초기값을 세팅 : <{name: string; age: number}>
  const [person, setPerson] = useState<{ name: string; age: number }>({
    name: "원장",
    age: 21,
  });

  // 기존 배열에 새로운 이름을 추가하는 함수
  const addNewName = (): void => {
    // 추가할 때 마다 배열의 개수가 덧붙여져 신규 튜터님 이름이 생성
    const newName = `신규 튜터님 -> ${names.length + 1}`;
    setNames([...names, newName]);
  };

  // 나이를 업데이트하는 함수
  const updateAge = (): void => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <h1>리액트 튜터 목록</h1>
      <ul>
        {names.map((name: string, index: number) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={addNewName}>튜터 추가하기</button>

      <h1>가장 젊은 사람</h1>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateAge}>철들이기</button>
    </div>
  );
};

export default Practice;

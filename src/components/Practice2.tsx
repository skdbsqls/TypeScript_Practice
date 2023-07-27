import React, { useState } from "react";

const Practice2 = () => {
  // (1) interface를 이용한 Person 타입 정의
  interface Person {
    name: string;
    age: number;
  }

  //   (2) type을 이용한 Person 타입 정의
  //   type Person = {
  //     name: string,
  //     age: number
  //   }

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

  // interface를 이용해 정의한 Person 타입 사용 : <Person>
  const [person, setPerson] = useState<Person>({
    name: "원장",
    age: 21,
  });

  const addNewName = (): void => {
    const newName = `신규 튜터님 -> ${names.length + 1}`;
    setNames([...names, newName]);
  };

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

export default Practice2;

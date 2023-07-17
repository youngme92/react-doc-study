"use client";

import { useState } from "react";
import Square from "./Square";
import Board from "./Board";
import Game from "./Game";

export default function Tictacto() {
  return (
    <>
      {/* 1. 네모그리기 */}
      {/* 2. 9개 그리기 */}
      {/* 3. 안에 엑스 동그라미 표시 */}
      {/* 4. 현재 순서판단 */}
      {/* 5. 클릭하면 비어있는 네모에만 해당 순서의 값이 들어감 */}
      {/* 6. 특정 조건이 만족되면 게임 종료 */}
      {/* 7. 플레이 턴마다 히스토리 기억하기 */}
      {/* 8. 히스토리 클릭하면 이전 히스토리로 돌아가기 */}
      <Game />
    </>
  );
}

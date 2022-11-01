function problem4(word) {
  /*
  기능 목록 작성
  1. 기본 알파벳 배열과 Reverse 배열 준비 (대소문자 구분)
  2. word를 한 자리씩 잘라 순회하면서 알파벳이면 Reverse 배열에서 변환값 추출
  3. 최종 정답 반환
  */
  
  const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const upperReverseSet = [...upperSet].reverse();
  const lowerSet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const lowerReverseSet = [...lowerSet].reverse();

  const answer = word.split('');

  answer.map((v,i) => {
    if (upperSet.includes(v)) {
      answer[i] = upperReverseSet[upperSet.indexOf(v)];
    }
    if (lowerSet.includes(v)) {
      answer[i] = lowerReverseSet[lowerSet.indexOf(v)];
    }
  })
}

module.exports = problem4;

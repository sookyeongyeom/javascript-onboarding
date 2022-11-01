function problem3(number) {
  /*
  기능 목록
  1. 1부터 number까지 순회하면서 해당 숫자가 포함하는 3, 6, 9의 개수만큼 손뼉수 더하기
  2. 전체 손뼉수 정답으로 반환
  */
  
  let sum = 0;
  for (i = 1; i <= number; i++)
  {
    let array = (i + '').split('');
    let target = array.filter(v => v === '3' || v === '6' || v === '9');
    sum += target.length;
  }
}

module.exports = problem3;

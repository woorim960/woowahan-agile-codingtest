function solution(n) {
    const newNumber = (n + '');
    // 필요없는 공백 지우기
    // 필요없는 공백 지우기  
    return Number(newNumber.split('').sort().reverse().join(''));
}

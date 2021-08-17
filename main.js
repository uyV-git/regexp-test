const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the','gi')  // g(일치하는 모든 내용 검색), i(대소문자 구별 X) 
// const regexp = /the/gi
// console.log(str.match(regexp))


// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)


// console.log(str.match(/\.$/gim))
// \.: \. 에서 \를 붙이지 않으면 별도의 명령을 수행하게 되므로, .(마침표)를 찾으려고 한다면 이스케이프 문자 \를 붙여야 한다. 이스케이프 문자란 백슬래시(\) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.
// $는 앞에 있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다 라는 의미. 옵션에서 m을 붙이지 않으면 전체 문자열에서 끝나는 부분은 백틱 기호 부분의 바로 앞쪽이기 때문에 null이라는 결과가 도출됨. 반면 m을 붙이면 각각의 줄에서 끝나는 부분에서 마침표를 일치시키기 때문에, ["."] 이라는 결과가 도출됨. 
// 원래 문자열의 시작과 끝은 하나씩이지만, m을 붙이게 되면 줄바꿈이 되어져 있는 각각의 줄들에 시작과 끝을 부여하게 됨.


// console.log(
//   str.match(/^t/gim)
// )

// console.log(
//   str.match(/./g)
// )
// console.log(
//   str.match(/h..p/g)
// )

// console.log(
//   str.match(/fox|dog/g)
// )
// console.log(
//   str.match(/https?/g)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )
// \w: 숫자를 포함한 영어 알파벳들을 의미
// \b: 숫자를 포함한 영어 알파벳이 아닌 것들로 이루어진 경계를 만들어 줌.

console.log(
  str.match(/[fox]/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)
)
console.log(
  str.match(/\d{1,}/g)
)

const h = `  the hello  world   !

`
console.log(
  str.match(/\s/g)
)
console.log(
  h.replace(/\s/g, '')
)


const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  str2.match(/.{1,}(?=@)/g)
)
console.log(
  str2.match(/(?<=@).{1,}/g)
)
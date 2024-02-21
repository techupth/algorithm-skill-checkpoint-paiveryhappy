// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

const getMaxCharacters = (str) => {
  //สร้างตัวแปรมาเก็บจำนวนตัวอักษร แบบ object เพราะเก็บเป็น key-value pair เช่น a: 1 , c: 7
  let countCharacter = {};
  for (let letter of str) {
    //ถ้ามีตัวอักษรใน object แล้วให้ +1 เพิ่มไปเรื่อยๆ
    if (countCharacter[letter]) {
      countCharacter[letter] += 1;
      // แต่ถ้าไม่มีให้มีค่าเท่ากับ 1
    } else {
      countCharacter[letter] = 1;
    }
    console.log(countCharacter[letter]); // 1 1 1 2 3 4 5 6 7 1
  }
  console.log(countCharacter); // { a: 1, b: 1, c: 7, d: 1 }

  //หาตัวอักษรที่ซ้ำกันบ่อย
  let maxFreq = "";
  let maxMostCharacter = 0;
  // ใช้ for loop in ใน object
  for (let character in countCharacter) {
    // ตรวจว่าความถี่ของตัวอักษรนี้มากกว่าความถี่สูงสุดที่เก็บไว้หรือไม่
    if (countCharacter[character] > maxFreq) {
      // หากมากกว่า ก็อัปเดตค่าความถี่สูงสุด
      maxFreq = countCharacter[character];
      // และกำหนดตัวอักษรที่ปรากฏบ่อยที่สุดใหม่
      maxMostCharacter = character;
    }
    console.log(maxFreq); //c
  }
  return maxMostCharacter;
};

let word = "abcccccccd";
console.log(getMaxCharacters(word));

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

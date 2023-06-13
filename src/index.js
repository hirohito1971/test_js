// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "ひろひと",
//   age: 51
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// // const { name, age } = myProfile;
// // const message2 = `名前は${name}です。年齢は${age}歳です2。`;
// // console.log(message2);

// const myProfile = ["ひろひと", 28];
// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

/**
 * デフォルト値など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello();

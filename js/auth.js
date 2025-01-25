// ユーザー名とパスワード
const username = "test";
const password = "test";

// 認証処理
const userInput = prompt("Enter Username:");
const passInput = prompt("Enter Password:");

if (userInput !== username || passInput !== password) {
  document.body.innerHTML = "<h1>Access Denied</h1>";
}
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  //개인 파이어베이스 설정정보
  apiKey: "AIzaSyA0Ef8eB_yFQ-LoCvToVv-n5lV5QUnXBAI",
  authDomain: "team-b11.firebaseapp.com",
  projectId: "team-b11",
  storageBucket: "team-b11.appspot.com",
  messagingSenderId: "1009430671259",
  appId: "1:1009430671259:web:9b53586381b4bdbad2fb3e",
  measurementId: "G-NWRFDJ8GTC",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#postinbtn").click(async function () {
  let names = $("#names").val();
  let contents = $("#contents").val();

  let doc = {
    names: names,
    contents: contents,
  };
  await addDoc(collection(db, "team11"), doc);
  alert("저장 완료");
  window.location.reload();
});

let docs = await getDocs(collection(db, "team11"));
docs.forEach((doc) => {
  let row = doc.data();
  let names = row["names"];
  let contents = row["contents"];

  let temp_html = `<div class="card1">
      <div class="card-body">
        <h5 class="card-title">${names}</h5><br>
        <p class="card-text" color="red">${contents}</p>
      </div>
    </div>`;
  $("#card").append(temp_html);
});

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {};

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

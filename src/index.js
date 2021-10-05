import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerHTML = inputText;

  // buttonタグ生成
  const fin_btn = document.createElement("button");
  fin_btn.innerHTML = "完了";
  fin_btn.addEventListener("click", () => {
    alert("完了");
  });
  const del_btn = document.createElement("button");
  del_btn.innerHTML = "削除";
  del_btn.addEventListener("click", () => {
    alert("削除");
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(fin_btn);
  div.appendChild(del_btn);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

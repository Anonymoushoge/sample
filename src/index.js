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
    // 完了したTODOに移動
    const fin_target = fin_btn.parentNode.parentNode;
    document.getElementById("complete-list").appendChild(fin_target);
    const rtn_btn = document.createElement("button");
    rtn_btn.innerHTML = "戻す";
    rtn_btn.addEventListener("click", () => {
      document
        .getElementById("imcomplete-list")
        .appendChild(rtn_btn.parentNode.parentNode);
      rtn_btn.parentNode.appendChild(fin_btn);
      rtn_btn.parentNode.appendChild(del_btn);
      rtn_btn.parentNode.removeChild(rtn_btn);
    });
    fin_btn.parentNode.appendChild(rtn_btn);
    rtn_btn.parentNode.removeChild(fin_btn);
    rtn_btn.parentNode.removeChild(del_btn);
  });

  const del_btn = document.createElement("button");
  del_btn.innerHTML = "削除";
  del_btn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    const del_target = del_btn.parentNode.parentNode;
    document.getElementById("imcomplete-list").removeChild(del_target);
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

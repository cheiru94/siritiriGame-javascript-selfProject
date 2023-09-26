
// ※ querySelector ※
  const number = Number(prompt('何名様でいらっしゃいますか？'));
  const $button = document.querySelector('button');
  const $input = document.querySelector('input');
  const $word = document.querySelector('#word');
  const $order = document.querySelector('#order');

// ※ 変数設定 ※
  let word; // 🟢 提示語　->人々が単語を入力するたびに変わるので "let"で設定
  let newWord; // 🟡 現在単語


// ※ ハンドラ ※

  // 1. ハンドラ__onClickButton
  const onClickButton = () => {
    
    
    // 1.1. 空いている又は入力の単語が正しいなのか❓
    if (!word || word[word.length - 1] === newWord[0]) {

    //🟢 <- 🟡
      word = newWord; // 🟡 入力した単語が提示語（'word'）になる
      $word.textContent = word; //画面に提示語を表す

      const order = Number($order.textContent); // 順番チェック

      // 1.1.1. ４人目以上なら、初期化させる
      if (order+1 > number) {
        $order.textContent = 1; //　最初の人に回す

      // 1.1.2. 3人目以下なら、続ける
      } else {
        $order.textContent = order + 1; // 次ん人に回す
      } 

    // 1.2. 空いてない又は入力の単語が正しくないか？
    } else {
        alert('単語が正しくありません！');
    }
      //　inputの初期化
      $input.value = '';
      $input.focus();
    };

  // 2. ハンドラ__onInput
  const onInput = (event) => {
    newWord = event.target.value; // 🟡入力する単語を現在単語に入れよう
  };

  $button.addEventListener('click', onClickButton);
  $input.addEventListener('input', onInput);



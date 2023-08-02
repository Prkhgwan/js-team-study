let pocket = 10000;

function showPrice() {
  const cost = document.getElementById('price')
  price.innerHTML = ("현재 잔액 :" + pocket)
};

function slot() {
  return Math.floor(Math.random() *9);
};

const button = document.querySelector("#btn");

button.onclick = function() {
  if (pocket < 1000 ) {
    alert("돈이 모자랍니다!")
    return;
  }
  pocket -= 1000;

  let num1 = slot();
  let num2 = slot();
  let num3 = slot();

  const No1 = document.getElementById("first_num");
  No1.innerHTML = (num1);
  const No2 = document.getElementById("second_num");
  No2.innerHTML = (num2);
  const No3 = document.getElementById("third_num");
  No3.innerHTML = (num3);

  if ( num1 === num2 && num1 === num3 ) {
    pocket += num1*5000;
  } if ( num1 === 0 && num1 === num2 && num1 === num3 ) {
    pocket += 10000;
  } 
  if ( num1 === 7 ) {
    pocket += 2500;
  } 
  if ( num2 === 7 ) {
    pocket += 2500;
  } 
  if ( num3 === 7 ) {
    pocket += 2500;
  }
  console.log("현재 잔고 : " + pocket + ", 1번 : " + num1 + ", 2번 : " + num2 + ", 3번 : " +num3);
  showPrice();
};


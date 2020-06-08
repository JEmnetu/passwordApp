$(() => {
  let s = $('input[name="special"]');
  let u = $('input[name="upper"]');
  let l = $('input[name="lower"]');
  let n = $('input[name="number"]');
  let ln = $('input[name="length"]');

  var lowerArr = "abcdefghijklmnopqrstuvwxyz";
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numArr = "0123456789";
  var specArr = "#$%&()*+-/:;<=>?@[^_{|}~";

  let form1 = $("#select-options");
  let passDiv = $("#pass");

  let passwordBank = "";

  form1.submit((e) => {
    e.preventDefault();

    // User password preferences collected from the form
    let charPref = {
      upper: u[0].checked,
      lower: l[0].checked,
      number: n[0].checked,
      special: s[0].checked,
      length: ln[0].value,
    };

    passwordBank = "";

    if (charPref.upper) {
      passwordBank += upperArr;
    }
    if (charPref.lower) {
      passwordBank += lowerArr;
    }
    if (charPref.number) {
      passwordBank += numArr;
    }
    if (charPref.special) {
      passwordBank += specArr;
    }

    console.log(charPref);
    console.log(passwordBank);

    alert("Success!");

    charPref.upper = false;
  });
});

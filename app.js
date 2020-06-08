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
  let password = "";

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
    passDiv.text("");

    // Validate that at least one character type was selected

    if (
      charPref.upper == false &&
      charPref.lower == false &&
      charPref.number == false &&
      charPref.special == false
    ) {
      alert("Please select at least one character type");
      return;
    }

    if (charPref.length == "") {
      alert("Please select a length between 8 and 128");
      return;
    }

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

    for (i = 0; i < charPref.length; i++) {
      password =
        password +
        passwordBank.charAt(
          Math.floor(Math.random() * passwordBank.length + 1)
        );
    }

    if (password.length > 0) {
      passDiv.text(password);
    }
    password = "";
    alert("Success!");
  });
});

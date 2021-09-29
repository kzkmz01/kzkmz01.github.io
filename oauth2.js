const x = selector => document.querySelector(selector);

const processEntries = () => {
  console.log("processEntries function has started");

  var url = "https://w373dhtpiaexl2b-genis.adb.uk-london-1.oraclecloudapps.com/ords/oc_admin/oauth/token";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Authorization", "Basic cklidUZWZXJ6cmRGUE5YWlNRN2hsdy4uOkdELXMyRmw5S0NfSE1TU0R1X2psZ3cuLg==");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        var data=xhr.responseText;
        var jsonResponse = JSON.parse(data);
        var acc_token = jsonResponse["access_token"]

      var email = document.getElementById("email").value;
      console.log(email);

      
      var settings = {
        "url": "https://w373dhtpiaexl2b-genis.adb.uk-london-1.oraclecloudapps.com/ords/oc_admin/members/check_email/" + email,
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer " + acc_token
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });

    }};

  var data = "grant_type=client_credentials";

  xhr.send(data);
};

document.addEventListener("DOMContentLoaded", () => {
  x("#get_data").addEventListener("click", processEntries);
  x("#email").focus();
});



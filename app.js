function generateCard() {

  var name = document.getElementById("name").value
  var father = document.getElementById("father").value
  var email = document.getElementById("email").value
  var course = document.getElementById("course").value
  var batch = document.getElementById("batch").value
  var cnic = document.getElementById("cnic").value
  var phone = document.getElementById("phone").value
  var imageFile = document.getElementById("image").files[0]

  if (
    name === "" ||
    father === "" ||
    email === "" ||
    course === "" ||
    batch === "" ||
    cnic === "" ||
    phone === "" ||
    !imageFile
  ) {
    alert("⚠️ Please fill all fields and upload your photo!")
    return
  }


  document.getElementById("cardName").textContent = name
  document.getElementById("cardFather").textContent = father
  document.getElementById("cardEmail").textContent = email
  document.getElementById("cardCourse").textContent = course
  document.getElementById("cardBatch").textContent = batch
  document.getElementById("cardCnic").textContent = cnic
  document.getElementById("cardPhone").textContent = phone


  var reader = new FileReader()
  reader.onload = function (event) {
    document.getElementById("cardImage").src = event.target.result
  };
  reader.readAsDataURL(imageFile)


  document.getElementById("formBox").style.display = "none"
  document.getElementById("idCard").style.display = "block"
}

function resetCard() {

  document.getElementById("idCard").style.display = "none"
  document.getElementById("formBox").style.display = "block"


  document.getElementById("name").value = ""
  document.getElementById("father").value = ""
  document.getElementById("email").value = ""
  document.getElementById("course").value = ""
  document.getElementById("batch").value = ""
  document.getElementById("cnic").value = ""
  document.getElementById("phone").value = ""
  document.getElementById("image").value = ""
}

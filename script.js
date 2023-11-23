const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", ()=>{
  //alert("Clicado no btn alterar componentes!");
  
  const inputName = document.getElementById("name");
  inputName.value = "Valor alterado!";

})

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=>{
  //alert("Clicado no btn copiar valores!");

  const inputName = document.getElementById("name");
  const labelName = inputName.previousElementSibling;

  const form2 = document.getElementById("form2");
  form2.innerHTML = "";

  form2.appendChild(labelName.cloneNode(true));
  form2.appendChild(inputName.cloneNode(true));


})

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", ()=>{
  //alert("Clicado no btn criar componentes!");

  const form3 = document.getElementById("form3");
  form3.innerHTML = "";

  const lblName = document.createElement("label");
  lblName.textContent = "Label nome criada";

  form3.appendChild(lblName);

  const inputName = document.createElement("input");
  form3.appendChild(inputName);

})


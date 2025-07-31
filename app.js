// ???? ??????? ?? ????? ???? ????? ??????
const form = document.getElementById("customer-form");
const list = document.getElementById("customer-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pkg = document.getElementById("package").value;

  if (name === "" || phone === "") {
    alert("????? ???? ?????? ?? ?? ????.");
    return;
  }

  const customer = {
    name,
    phone,
    pkg,
    createdAt: new Date().toLocaleDateString("fa-IR"),
  };

  addCustomerToList(customer);
  form.reset();
});

function addCustomerToList(customer) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${customer.name}</strong> - ?? ${customer.phone}<br/>
    ???? ${customer.pkg} ??????? - ?? ??? ?? ${customer.createdAt}
  `;
  list.prepend(li);
}

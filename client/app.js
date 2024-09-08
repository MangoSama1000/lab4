const messageboardContainer = document.getElementById("messageList");

async function getmessagelist() {
  const response = await fetch(
    "http://localhost:5500/");
  const data = await response.json();
  console.log(data);

  messageListContainer.innerHTML = "";

  data.forEach(function (messageList) {
    const p = document.createElement("p");
    p.textContent = `${messageList.username}: ${messageList.password}`;
    messageList.appendChild(p);
  });
}
getmistakes();


const form = document.getElementById("guestbook-form");

async function handlePostMessages(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  await fetch("http://localhost:5500/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  form.reset();
  getmessageList();
}

form.addEventListener("submit", handlePostMessages);
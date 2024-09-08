const messageboardContainer = document.getElementById("messageList");

async function getmessagelist() {
  const response = await fetch(
    "https://week4-project-tb61.onrender.com/messageboard");
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

  await fetch("https://week4-project-tb61.onrender.com/messageboard", {
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
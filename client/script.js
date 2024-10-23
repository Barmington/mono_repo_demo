const messageForm = document.querySelector("#messageForm");

async function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = Object.fromEntries(formData);
  console.log(message);

  const response = await fetch("http://localhost:3000/message", {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log(data);
}

messageForm.addEventListener("submit", handleSubmitMessageForm);

const messageForm = document.querySelector("#messageForm");

async function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  const response = await fetch("http://localhost:3000/message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
}

form.addEventListener("submit", handleSubmit);

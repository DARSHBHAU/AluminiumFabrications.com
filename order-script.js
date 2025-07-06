document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const address = document.getElementById("address").value;
  const review = document.getElementById("rev").value;

  fetch("http://localhost:3000/send-review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, contact, address, review }),
  })
    .then((res) => res.text())
    .then((data) => {
      alert("Review sent successfully!");
      document.getElementById("orderForm").reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send review.");
    });
});

  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
  }

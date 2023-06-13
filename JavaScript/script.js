document.addEventListener("DOMContentLoaded", function() {
  const floatingButton = document.getElementById("floatingButton");

  floatingButton.addEventListener("click", function() {
    const contactWindow = window.open("C:/Users/Admin-ti/Desktop/FL Eventos/Paginas/contacts.html", "_blank", "width=400,height=300");
  });

  function handleResize() {
    if (window.innerWidth < 768) {
      floatingButton.classList.remove("hidden");
      contactInfo.classList.remove("visible");
    } else {
      floatingButton.classList.add("hidden");
      contactInfo.classList.remove("visible");
    }
  }

  window.addEventListener("resize", handleResize);
});
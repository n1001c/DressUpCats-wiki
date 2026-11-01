const q = document.getElementById("q");
if (q) {
  let slot = "all";
  const cards = [...document.querySelectorAll(".card[data-slot]")];
  const apply = () => {
    const text = q.value.trim().toLowerCase();
    for (const c of cards) c.hidden = !((slot === "all" || c.dataset.slot === slot) && (!text || c.dataset.search.includes(text) || c.querySelector("h3").textContent.toLowerCase().includes(text)));
  };
  q.addEventListener("input", apply);
  for (const b of document.querySelectorAll(".filters button")) b.addEventListener("click", () => {
    slot = b.dataset.slot;
    document.querySelectorAll(".filters button").forEach(x => x.classList.toggle("on", x === b));
    apply();
  });
}

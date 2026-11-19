/* Yahan apni shop ki asal details likhein. */
var SHOP = {
  name: "Gentle Men Hair Saloon",
  whatsapp: "923130478544",          /* country code ke saath, bina + aur bina 0 ke */
  phoneShown: "0313 0478544",
  instagram: "hammad.shaikh.125"        /* sirf username */
};

function waLink(text) {
  return "https://wa.me/" + SHOP.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
}
var greet = "Assalam o Alaikum, mujhe " + SHOP.name + " mein booking karni hai.";
document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = waLink(greet); });
document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = "https://www.instagram.com/" + SHOP.instagram; });
document.querySelector("[data-phone-text]").textContent = SHOP.phoneShown;
document.querySelector("[data-ig-text]").textContent = "@" + SHOP.instagram;

var nm = document.getElementById("nm"), sv = document.getElementById("sv"),
    dt = document.getElementById("dt"), tm = document.getElementById("tm"),
    send = document.getElementById("send"), hint = document.getElementById("hint");

var now = new Date();
var iso = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
dt.min = iso;

function niceDate(v) {
  if (!v) return "";
  var p = v.split("-");
  return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
}
function refresh() {
  var msg = "Assalam o Alaikum, main " + (nm.value.trim() || "...") + " hoon. Mujhe " + SHOP.name +
    " mein booking chahiye.\nService: " + sv.value + "\nTareekh: " + niceDate(dt.value) + "\nWaqt: " + tm.value +
    "\nShukriya.";
  send.href = waLink(msg);
}
["input", "change"].forEach(function (e) { document.getElementById("bf").addEventListener(e, refresh); });
document.getElementById("bf").addEventListener("submit", function (e) { e.preventDefault(); });
send.addEventListener("click", function (e) {
  if (!nm.value.trim() || !dt.value) {
    e.preventDefault();
    hint.textContent = "Pehle apna naam aur tareekh likhein.";
    return;
  }
  hint.textContent = "";
});
refresh();
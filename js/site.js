const WA = "96179403399";
const MENU = [
  { id:"beef", cat:"burgers", name:{en:"Classic Beef Burger",ar:"كلاسيك بيف برغر"}, desc:{en:"Beef, iceberg, mayo, ketchup, BBQ, cheddar",ar:"لحم، خس، مايونيز، كتشب، باربكيو، شيدر"}, price:"$4.50", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=70" },
  { id:"chicken", cat:"burgers", name:{en:"Classic Chicken Burger",ar:"كلاسيك تشيكن برغر"}, desc:{en:"Grilled chicken, iceberg, mayo, cheddar",ar:"دجاج مشوي، خس، مايونيز، شيدر"}, price:"$5", img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=700&q=70" },
  { id:"cheese", cat:"burgers", name:{en:"Cheese Burger",ar:"تشيز برغر"}, desc:{en:"Crispy chicken, extra cheddar, iceberg, mayo",ar:"دجاج مقرمش، شيدر إضافي، خس، مايونيز"}, price:"$6", img:"https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=70" },
  { id:"zinger", cat:"burgers", name:{en:"Zinger Chicken Burger",ar:"زنجر تشيكن برغر"}, desc:{en:"Hot zinger chicken, iceberg, hot sauce, cheddar",ar:"دجاج زنجر حار، خس، صوص حار، شيدر"}, price:"$5.50", img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=70" },
  { id:"double", cat:"burgers", name:{en:"Double Cheese Burger",ar:"دبل تشيز برغر"}, desc:{en:"Beef or chicken, iceberg, mayo, cheddar",ar:"لحم أو دجاج، خس، مايونيز، شيدر"}, price:"$7.50", img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=70" },
  { id:"mushroom", cat:"burgers", name:{en:"Mushroom Burger",ar:"ماشروم برغر"}, desc:{en:"White sauce, beef, mushrooms, iceberg, cheddar",ar:"صوص أبيض، لحم، فطر، خس، شيدر"}, price:"$7", img:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=70" },
  { id:"dragon", cat:"burgers", name:{en:"Dragon Burger",ar:"دراغون برغر"}, desc:{en:"Chicken, cocktail sauce, iceberg, cheddar",ar:"دجاج، صوص كوكتيل، خس، شيدر"}, price:"$6", img:"https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=700&q=70" },
  { id:"mozzburg", cat:"burgers", name:{en:"CrunX Mozzarella Burger",ar:"كرانكس موتزاريلا برغر"}, desc:{en:"Chicken, mozzarella, iceberg, cocktail sauce, cheddar",ar:"دجاج، موتزاريلا، خس، صوص كوكتيل، شيدر"}, price:"$7", img:"https://images.unsplash.com/photo-1596662951482-0c1ba141cd60?auto=format&fit=crop&w=700&q=70" },
  { id:"box5", cat:"boxes", name:{en:"Crispy Box 5 pcs",ar:"كريسبي بوكس 5 قطع"}, desc:{en:"Crispy fried chicken pieces",ar:"قطع دجاج مقرمشة"}, price:"$5.50", img:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=70" },
  { id:"box8", cat:"boxes", name:{en:"Crispy Box 8 pcs",ar:"كريسبي بوكس 8 قطع"}, desc:{en:"Share box of crispy chicken",ar:"بوكس دجاج للحصة"}, price:"$7", img:"https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=70" },
  { id:"nuggets", cat:"boxes", name:{en:"Nuggets 9 pcs",ar:"ناغتس 9 قطع"}, desc:{en:"Crispy chicken nuggets",ar:"ناغتس دجاج"}, price:"$4", img:"https://images.unsplash.com/photo-1562967916-eb82221dfb24?auto=format&fit=crop&w=700&q=70" },
  { id:"sticks", cat:"apps", name:{en:"Mozzarella Sticks 4 pcs",ar:"أصابع موتزاريلا 4 قطع"}, desc:{en:"Fried mozzarella with dip",ar:"موتزاريلا مقلية"}, price:"$4", img:"https://images.unsplash.com/photo-1548340748-6d08d226a0b0?auto=format&fit=crop&w=700&q=70" },
  { id:"rings", cat:"apps", name:{en:"Onion Rings 7 pcs",ar:"حلقات بصل 7 قطع"}, desc:{en:"Crunchy onion rings",ar:"حلقات بصل مقرمشة"}, price:"$3.50", img:"https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=700&q=70" },
  { id:"balls", cat:"apps", name:{en:"Cheese Balls 5 pcs",ar:"كرات جبنة 5 قطع"}, desc:{en:"Molten cheese balls",ar:"كرات جبنة ذائبة"}, price:"$4.50", img:"https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=700&q=70" },
  { id:"loaded", cat:"fries", name:{en:"Loaded Fries",ar:"لودد فرايز"}, desc:{en:"Fries, BBQ, 3 pcs crispy chicken, cheddar",ar:"بطاطا، باربكيو، 3 قطع دجاج، شيدر"}, price:"$6", img:"https://images.unsplash.com/photo-1576107232134-0471dd5e79c7?auto=format&fit=crop&w=700&q=70" },
  { id:"smallf", cat:"fries", name:{en:"Small Fries",ar:"بطاطا صغيرة"}, desc:{en:"Classic salted fries",ar:"بطاطا مملحة"}, price:"$2", img:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=700&q=70" },
  { id:"bigf", cat:"fries", name:{en:"Big Box Fries",ar:"بوكس بطاطا كبير"}, desc:{en:"Share box of fries",ar:"علبة بطاطا كبيرة"}, price:"$4", img:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=70" },
  { id:"wedges", cat:"fries", name:{en:"Potato Wedges",ar:"ويدجز"}, desc:{en:"Seasoned potato wedges",ar:"ويدجز متبلة"}, price:"$3", img:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=700&q=70" },
  { id:"cchoc", cat:"crepes", name:{en:"Chocolate crepe",ar:"كريب شوكولا"}, desc:{en:"Classic chocolate",ar:"شوكولا"}, price:"300 L.L.", img:"https://images.unsplash.com/photo-1519676867242-2d90bb2d0a0e?auto=format&fit=crop&w=700&q=70" },
  { id:"cnut", cat:"crepes", name:{en:"Nutella crepe",ar:"كريب نوتيلا"}, desc:{en:"Nutella",ar:"نوتيلا"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1612182062966-c3097c56c4d4?auto=format&fit=crop&w=700&q=70" },
  { id:"coreo", cat:"crepes", name:{en:"Oreo crepe",ar:"كريب أوريو"}, desc:{en:"Oreo",ar:"أوريو"}, price:"350 L.L.", img:"https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=700&q=70" },
  { id:"cbrow", cat:"crepes", name:{en:"Brownie crepe",ar:"كريب براوني"}, desc:{en:"Brownie",ar:"براوني"}, price:"350 L.L.", img:"https://images.unsplash.com/photo-1588195538326-c00b3d1d0e3a?auto=format&fit=crop&w=700&q=70" },
  { id:"clotus", cat:"crepes", name:{en:"Lotus crepe",ar:"كريب لوتس"}, desc:{en:"Lotus Biscoff",ar:"لوتس"}, price:"350 L.L.", img:"https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=700&q=70" },
  { id:"cwhite", cat:"crepes", name:{en:"White crepe",ar:"كريب أبيض"}, desc:{en:"White chocolate",ar:"شوكولا بيضاء"}, price:"350 L.L.", img:"https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=700&q=70" },
  { id:"ckit", cat:"crepes", name:{en:"KitKat crepe",ar:"كريب كيت كات"}, desc:{en:"KitKat",ar:"كيت كات"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=70" },
  { id:"ckind", cat:"crepes", name:{en:"Kinder crepe",ar:"كريب كيندر"}, desc:{en:"Kinder",ar:"كيندر"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=70" },
  { id:"cmilka", cat:"crepes", name:{en:"Milka crepe",ar:"كريب ميلكا"}, desc:{en:"Milka",ar:"ميلكا"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=700&q=70" },
  { id:"cgal", cat:"crepes", name:{en:"Galaxy crepe",ar:"كريب غالاكسي"}, desc:{en:"Galaxy",ar:"غالاكسي"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=700&q=70" },
  { id:"cmm", cat:"crepes", name:{en:"M&M crepe",ar:"كريب إم آند إم"}, desc:{en:"M&M",ar:"إم آند إم"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=70" },
  { id:"cfruit", cat:"crepes", name:{en:"Fruit crepe",ar:"كريب فواكه"}, desc:{en:"Fresh fruit",ar:"فواكه"}, price:"400 L.L.", img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=70" },
  { id:"cola", cat:"drinks", name:{en:"Soft drink",ar:"مشروب غازي"}, desc:{en:"Cold canned soda",ar:"علبة باردة"}, price:"$1", img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=70" },
  { id:"orange", cat:"drinks", name:{en:"Fresh orange juice",ar:"عصير برتقال طازج"}, desc:{en:"Squeezed to order",ar:"يعصر لحظة الطلب"}, price:"$2", img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=70" },
  { id:"lemon", cat:"drinks", name:{en:"Lemonade",ar:"ليموناضة"}, desc:{en:"Fresh lemon, ice, mint",ar:"ليمون، تلج ونعنع"}, price:"$2", img:"https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=70" },
  { id:"cocktail", cat:"drinks", name:{en:"Fruit cocktail",ar:"كوكتيل فواكه"}, desc:{en:"Mixed fruit juice",ar:"عصير فواكه مشكل"}, price:"$2.50", img:"https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=70" },
  { id:"icetea", cat:"drinks", name:{en:"Iced tea",ar:"آيس تي"}, desc:{en:"Cold sweet tea",ar:"شاي مثلّج"}, price:"$1.50", img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=70" },
  { id:"water", cat:"drinks", name:{en:"Water",ar:"مياه"}, desc:{en:"Bottled water",ar:"مياه معدنية"}, price:"$0.50", img:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=70" }
];

const I18N = {
  en: { home:"Home", menu:"Menu", crepes:"Crepes", drinks:"Drinks", about:"About", order:"Order", orderNow:"Order now", add:"Add", empty:"Your bag is empty.", send:"Send on WhatsApp", name:"Name", area:"Area / street", notes:"Notes" },
  ar: { home:"الرئيسية", menu:"المنيو", crepes:"كريب", drinks:"مشروبات", about:"عنّا", order:"اطلب", orderNow:"اطلب هلق", add:"زيد", empty:"السلة فاضية.", send:"ابعت واتساب", name:"الاسم", area:"المنطقة", notes:"ملاحظات" }
};

let lang = localStorage.getItem("cx_lang") || "en";
let cart = JSON.parse(localStorage.getItem("cx_cart") || "[]");

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const t = (k) => I18N[lang][k];
const save = () => localStorage.setItem("cx_cart", JSON.stringify(cart));

function count() { return cart.reduce((n,i)=>n+i.qty,0); }

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("ar", lang === "ar");
  $$("[data-i]").forEach(el => { if (I18N[lang][el.dataset.i]) el.textContent = I18N[lang][el.dataset.i]; });
  const lb = $("#langBtn"); if (lb) lb.textContent = lang === "en" ? "ع" : "EN";
  renderCart();
  if (window.renderPageMenu) window.renderPageMenu();
}

function renderCart() {
  const b = $("#cartCount");
  if (b) { b.textContent = count(); b.hidden = count()===0; }
  const box = $("#cartList");
  if (!box) return;
  if (!cart.length) { box.innerHTML = `<p>${t("empty")}</p>`; return; }
  box.innerHTML = "<ul>" + cart.map(i => `<li><span>${i.qty}× ${i.name[lang]}</span><span>${i.price} <button class="remove" data-rm="${i.id}">✕</button></span></li>`).join("") + "</ul>";
}

function addItem(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty += 1; else cart.push({...item, qty:1});
  save(); renderCart();
}

function sendWA() {
  const name = $("#custName")?.value.trim() || "";
  const area = $("#custArea")?.value.trim() || "";
  const notes = $("#custNotes")?.value.trim() || "";
  let msg = lang==="ar" ? "مرحبا كرانكس، بدي أطلب:\n" : "Hi CrunX, I want to order:\n";
  if (cart.length) cart.forEach(i => msg += `• ${i.qty}x ${i.name.en} (${i.price})\n`);
  else msg += "• (from website)\n";
  if (name) msg += `\nName: ${name}`;
  if (area) msg += `\nArea: ${area}`;
  if (notes) msg += `\nNotes: ${notes}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
}

function cardHTML(m, tall=false) {
  return `<article class="card${tall ? " tall" : ""}">
    <img src="${m.img}" alt="${m.name.en}" loading="lazy">
    <div class="body">
      <h3>${m.name[lang]}</h3>
      <p>${m.desc[lang]}</p>
      <div class="row"><span class="price">${m.price}</span><button class="add" data-add="${m.id}">${t("add")}</button></div>
    </div>
  </article>`;
}
function rowHTML(m) {
  return `<div class="item">
    <img src="${m.img}" alt="${m.name.en}" loading="lazy">
    <div><h3>${m.name[lang]}</h3><p>${m.desc[lang]}</p></div>
    <div class="right"><span class="price">${m.price}</span><button class="add" data-add="${m.id}">${t("add")}</button></div>
  </div>`;
}

document.addEventListener("click", e => {
  if (e.target.closest("#ham")) $("#nav")?.classList.toggle("open");
  if (e.target.closest("[data-add]")) addItem(e.target.closest("[data-add]").dataset.add);
  if (e.target.closest("[data-rm]")) { cart = cart.filter(c => c.id !== e.target.closest("[data-rm]").dataset.rm); save(); renderCart(); }
  if (e.target.closest("#sendOrder") || e.target.closest("#fabWa") || e.target.closest("[data-wa]")) {
    if (e.target.closest("#fabWa") && !cart.length) return;
    if (e.target.closest("#sendOrder") || e.target.closest("[data-wa]")) { e.preventDefault(); sendWA(); }
  }
});
$("#langBtn")?.addEventListener("click", () => { lang = lang==="en"?"ar":"en"; localStorage.setItem("cx_lang", lang); applyLang(); });
$("#cartBtn")?.addEventListener("click", () => location.href = "order.html");
applyLang();

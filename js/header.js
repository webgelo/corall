const mSect = document.querySelector(".main-section");
mSect.insertAdjacentHTML(
  "afterbegin",
  `<header class="header">
  <a href="index.html">
    <img class="header__logo logo" src="icon/logo.png" alt="Логотип" />
  </a>
  <h2 class="header__title">
    Татьяна Бухвалова - <span>профессионально о здоровье</span>
  </h2>
  <div class="header__icons icons">
    <div class="icons__item">
      <a
        href="https://instagram.com/dr_bukhvalova?igshid=MzNlNGNkZWQ4Mg=="
        target="_blank"
      >
        <img
          class="icons__inst"
          src="icon/instagram__1_negate.png"
          alt="Instagram"
          style="width: 35px; height: 35px"
        />
      </a>
    </div>
    <div class="icons__item">
      <a href="https://t.me/+SHdaDAJrPXM5YjEy" target="_blank">
        <img
          class="icons__teleg"
          src="icon/telegram__1_negate.png"
          alt="Telegram"
          style="width: 35px; height: 35px"
        />
      </a>
    </div>
  </div>
</header>
<nav>
        <ul>
          <li><a href="index.html">Главная</a></li>
          <li><a href="index_license.html">Лицензии</a></li>
          <li><a href="index_health.html">Про здоровье</a></li>
          <li><a href="index_nutri.html">Нутрицевтика</a></li>
          <li><a href="index_weight loss.html">Похудение</a></li>
          <li><a href="index_aroma.html">Ароматерапия</a></li>
          <li><a href="index_psiholog.html">Психолог</a></li>
        </ul>
</nav>`
);

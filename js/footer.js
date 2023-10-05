const body = document.querySelector("body");
body.insertAdjacentHTML(
  "beforeend",
  `<footer class="footer">
      <a href="../index.html#main-sect"
        ><img class="footer__logo logo" src="icon/logo.png" alt="Логотип"
      /></a>
      <h2 class="footer__title">Профессионально о здоровье</h2>
      <div class="footer__icons icons">
        <div class="icons__item">
          <a
            href="https://instagram.com/dr_bukhvalova?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            ><img
              class="icons__inst"
              src="icon/instagram__1_negate.png"
              alt="Instagram"
              style="width: 35px; height: 35px"
          /></a>
        </div>
        <div class="icons__item">
          <a href="https://t.me/+SHdaDAJrPXM5YjEy" target="_blank">
            <img
              class="icons__teleg"
              src="icon/telegram__1_negate.png"
              alt="Telegram"
              style="width: 35px; height: 35px"
          /></a>
        </div>
      </div>
    </footer>`
);

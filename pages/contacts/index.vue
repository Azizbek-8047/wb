<template>
  <div class="pages pages-leadership all-direction">
    <AppBanner :title="'Контакты'" :subtitle="'Контакты'" />
    <div class="contacts-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="pages-contact-info">
              <div class="pages-contacts-first">
                <ul>
                  <li>
                    <h3>Address:</h3>
                    <p>100174, Tashkent, Almazar district, University str. 7</p>
                  </li>
                  <li>
                    <h3>Telephone:</h3>
                    <p>+998 97 170 67 84</p>
                  </li>
                  <li>
                    <h3>E-mail:</h3>
                    <p>munis@mininnovation.uz</p>
                  </li>
                </ul>
              </div>
              <div class="pages-contacts-second">
                <ul>
                  <li>
                    <a href="#!"
                      ><img
                        src="~/assets/images/instagram-con.svg"
                        alt="Instagram"
                    /></a>
                  </li>
                  <li>
                    <a href="#!"
                      ><img
                        src="~/assets/images/telegram-con.svg"
                        alt="Telegram"
                    /></a>
                  </li>
                  <li>
                    <a href="#!"
                      ><img src="~/assets/images/youtube-con.svg" alt="YouTube"
                    /></a>
                  </li>
                  <li>
                    <a href="#!"
                      ><img src="~/assets/images/meta-con.svg" alt="Facebook"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="contacts-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.39586769016955!2d69.20788038914341!3d41.34872500770482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d755132b921%3A0x3d2c94a22bdea876!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INCY0L3QvdC-0LLQsNGG0LjQvtC90L3QvtCz0L4g0KDQsNC30LLQuNGC0LjRjyDQoNC10YHQv9GD0LHQu9C40LrQuCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1635859338927!5m2!1sru!2s"
                width="600"
                height="450"
                allowfullscreen="allowfullscreen"
                loading="lazy"
                style="border: 0px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contacts-wrapper {
  padding: 120px 0 80px;
}

.pages-contact-info {
  padding: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.pages-contact-info .pages-contacts-first ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pages-contact-info .pages-contacts-first ul li {
  margin-bottom: 32px;
}

.pages-contacts-first ul li h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #001d42;
  margin: 0 0 16px 0;
}

.pages-contacts-first ul li p {
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #001d42;
  margin: 0;
}

.pages-contacts-second ul {
  display: flex;
  align-items: center;
}

.pages-contacts-second ul li img {
  width: 32px;
  height: 32px;
}

.pages-contacts-second ul li:not(:first-child) {
  margin-left: 16px;
}

.contacts-map {
  width: 830px;
  height: 424px;
}

.contacts-map iframe {
  width: 100%;
  height: 100%;
}
</style>
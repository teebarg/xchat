<template>
  <div class="footer__wrapper px-5">
    <div>
      <img src="/images/log.png" alt="no image" style="max-width: 200px">
    </div>
    <div class="footer__content ">
      <div class="footer__menu">
        <div class="footer__menu__section" v-for="(item, key) in menu" :key="key">
          <h4 class="footer__menu__title">{{item.title}}</h4>
          <ul class="footer__menu__list">
            <li class="footer__menu__list__item" v-for="(l, index) in item.list" :key="index">{{l}}</li>
              <li  v-if="item.social">
                <div>
                  <a class="socials__item socials__item--facebook">
                    <div class="icon icon--facebook-circle">
                      <svg class="icon__cnt">
                        <use xlink:href="#facebook-circle-icon">
                          <svg id="facebook-circle-icon" viewBox="0 0 128 128"><circle cx="64" cy="64" class="icon-circle" r="64"></circle><path class="icon-sign" d="M56.256 104V67.854h-12.9v-12.89h12.902V43.07c0-12 7.084-19.07 17.788-19.07 5.13 0 9.313.548 10.598.72v13.477l-8.617-.004c-5.82 0-6.91 2.887-6.91 6.945v9.828h14.916l-2.106 12.888H69.12V104H56.255z" fill="#FFF"></path></svg>
                        </use>
                      </svg>
                    </div>
                  </a>
                  <a class="socials__item socials__item--twitter">
                    <div class="icon icon--twitter-circle">
                      <svg class="icon__cnt">
                        <use xlink:href="#twitter-circle-icon">
                          <svg id="twitter-circle-icon" viewBox="0 0 128 128"><circle cx="64" cy="64" class="icon-circle" r="64"></circle><path class="icon-sign" d="M105 40.19a32.75 32.75 0 0 1-9.428 2.583 16.464 16.464 0 0 0 7.217-9.08 32.858 32.858 0 0 1-10.423 3.983 16.392 16.392 0 0 0-11.98-5.184c-9.064 0-16.413 7.35-16.413 16.412 0 1.287.146 2.54.426 3.74-13.642-.684-25.735-7.218-33.83-17.147a16.33 16.33 0 0 0-2.223 8.25A16.405 16.405 0 0 0 35.65 57.41a16.335 16.335 0 0 1-7.435-2.055c-.002.07-.002.138-.002.207 0 7.954 5.657 14.584 13.166 16.093a16.442 16.442 0 0 1-7.413.28c2.09 6.52 8.15 11.268 15.332 11.4a32.936 32.936 0 0 1-20.385 7.023c-1.325 0-2.632-.076-3.915-.23a46.457 46.457 0 0 0 25.16 7.375c30.188 0 46.697-25.01 46.697-46.698 0-.71-.018-1.42-.05-2.123A33.26 33.26 0 0 0 105 40.19" fill="#FFF"></path></svg>
                        </use>
                      </svg>
                    </div>
                  </a>
                </div>
              </li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="footer__copyright__company">
          <p>© Cynatics Products, Inc.</p>
        </div>
        <div class="footer__copyright__test">
          <p>What is Cynatics</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa enim, facere harum hic impedit laboriosam laudantium molestiae provident quasi! Debitis dicta ea minima. A cum exercitationem saepe suscipit tempore?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      menu: [
        {
          title: 'PRODUCTS',
          list: ['Lorem ipsum', 'Consectetur  harum', 'Consequuntur culpa enim, facere harum']
        },
        {
          title: 'EXPERIENCE',
          list: ['Impedit laboriosam', 'Consequuntur culpa enim']
        },
        {
          title: 'CYNATICS',
          list: ['Consequuntur', 'Provident quasi', 'Debitis dicta', 'Consequuntur', 'Consequuntur culpa enim', 'Debitis']
        },
        {
          title: 'CONTACT',
          list: ['skk@tech.com'],
          social: true
        }
      ]
    }
  }
}
</script>

<style scoped>
  .footer__wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 80px 0 15px;
    background-color: #313a45;
    color: hsla(0, 0%, 100%, .53);
    grid-gap: 30px;
  }

  .footer__content {
    display: grid;
    grid-template-rows: repeat(2, auto);
  }

  .footer__menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 15px;
  }

  .footer__menu__title {
    border-bottom: 1px solid #168d91;
    margin-bottom: 10px;
    padding-bottom: 10px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
  }

  .footer__menu__list {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  .footer__menu__list__item {
    margin-bottom: 10px;
    line-height: 20px;
  }

  .footer__copyright {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 100px;
    border-top: 1px solid #687079;
    padding-top: 20px;
    font-size: 12px;
    color: hsla(0, 0%, 100%, .53);
  }
  .socials__item {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin-right: 10px;
    cursor: pointer;
  }
  .socials__item .icon {
    width: 100%;
    height: 100%;
    fill: rgba(139,150,163,.7);
    color: #313a45;
  }
  .socials__item:hover.socials__item--facebook .icon {
    fill: #37589a;
  }
  .socials__item:hover.socials__item--twitter .icon {
    fill: #099;
  }
  .socials__item:hover .icon {
    color: #fff;
  }
  .icon, [class*=" icon--"], [class^=icon--] {
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;
    fill: currentColor;
    font-size: inherit;
    line-height: 1;
    -webkit-transition: fill .2s cubic-bezier(.4,0,.2,1) 0ms;
    transition: fill .2s cubic-bezier(.4,0,.2,1) 0ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
  }
  .icon__cnt {
    width: 100%;
    height: 100%;
    background: inherit;
    fill: inherit;
    pointer-events: none;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -ms-transform: translate(.5px,-.3px);
  }
</style>

import React from 'react';

export default function App() {
  return (
    <div className="skin-vector-legacy mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject mw-editable page-Nike rootpage-Nike skin-vector action-view">
      {/* NAVIGATION */}
      <nav id="p-personal" className="mw-portlet mw-portlet-personal vector-user-menu-legacy vector-menu" aria-labelledby="p-personal-label">
        <h3 id="p-personal-label" className="vector-menu-heading ">
          <span className="vector-menu-heading-label">Персональные инструменты</span>
        </h3>
        <div className="vector-menu-content">
          <ul className="vector-menu-content-list" style={{ display: 'flex', gap: '8px' }}>
            <li id="pt-anonuserpage" className="mw-list-item">
              <span title="Страница участника для моего IP">Вы не представились системе</span>
            </li>
            <li id="pt-anontalk" className="mw-list-item">
              <a href="/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D1%91_%D0%BE%D0%B1%D1%81%D1%83%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5" title="Страница обсуждений для моего IP [ctrl-option-n]" accessKey="n">
                <span>Обсуждение</span>
              </a>
            </li>
            <li id="pt-anoncontribs" className="mw-list-item">
              <a href="/wiki/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D0%B2%D0%BA%D0%BB%D0%B0%D0%B4" title="Список правок, сделанных с этого IP-адреса [ctrl-option-y]" accessKey="y">
                <span>Вклад</span>
              </a>
            </li>
            <li id="pt-createaccount" className="mw-list-item">
              <a href="/w/index.php?title=%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C_%D1%83%D1%87%D1%91%D1%82%D0%BD%D1%83%D1%8E_%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D1%8C&amp;returnto=Nike" title="Мы предлагаем вам создать учётную запись и войти в систему, хотя это и не обязательно.">
                <span>Создать учётную запись</span>
              </a>
            </li>
            <li id="pt-login" className="mw-list-item">
              <a href="/w/index.php?title=%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%92%D1%85%D0%BE%D0%B4&amp;returnto=Nike" title="Здесь можно зарегистрироваться в системе, но это необязательно. [ctrl-option-o]" accessKey="o">
                <span>Войти</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* FOOTER */}
      <footer id="footer" className="mw-footer">
        <ul id="footer-info">
          <li id="footer-info-lastmod"> Эта страница в последний раз была отредактирована 2 сентября 2025 года в 20:04.</li>
          <li id="footer-info-copyright">
            Текст доступен по <a rel="nofollow" className="external text" href="//creativecommons.org/licenses/by-sa/4.0/deed.ru">лицензии Creative Commons «С указанием авторства — С сохранением условий» (CC BY-SA)</a>; в отдельных случаях могут действовать дополнительные условия.
            <span className="noprint">Подробнее см. <a className="external text" href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use/ru">Условия использования</a>.</span><br />
            Wikipedia®&nbsp;— зарегистрированный товарный знак некоммерческой организации <a rel="nofollow" className="external text" href="https://wikimediafoundation.org/ru/">«Фонд Викимедиа» (Wikimedia Foundation, Inc.)</a>
          </li>
        </ul>
      
        <ul id="footer-places">
          <li id="footer-places-privacy"><a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy/ru">Политика конфиденциальности</a></li>
          <li id="footer-places-about"><a href="/wiki/%D0%92%D0%B8%D0%BA%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F:%D0%9E%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5">Описание Википедии</a></li>
          <li id="footer-places-disclaimers"><a href="/wiki/%D0%92%D0%B8%D0%BA%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F:%D0%9E%D1%82%D0%BA%D0%B0%D0%B7_%D0%BE%D1%82_%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%B4%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8">Отказ от ответственности</a></li>
          <li id="footer-places-contact"><a href="//ru.wikipedia.org/wiki/Википедия:Контакты">Свяжитесь с нами</a></li>
          <li id="footer-places-wm-codeofconduct"><a href="https://foundation.wikimedia.org/wiki/Policy:Universal_Code_of_Conduct/ru">Кодекс поведения</a></li>
          <li id="footer-places-developers"><a href="https://developer.wikimedia.org">Разработчики</a></li>
          <li id="footer-places-statslink"><a href="https://stats.wikimedia.org/#/ru.wikipedia.org">Статистика</a></li>
          <li id="footer-places-cookiestatement"><a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Cookie_statement">Заявление о куки</a></li>
          <li id="footer-places-mobileview"><a href="//ru.wikipedia.org/w/index.php?title=Nike&amp;mobileaction=toggle_view_mobile" className="noprint stopMobileRedirectToggle">Мобильная версия</a></li>
          <li style={{ display: 'none' }}><a href="#">Изменить настройки предварительного просмотра</a></li>
        </ul>
      
        <ul id="footer-icons" className="noprint">
          <li id="footer-copyrightico">
            <a href="https://www.wikimedia.org/" className="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled">
              <picture>
                <source media="(min-width: 500px)" srcSet="/static/images/footer/wikimedia-button.svg" width="84" height="29" />
                <img src="/static/images/footer/wikimedia.svg" width="25" height="25" alt="Wikimedia Foundation" lang="en" loading="lazy" />
              </picture>
            </a>
          </li>
          <li id="footer-poweredbyico">
            <a href="https://www.mediawiki.org/" className="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled">
              <picture>
                <source media="(min-width: 500px)" srcSet="/w/resources/assets/poweredby_mediawiki.svg" width="88" height="31" />
                <img src="/w/resources/assets/mediawiki_compact.svg" alt="Powered by MediaWiki" lang="en" width="25" height="25" loading="lazy" />
              </picture>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
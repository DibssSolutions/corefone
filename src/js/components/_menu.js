import { HTML } from '../constants';
const btn = $('.js-btn-menu');
const openMenu = 'is-open-menu';

btn.on('click', (e) => {
  e.preventDefault();
  (!HTML.hasClass(openMenu))
    ? HTML.addClass(openMenu)
    : HTML.removeClass(openMenu);
});

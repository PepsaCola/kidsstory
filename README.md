# Kids Story

Багатосторінковий сайт англомовного дитячого садка та клубу **Kids Story** (garden & club): головна з формами запису, розділи «About us» / «Schedule», галерея фото та відео, розклад занять, відгуки та карта проїзду. Верстка адаптивна (десктоп + мобільний).

## Технології

- **React 19** + **Create React App** (`react-scripts` 5)
- **react-router-dom 7** — маршрутизація
- **styled-components 6** — стилі (по одному `styled.js` на компонент)
- **react-slick** + **slick-carousel**, **swiper** — слайдери / каруселі
- **leaflet** + **react-leaflet** — інтерактивна карта
- **@testing-library** — тести

## Запуск

Потрібен **Node.js 18+**.

```bash
npm install      # встановити залежності
npm start        # дев-сервер http://localhost:3000
npm run build    # продакшн-збірка у /build
npm test         # тести (watch-режим)
```

> `npm run eject` — незворотна операція, використовувати лише за потреби.

## Структура

```
src/
  App.js                — маршрути (усі під layout <Shared/>)
  index.js              — точка входу
  index.css, App.css    — глобальні стилі

  pages/
    shared/             — layout: Header (з бургер-меню), Footer, <Outlet/>
    home/               — головна: hero, mainInfo, additionalServices,
                          video, advantages, team, about, reviews, map
    aboutCenter/, team/, reviews/, documents/,
    AboutParents/, Nutrition/, News/, NewsArticle/, Tour/   — розділ «About us»
    Program/, MainSchedule/, ScheduleAdditionalServices/,
    PhotoAndVideo/                                          — розділ «Schedule»
    additional/, service/ — додаткові послуги (список + деталі)
    Contacts/

  components/           — перевикористовувані: carusel, mainInfo, maps,
                          modals, questionsForm, Title, video, navigation,
                          newsCard, team, Container
  img/                  — SVG-іконки (import as ReactComponent) та зображення

public/
  img/, icons/, files/  — статичні ассети (лого, фон hero, декор-SVG, бургер тощо)
```

## Маршрути

| Шлях | Сторінка |
|------|----------|
| `/` | Home |
| `/additional-services` · `/additional-services/:id` | Додаткові послуги · деталі послуги |
| `/about-us/center` | Про центр |
| `/about-us/team` | Команда |
| `/about-us/reviews` | Відгуки |
| `/about-us/documents` | Документи |
| `/about-us/parents` | Батькам |
| `/about-us/nutrition` | Харчування |
| `/about-us/news` · `/about-us/news/:id` | Новини · стаття |
| `/about-us/tour` | 3D-тур |
| `/schedule/program` | Програма |
| `/schedule/main-schedule` | Основний розклад |
| `/schedule/additional-services` | Розклад додаткових послуг |
| `/schedule/photo-and-video` | Фото та відео |
| `/contacts` | Контакти |

Усі сторінки рендеряться всередині `<Shared/>` (спільний хедер + футер через `<Outlet/>`).

## Стилі та адаптив

- Кожен компонент тримає стилі поруч у власному `styled.js`.
- Основний мобільний брейкпойнт — **`@media (max-width: 720px)`**.
- Хедер згортається у бургер-меню з висувною панеллю на **`@media (max-width: 1024px)`**; десктопна навігація та дропдауни на мобільному ховаються.
- Статичні ассети з `public/` підключаються за абсолютним шляхом від кореня (напр. `/img/hero.png`, `/icons/burger.svg`); SVG-іконки з `src/img` — як React-компоненти (`import { ReactComponent as Icon }`).

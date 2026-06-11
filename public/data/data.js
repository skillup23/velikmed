let id = 0;

const navLinks = [
  {
    id: id++,
    url: '/#uslugi',
    title: 'Услуги',
  },
  {
    id: id++,
    url: '/#doctors',
    title: 'Специалисты',
  },
  {
    id: id++,
    url: '/#oklinike',
    title: 'О клинике',
  },
  {
    id: id++,
    url: '/#sales',
    title: 'Акции',
  },
  {
    id: id++,
    url: '/#contacts',
    title: 'Контакты',
  },
];

const princips = [
  {
    id: id++,
    number: '01',
    text: 'Доказательный подход',
  },
  {
    id: id++,
    number: '02',
    text: 'Высокий экспертный уровень врачей',
  },
  {
    id: id++,
    number: '03',
    text: 'Врачи всегда на стороне пациента',
  },
  {
    id: id++,
    number: '04',
    text: 'Соблюдение медицинской этики',
  },
  {
    id: id++,
    number: '05',
    text: 'Сервис со вниманием к\u00A0деталям',
  },
];

import beresovskaya from '@/public/img/main/doctors/beresovskaya.png';
import bratchikova from '@/public/img/main/doctors/bratchikova.png';
import diadchenko from '@/public/img/main/doctors/diadchenko.png';
import drobisheva from '@/public/img/main/doctors/drobisheva.png';
import efremova from '@/public/img/main/doctors/efremova.jpg';
import glushkova from '@/public/img/main/doctors/glushkova.png';
import kazanceva from '@/public/img/main/doctors/kazanceva.png';
import kireeva from '@/public/img/main/doctors/kireeva.png';
import kolba from '@/public/img/main/doctors/kolba.jpg';
import kolcova from '@/public/img/main/doctors/kolcova.png';
import kyarimova from '@/public/img/main/doctors/kyarimova.jpg';
import petrosyan from '@/public/img/main/doctors/petrosyan.jpg';
import saidov from '@/public/img/main/doctors/saidov.png';
import selivanova from '@/public/img/main/doctors/selivanova.png';
import sinanskaya from '@/public/img/main/doctors/sinanskaya.jpg';
import sis from '@/public/img/main/doctors/sis.png';
import skobelev from '@/public/img/main/doctors/skobelev.jpg';
import urban from '@/public/img/main/doctors/urban.jpg';
import velikjanina from '@/public/img/main/doctors/velikjanina1.png';
import velikzhanin from '@/public/img/main/doctors/velikzhanin.png';
import zozylenko from '@/public/img/main/doctors/zozylenko.jpg';
import ozeren from '@/public/img/main/doctors/ozeren.jpg';
import marinec from '@/public/img/main/doctors/marinec.jpg';
import anosova from '@/public/img/main/doctors/anosova.jpg';

const doctors = [
  {
    id: id++,
    fio: 'Великжанина Елена Анатольевна',
    spec: 'гинеколог',
    workYear: 'стаж 31 год',
    foto: velikjanina,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Ефремова Екатерина Владимировна',
    spec: 'гинеколог',
    workYear: 'стаж 18 лет',
    foto: efremova,
    link: 'doctors/efremova',
  },
  {
    id: id++,
    fio: 'Дробышева Татьяна Васильевна',
    spec: 'трихолог',
    workYear: 'стаж 25 лет',
    foto: drobisheva,
    link: 'doctors/drobisheva',
  },
  {
    id: id++,
    fio: 'Сыс Елена Алексеевна',
    spec: 'эндокринолог',
    workYear: 'стаж 11 лет',
    foto: sis,
    link: 'doctors/sis',
  },
  {
    id: id++,
    fio: 'Братчикова Ирина Станиславовна',
    spec: 'гинеколог',
    workYear: 'стаж 29 лет',
    foto: bratchikova,
    link: 'doctors/bratchikova',
  },
  {
    id: id++,
    fio: 'Саидов Эльшад Баходирович',
    spec: 'хирург, врач УЗИ',
    workYear: 'стаж 8 лет',
    foto: saidov,
    link: 'doctors/saidov',
  },
  {
    id: id++,
    fio: 'Зозуленко Татьяна Юрьевна',
    spec: 'гастроэнтеролог',
    workYear: 'стаж 10 лет',
    foto: zozylenko,
    link: 'doctors/zozylenko',
  },
  {
    id: id++,
    fio: 'Кяримова Шэкла Тофиковна',
    spec: 'гинеколог, терапевт',
    workYear: 'стаж 4 года',
    foto: kyarimova,
    link: 'doctors/kyarimova',
  },
  {
    id: id++,
    fio: 'Великжанин Виталий Анатольевич',
    spec: 'гастроэнтеролог',
    workYear: 'стаж 32 года',
    foto: velikzhanin,
    link: 'doctors/velikzhanin',
  },
  {
    id: id++,
    fio: 'Кольцова Наталия Михайловна',
    spec: 'врач УЗИ',
    workYear: 'стаж 34 года',
    foto: kolcova,
    link: 'doctors/kolcova',
  },
  {
    id: id++,
    fio: 'Дьяченко Галия Фуатовна',
    spec: 'косметист, косметолог-эстетист',
    workYear: 'стаж 15 лет',
    foto: diadchenko,
    link: 'doctors/diadchenko',
  },
  {
    id: id++,
    fio: 'Киреева Елена Фуатовна',
    spec: 'психолог',
    workYear: 'стаж 13 лет',
    foto: kireeva,
    link: 'doctors/kireeva',
  },
  {
    id: id++,
    fio: 'Урбан Полина Ивановна',
    spec: 'кардиолог',
    workYear: 'стаж 18 лет',
    foto: urban,
    link: 'doctors/urban',
  },
  {
    id: id++,
    fio: 'Петросян Мери Сейрановна',
    spec: 'педиатр',
    workYear: 'стаж 13 лет',
    foto: petrosyan,
    link: 'doctors/petrosyan',
  },
  {
    id: id++,
    fio: 'Казанцева Юлия Андреевна',
    spec: 'кардиолог',
    workYear: 'стаж 18 лет',
    foto: kazanceva,
    link: 'doctors/kazanceva',
  },
  {
    id: id++,
    fio: 'Селиванова Анастасия Николаевна',
    spec: 'педиатр, детский гастроэнтеролог',
    workYear: 'стаж 13 лет',
    foto: selivanova,
    link: 'doctors/selivanova',
  },
  {
    id: id++,
    fio: 'Скобелев Петр Петрович',
    spec: 'андролог, врач УЗИ, уролог',
    workYear: 'стаж 31 лет',
    foto: skobelev,
    link: 'doctors/skobelev',
  },
  {
    id: id++,
    fio: 'Синянская Марина Николаевна',
    spec: 'гинеколог, врач УЗИ',
    workYear: 'стаж 21 год',
    foto: sinanskaya,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Глушкова Софья Юрьевна',
    spec: 'врач УЗИ, психолог',
    workYear: 'стаж 26 лет',
    foto: glushkova,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Березовская Ирина Леонидовна',
    spec: 'онколог',
    workYear: 'стаж 33 года',
    foto: beresovskaya,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Кольба Татьяна Михайловна',
    spec: 'врач УЗИ, гинеколог',
    workYear: 'стаж 13 лет',
    foto: kolba,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Озерин Ефим Алексеевич',
    spec: 'уролог, врач УЗИ',
    workYear: 'стаж 7 лет',
    foto: ozeren,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Маринец Лия Александровна',
    spec: 'врач УЗИ',
    workYear: 'стаж 10 лет',
    foto: marinec,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Аносова Дарья Андреевна',
    spec: 'косметолог, дерматолог',
    workYear: 'стаж 21 год',
    foto: anosova,
    link: 'doctors/velikjanina',
  },

  // {
  //   id: id++,
  //   fio: 'Елисеев Роман Викторович',
  //   spec: 'уролог',
  //   workYear: 'стаж 18 лет',
  //   foto: eliseev,
  //   link: 'doctors/velikjanina',
  // },
  // {
  //   id: id++,
  //   fio: 'Козыр Лилия Николаевна',
  //   spec: 'гинеколог',
  //   workYear: 'стаж 6 лет',
  //   foto: kozir,
  //   link: 'doctors/velikjanina',
  // },
  // {
  //   id: id++,
  //   fio: 'Колесников Евгений Викторович',
  //   spec: 'мануальный терапевт',
  //   workYear: 'стаж 31 год',
  //   foto: kolesnikov,
  // },
  // {
  //   id: id++,
  //   fio: 'Котова Татьяна Николаевна',
  //   spec: 'психолог',
  //   workYear: 'стаж 19 лет',
  //   foto: kotova,
  // },
  // {
  //   id: id++,
  //   fio: "Киракосьян Марина Робертовна",
  //   spec: "гинеколог",
  //   workYear: "стаж 15 лет",
  //   foto: kirakosian,
  // },
  // {
  //   id: id++,
  //   fio: "Шитикова Любовь Николаевна",
  //   spec: "терапевт, инфекционист",
  //   workYear: "стаж 15 лет",
  //   foto: shitikova,
  // },
  // {
  //   id: id++,
  //   fio: 'Синянская Марина Николаевна',
  //   spec: 'гинеколог, акушер, врач\u00A0УЗИ',
  //   workYear: 'стаж 20 лет',
  //   foto: sinanskaya,
  // },
  // {
  //   id: id++,
  //   fio: "Андреева Елена Алексеевна ",
  //   spec: "гинеколог, врач УЗИ",
  //   workYear: "стаж 12 лет",
  //   foto: andreeva,
  // },
];

const documents = [
  {
    id: id++,
    title: 'Пользовательское соглашение',
    url: '/img/docs/Пользовательское соглашение.pdf',
  },
  {
    id: id++,
    title: 'Контактная информация органов исполнительной власти',
    url: '/img/docs/Инфо органов ИВ.pdf',
  },
  {
    id: id++,
    title: 'Медицинская лицензия',
    url: '/img/docs/Лицензия.pdf',
  },
  {
    id: id++,
    title: 'Реквизиты клиники ВеликМед',
    url: '/img/docs/реквизиты.pdf',
  },
  {
    id: id++,
    title: 'Правила внутреннего распорядка для пациентов',
    url: '/img/docs/Правила для пациентов и посетителей ВеликМед.pdf',
  },
  {
    id: id++,
    title: 'Порядок оказания платных медицинских услуг',
    url: '#',
  },
  {
    id: id++,
    title: 'Форма договора платных услуг',
    url: '/img/docs/Договор на оказание медицинских услуг.pdf',
  },
  {
    id: id++,
    title: 'Правила обслуживания льготных категорий граждан',
    url: '#',
  },
];

export { doctors, documents, navLinks, princips };

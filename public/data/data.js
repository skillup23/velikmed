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

import diadchenko from '@/public/img/main/doctors/diadchenko.png';
import drobisheva from '@/public/img/main/doctors/drobisheva.png';
import velikzhanin from '@/public/img/main/doctors/velikzhanin.jpg';
import doctorImg from '@/public/img/main/doctors/doctorNoFon.png';
import bratchikova from '@/public/img/main/doctors/bratchikova.png';
import efremova from '@/public/img/main/doctors/efremova.jpg';
import eliseev from '@/public/img/main/doctors/eliseev.jpg';
import kazanceva from '@/public/img/main/doctors/kazanceva.png';
import kireeva from '@/public/img/main/doctors/kireeva.png';
import kolcova from '@/public/img/main/doctors/kolcova.png';
import selivanova from '@/public/img/main/doctors/selivanova.png';
import kyarimova from '@/public/img/main/doctors/kyarimova.jpg';
import petrosyan from '@/public/img/main/doctors/petrosyan.jpg';
import saidov from '@/public/img/main/doctors/saidov.png';
import sis from '@/public/img/main/doctors/sis.png';
import urban from '@/public/img/main/doctors/urban.jpg';
import velikjanina from '@/public/img/main/doctors/velikjanina1.png';
import zozylenko from '@/public/img/main/doctors/zozylenko.jpg';

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
    fio: 'Сыс Елена Александровна',
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
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Великжанин Виталий Анатольевич',
    spec: 'гастроэнтеролог',
    workYear: 'стаж 32 года',
    foto: velikzhanin,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Кольцова Наталия Михайловна',
    spec: 'врач УЗИ',
    workYear: 'стаж 34 года',
    foto: kolcova,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Дьяченко Галия Фуатовна',
    spec: 'косметист, косметолог-эстетист',
    workYear: 'стаж 15 лет',
    foto: diadchenko,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Киреева Елена Фуатовна',
    spec: 'психолог',
    workYear: 'стаж 13 лет',
    foto: kireeva,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Урбан Полина Ивановна',
    spec: 'кардиолог',
    workYear: 'стаж 18 лет',
    foto: urban,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Петросян Мери Сейранова',
    spec: 'педиатр',
    workYear: 'стаж 13 лет',
    foto: petrosyan,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Казанцева Юлия Андреевна',
    spec: 'кардиолог',
    workYear: 'стаж 18 лет',
    foto: kazanceva,
    link: 'doctors/velikjanina',
  },
  {
    id: id++,
    fio: 'Селиванова Анастасия Николаевна',
    spec: 'педиатр, детский гастроэнтеролог',
    workYear: 'стаж 13 лет',
    foto: selivanova,
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
  //   fio: 'Березовская Ирина Леонидовна',
  //   spec: 'дерматолог, онколог, трихолог, врач-косметолог',
  //   workYear: 'стаж 31 год',
  //   foto: beresovskaya,
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

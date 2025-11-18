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
    url: '/#feedback',
    title: 'Отзывы',
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
import doctorImg from '@/public/img/main/doctors/doctorNoFon.png';
import kireeva from '@/public/img/main/doctors/kireeva.png';
import kolcova from '@/public/img/main/doctors/kolcova.png';
import saidov from '@/public/img/main/doctors/saidov.png';
import sis from '@/public/img/main/doctors/sis.png';
import velikjanina from '@/public/img/main/doctors/velikjanina.png';
import kazanceva from '@/public/img/main/doctors/kazanceva.png';
import eliseev from '@/public/img/main/doctors/eliseev.jpg';
import kozir from '@/public/img/main/doctors/kozir.jpg';

const doctors = [
  {
    id: id++,
    fio: 'Великжанина Елена Анатольевна',
    spec: 'гинеколог',
    workYear: 'стаж 30 лет',
    foto: velikjanina,
  },
  {
    id: id++,
    fio: 'Братчикова Ирина Станиславовна',
    spec: 'гинеколог',
    workYear: 'стаж 29 лет',
    foto: bratchikova,
  },
  {
    id: id++,
    fio: 'Сыс Елена Александровна',
    spec: 'эндокринолог',
    workYear: 'стаж 11 лет',
    foto: sis,
  },
  // {
  //   id: id++,
  //   fio: "Андреева Елена Алексеевна ",
  //   spec: "гинеколог, врач УЗИ",
  //   workYear: "стаж 12 лет",
  //   foto: andreeva,
  // },
  {
    id: id++,
    fio: 'Дьяченко Галия Фуатовна',
    spec: 'косметист, косметолог-эстетист',
    workYear: 'стаж 15 лет',
    foto: diadchenko,
  },
  {
    id: id++,
    fio: 'Саидов Эльшад Баходирович',
    spec: 'хирург, врач УЗИ',
    workYear: 'стаж 7 лет',
    foto: saidov,
  },
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
  {
    id: id++,
    fio: 'Березовская Ирина Леонидовна',
    spec: 'дерматолог, онколог, трихолог, врач-косметолог',
    workYear: 'стаж 31 год',
    foto: beresovskaya,
  },
  {
    id: id++,
    fio: 'Кольцова Наталия Михайловна',
    spec: 'врач УЗИ',
    workYear: 'стаж 34 года',
    foto: kolcova,
  },
  // {
  //   id: id++,
  //   fio: "Киракосьян Марина Робертовна",
  //   spec: "гинеколог",
  //   workYear: "стаж 15 лет",
  //   foto: kirakosian,
  // },
  {
    id: id++,
    fio: 'Киреева Елена Фуатовна',
    spec: 'психолог',
    workYear: 'стаж 13 лет',
    foto: kireeva,
  },
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
  {
    id: id++,
    fio: 'Урбан Полина Ивановна',
    spec: 'кардиолог',
    workYear: 'стаж 18 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Петросян Мери Сейранова',
    spec: 'педиатр',
    workYear: 'стаж 13 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Казанцева Юлия Андреевна',
    spec: 'кардиолог',
    workYear: 'стаж 18 лет',
    foto: kazanceva,
  },
  {
    id: id++,
    fio: 'Елисеев Роман Викторович',
    spec: 'уролог',
    workYear: 'стаж 18 лет',
    foto: eliseev,
  },
  {
    id: id++,
    fio: 'Козырь Лилия Николаевна',
    spec: 'гинеколог',
    workYear: 'стаж 6 лет',
    foto: kozir,
  },
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
    url: '#',
  },
  {
    id: id++,
    title: 'Правила внутреннего распорядка для пациентов',
    url: '#',
  },
  {
    id: id++,
    title: 'Порядок оказания платных медицинских услуг',
    url: '#',
  },
  {
    id: id++,
    title: 'Форма договора платных услуг',
    url: '#',
  },
  {
    id: id++,
    title: 'Правила обслуживания льготных категорий граждан',
    url: '#',
  },
];

export { doctors, documents, navLinks, princips };

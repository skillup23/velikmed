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

import doctorImg from '@/public/img/main/doctor1.png';

const doctors = [
  {
    id: id++,
    fio: 'Великжанина Елена Анатольевна',
    spec: 'гинеколог',
    workYear: 'стаж 30 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Братчикова Ирина Станиславовна',
    spec: 'гинеколог',
    workYear: 'стаж 29 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Сыс Елена Александровна',
    spec: 'эндокринолог',
    workYear: 'стаж 11 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Эльдерова Индира Рамидиновна',
    spec: 'невролог',
    workYear: 'стаж 32 года',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Дьяченко Галия Фуатовна',
    spec: 'врач-косметолог, косметолог-эстетист',
    workYear: 'стаж 15 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Саидов Эльшад Баходирович',
    spec: 'хирург, врач УЗИ',
    workYear: 'стаж 7 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Шитикова Любовь Николаевна',
    spec: 'терапевт, инфекционист',
    workYear: 'стаж 15 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Синянская Марина Николаевна',
    spec: 'гинеколог, акушер, врач\u00A0УЗИ',
    workYear: 'стаж 20 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Березовская Ирина Леонидовна',
    spec: 'дерматолог, онколог, трихолог, врач-косметолог',
    workYear: 'стаж 31 год',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Кольцова Наталия Михайловна',
    spec: 'врач УЗИ',
    workYear: 'стаж 34 года',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Киракосьян Марина Робертовна',
    spec: 'гинеколог',
    workYear: 'стаж 15 лет',
    foto: doctorImg,
  },
  {
    id: id++,
    fio: 'Киреева Елена Фуатовна',
    spec: 'психолог',
    workYear: 'стаж 13 лет',
    foto: doctorImg,
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

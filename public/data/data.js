let id = 0;

const navLinks = [
  {
    id: id++,
    url: "#",
    title: "Услуги",
  },
  {
    id: id++,
    url: "#",
    title: "Специалисты",
  },
  {
    id: id++,
    url: "#",
    title: "О клинике",
  },
  {
    id: id++,
    url: "#",
    title: "Отзывы",
  },
  {
    id: id++,
    url: "#",
    title: "Контакты",
  },
];

const princips = [
  {
    id: id++,
    number: "01",
    text: "Доказательный подход",
  },
  {
    id: id++,
    number: "02",
    text: "Высокий экспертный уровень врачей",
  },
  {
    id: id++,
    number: "03",
    text: "Врачи всегда на стороне пациента",
  },
  {
    id: id++,
    number: "04",
    text: "Соблюдение медицинской этики",
  },
  {
    id: id++,
    number: "05",
    text: "Сервис со вниманием к\u00A0деталям",
  },
];

import doctorImg from "@/public/img/main/doctor1.png";

const doctors = [
  {
    id: id++,
    fio: "Фамилия Имя Отчество",
    spec: "эндокринолог",
    workYear: "стаж 12 лет",
    foto: doctorImg,
  },
  {
    id: id++,
    fio: "Фамилия Имя Отчество",
    spec: "кардиолог",
    workYear: "стаж 17 лет",
    foto: doctorImg,
  },
  {
    id: id++,
    fio: "Фамилия Имя Отчество",
    spec: "гастроэнтеролог",
    workYear: "стаж 8 лет",
    foto: doctorImg,
  },
];

export { doctors, navLinks, princips };

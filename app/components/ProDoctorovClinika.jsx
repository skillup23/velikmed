import Script from 'next/script';

export default function ProDoctorovClinika() {
  return (
    <div className="mt-8">
      <div
        id="pd_widget_column"
        className="pd_widget_column "
        data-lpu="105329"
      >
        <a target="_blank" href="https://prodoctorov.ru/">
          <img
            className="pd_logo"
            width="132"
            src="https://prodoctorov.ru/static/_v1/pd/logos/logo-pd-widget.png"
          />
        </a>
        <a
          target="_blank"
          className="pd_lpu_name"
          href="https://prodoctorov.ru/krasnodar/lpu/105329-klinika-velikmed/"
        >
          Клиника «Великмед»
        </a>
        <div
          id="pd_widget_column_content_105329"
          className="pd_widget_column_content"
        ></div>
        <a
          target="_blank"
          href="https://prodoctorov.ru/krasnodar/lpu/105329-klinika-velikmed/otzivi/"
        >
          читать отзывы
        </a>
      </div>
      <Script
        defer
        src="https://prodoctorov.ru/static/js/widget_column.js?v06"
      ></Script>
    </div>
  );
}

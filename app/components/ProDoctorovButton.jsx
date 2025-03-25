import Script from 'next/script';

export default function ProDoctorovButton() {
  return (
    <div>
      <div
        id="medflexRoundWidgetData"
        data-src="https://booking.medflex.ru?user=7b38db40021d199d3686a471d2084cc3&isRoundWidget=true"
        className="bg-orange"
      ></div>
      <Script
        defer
        src="https://booking.medflex.ru/components/round/round_widget_button.js"
        charset="utf-8"
      ></Script>
    </div>
  );
}

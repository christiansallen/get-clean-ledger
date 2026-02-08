interface CalendlyGlobal {
  initPopupWidget(opts: { url: string }): void;
  initInlineWidget(opts: { url: string; parentElement: HTMLElement }): void;
}

interface Window {
  Calendly?: CalendlyGlobal;
}

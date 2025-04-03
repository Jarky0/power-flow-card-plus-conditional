interface RegisterCardParams {
  type: string;
  name: string;
  description: string;
}
export function registerCustomCard(params: RegisterCardParams) {
  const windowWithCards = window as unknown as Window & {
    customCards: unknown[];
  };
  windowWithCards.customCards = windowWithCards.customCards || [];

  // Make sure the type has the "custom:" prefix
  const type = params.type.startsWith("custom:") ? params.type : `custom:${params.type}`;

  windowWithCards.customCards.push({
    ...params,
    type,
    preview: true,
    documentationURL: `https://github.com/Jarky0/power-flow-card-plus-conditional`,
  });
}

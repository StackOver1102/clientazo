
const localeToCurrencyMap: Record<string, string> = {
    'en': 'USD',
    'vi': 'VND',
    'ja': 'JPY',
    'de': 'EUR',
};

export function formatMoney(amount: number, locale: string): string {
    const currency = localeToCurrencyMap[locale];

    if (!currency) {
        throw new Error(`Currency code not found for locale: ${locale}`);
    }

    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
export function formatDate(date: Date, locale: string = 'en'): string {
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
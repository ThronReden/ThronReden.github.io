export function formatDate(date: Date, locale: string = 'en'): string {
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
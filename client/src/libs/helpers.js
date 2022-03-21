export const baseUrl = 'http://localhost:5000/v1/api';

export function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const result = new Date(date).toLocaleDateString('id-ID', options);
  return result;
}

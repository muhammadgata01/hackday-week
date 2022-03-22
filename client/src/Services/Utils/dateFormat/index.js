function dateFormat(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const result = new Date(date).toLocaleDateString('id-ID', options);
  return result;
}

export default dateFormat;

const dateFormat = date => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const result = new Date(date).toLocaleDateString('en-EN', options);
  return result;
};

export default dateFormat;

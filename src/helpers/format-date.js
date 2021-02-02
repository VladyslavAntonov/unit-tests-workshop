const defaultOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export function formatDate(date, options = defaultOptions) {
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

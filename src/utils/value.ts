export const formatValue = (value: number) => {
  return String(value).replace(/(\d{1,3}|\G\d{3})(?=(?:\d{3})+(?!\d))/g, "$1,");
};

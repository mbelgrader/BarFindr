export const fetchBars = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/bars',
    filters
  });
};

export const fetchBars = (filters) => {
  return $.ajax({
    method: 'GET',
    url: 'api/bars',
    filters
  });
};

export const fetchBar = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bars/${id}`,
  });
};

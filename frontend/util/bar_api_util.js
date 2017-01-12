export const fetchBars = (filter) => {
  return $.ajax({
    method: 'GET',
    url: 'api/bars',
    filter
  });
};

export const fetchBar = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bars/${id}`,
  });
};

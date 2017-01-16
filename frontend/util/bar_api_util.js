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

export const createComment = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data
  });
};

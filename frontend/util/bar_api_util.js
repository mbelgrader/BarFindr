export const fetchBars = (data) => {
  console.log(data);
  return $.ajax({
    method: 'GET',
    url: 'api/bars',
    data
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

export const deleteComment = (id) => {
  // debugger
  // passing correct id
  return $.ajax({
    method: 'DELETE',
    url: 'api/comments/',
    data: id
  });
};

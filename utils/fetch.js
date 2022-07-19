/**
 * @param  {string} url - URL to query
 * @param  {Object} payload
 * @param  {Object} headers - headers can be specified or else default will be set
 */
const fetchPost = (
  url,
  payload,
  headers = { "Content-Type": "application/json" }
) => {
  return fetch(url, {
    method: "POST",
    body: payload,
    headers: headers,
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((e) => {
      if (e.response){
        throw {
          headers: e.response.headers,
          status: e.response.status,
          data: e.response.data,
        }
      }
      else {
        throw e;
      }
    });
};
/**
 * @param  {string} url - URL to query
 * @param  {Object} payload
 * @param  {Object} headers - headers can be specified or else default will be set
 */
const fetchPut = (
  url,
  payload,
  headers = { "Content-Type": "application/json" }
) => {
  return fetch(url, {
    method: "PUT",
    body: payload,
    headers: headers,
  })
    .then((response) => {
      return response || "OK";
    })
    .catch((e) => {
      if (e.response){
        throw {
          headers: e.response.headers,
          status: e.response.status,
          data: e.response.data,
        }
      }
      else {
        throw e;
      }
    });
};
/**
 * @param  {string} url - URL to query
 * @param  {Object} headers - headers can be specified or else default will be set
 */
const fetchGet = (url, headers = { "Content-Type": "application/json" }) => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response;})
};

module.exports = {
  fetchGet,
  fetchPost,
  fetchPut,
};

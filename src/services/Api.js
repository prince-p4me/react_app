import { store } from '../redux/store';
// import Constants from '../utils/Constant';

async function callApi(urlString, body, methodType) {
  console.log('-----------AXIOS  Api request is----------- ');
  console.log('url string ' + urlString);
  console.log('methodType ' + methodType);
  // console.log('body ' + JSON.stringify(body));
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const options = {
    method: methodType,
    headers,
  };
  if (methodType == 'POST' || methodType == 'PUT') {
    options.body = {};
    if (body) {
      options.body = JSON.stringify(body);
    }
  }
  console.log('options', options);
  try {
    const response = await fetch(urlString, options);
    const jsonResposne = await response.json();
    console.log('result :--', JSON.stringify(jsonResposne));
    if (jsonResposne && jsonResposne.status && jsonResposne.status == 100) {
      
      
    } else {
      return jsonResposne;
    }
  } catch (error) {
    console.log('error :--', JSON.stringify(error));
    return error;
  }
}

export function addUser(body) {
  console.log('----------Login Api Call ------------------');
  return callApi(''  + 'user_login.php', body, 'POST');
}

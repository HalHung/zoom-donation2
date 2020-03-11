import request from '@/utils/request'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
function status () {
  return request({
    url: '/memberProfile/webget?expand=memberType',
    method: 'get'
  })
}

function login (params) {
  return request({
    url: '/user/login.jsp',
    method: 'post',
    params
  })
}

function register (params) {
  /*
  return firebase.auth().createUserWithEmailAndPassword(params.email, params.password).then(function (userCredential) {
    var promises = [];
    promises.push(userCredential.user.updateProfile({
      displayName: params.nickname
    }));
    if (!userCredential.user.emailVerified) {
      promises.push(userCredential.user.sendEmailVerification())
    }
    return Promise.all(promises).then(values => {
      return userCredential;
    });
  });
  */
  /*
  return request({
    url: '/memberProfile',
    method: 'post',
    params
  })
  */
}

function logout (query) {
  return request({
    url: '/user/logout.jsp',
    method: 'get',
    params: query
  })
}

function reqReset (params) {
  return request({
    url: '/user/sendChangePasswordMail.jsp',
    method: 'post',
    params
  })
}

function fbLogin (params) {
  return request({
    url: '/user/fbLogin.jsp',
    method: 'post',
    params
  })
}

function sendValidMail (params) {
  return request({
    url: '/user/sendValidMail.jsp',
    method: 'post',
    params
  })
}

function validationMail (params) {
  return request({
    url: '/validation/mailValidation.jsp',
    method: 'get',
    params
  })
}

export default {
  status,
  login,
  register,
  logout,
  reqReset,
  fbLogin,
  sendValidMail,
  validationMail
}

import axios from 'axios';
import { isEmpty } from 'lodash';

class LoginService {
  validateInput(data) {
    if (!data) {
      return;
    }
    const errors = [];
    if (data.username == null || data.username == '') {
      errors.push('Username invalid');
    }
    if (data.password == null || data.password == '') {
      errors.push('Password invalid');
    }
    const isValid = errors.length == 0;
    return { errors, isValid };
  }

  async checkAuthenticationAndGetAccountDetails (data) {
    var env = window.localStorage.getItem("fareyeServer")
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      ignoreAuthModule: 'ignoreAuthModule',
      withCredentials: true,
    };
    await axios.post(env+'/app/authentication', data, config);
    return this.getAccountDetails();
  }

  async getAccountDetails() {
    var env = window.localStorage.getItem("fareyeServer")
    return axios.get(env+'/app/rest/account');
  }

  async logout() {
    var env = window.localStorage.getItem("fareyeServer")
    const data = await axios.get(env+'/app/logout');
    if(data.headers.samlredirect){
        window.location.href = data.headers.samlredirect;
    }
    else{
        return data;
    }
  }

  async getAuthenticationGIF() {
    var env = window.localStorage.getItem("fareyeServer")
    return axios.get(`${env}/protected/authentication_check.gif?${new Date().getTime()}`);
  }

  
  /**
   * this method accepts list of roles and role to find
   * @param {object []} roles
   * @param {string} role
   * @returns boolean
   */
  hasRole = (roles, role) => {
    try {
      if (isEmpty(roles)) {
        throw Error('Roles array cannot be empty');
      }

      if (!role) {
        throw Error('role cannot be empty');
      }

      return Boolean(roles.find(role1 => role1 === role));
    } catch (error) {
      console.error(error, null, 'cannot find role');
      return null;
    }
  };

  
  forceLogout = async (username, password) => {
    var env = window.localStorage.getItem("fareyeServer")
    const config = {};
    const userInfo = {
        "username":username,
        "password":password
    }

    const response = await axios.post(env+'/delete_existing_sessions', userInfo, config);
    if (response.status === 200) {
      window.location.replace(window.location.origin);
    }
  };

  

}

export const loginService = new LoginService();

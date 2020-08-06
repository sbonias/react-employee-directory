import axios from 'axios';

// Export an object containing methods we'll use for accessing the random users API
// https://randomuser.me/
// https://randomuser.me/documentation

export default {
  getRandomEmployees: function () {
    return axios.get('https://randomuser.me/api/?results=25');
  },
};

export class SpoonflowerService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'https://api.spoonflower.com/design';
  }

  searchDesigns(query) {
    return this.$http.get(this.apiHost + '/search?q=' + query.q + '&limit=' + query.limit + '&offset=' + query.offset + '&substrate=' + query.substrate)
      .then(response => {
        console.log(response.data, "data", response);
        return response.data;
      })
      .catch(err => {
        this.$log.error('XHR Failed for searchDesigns.\n' + angular.toJson(error.data, true));
      })
  }

}

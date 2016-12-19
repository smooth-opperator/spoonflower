export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/spoonflower/spoonflower.html',
      controller: 'SpoonflowerController',
      controllerAs: 'ctrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}

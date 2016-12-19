export class SpoonflowerController {
  constructor ($timeout, webDevTec, toastr, SpoonflowerService) {
    'ngInject';

    this.awesomeThings = [];
    // this.classAnimation = '';
    this.creationDate = 1482083573869;
    this.toastr = toastr;
    this._SpoonflowerService = SpoonflowerService;

    this.limit = 48;
    this.currentPage = 0;
    this.substrate = 'any';
    this.showJumbotron = true;

    this.substrateMap = {
      fabric: "Fabric",
      wallpaper: "Wall Paper",
      gift_wrap: "Gift Wrap",
      any: "Everything"
    };

    this.activate($timeout, webDevTec);
  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getMoreResults() {
    this.search();
  }

  getWebDevTec(webDevTec) {
    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  search() {
    return this._SpoonflowerService.searchDesigns({ q: this.searchQ, limit: this.limit, offset: this.currentPage, substrate: this.substrate })
    .then(response => {
      this.searchResults = response.results[0].results;
      console.log(response.results[0].results, response.results[0].results.length, 'results');
    }).catch(err => console.log(err));
  }

  setBackground(imgUrl) {
    document.getElementById('background').style.backgroundImage = "url('" + imgUrl + "')";
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}

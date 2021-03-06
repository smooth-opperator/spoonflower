/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { SpoonflowerController } from './spoonflower/spoonflower.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { SpoonflowerService } from '../app/components/spoonflower/spoonflower.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('spoonflower', ['ngRoute', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('SpoonflowerService', SpoonflowerService)
  .controller('MainController', MainController)
  .controller('SpoonflowerController', SpoonflowerController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);

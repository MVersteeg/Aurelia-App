import 'bootstrap';
import 'bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'App Template';
    config.map([
      { route: ['','welcome'],  moduleId: './welcome', nav: true, title:'Welcome' },
      { route: ['about'],  moduleId: './about',nav: true, title:'About' },
    ]);

    this.router = router;
  }
}
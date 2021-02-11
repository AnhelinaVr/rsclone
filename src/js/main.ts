interface Window {
  main: any;
}

class Main {
  constructor() {
    console.log('Hello from TypeScript!');
  }
}

const main = new Main();
window.main = main;

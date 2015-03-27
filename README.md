# nan-ngDemos
Page with several useful demos for AngularJS

* Install grunt-cli
```
npm install grunt-cli
```

* Install grunt dependences before run
```
npm install grunt-contrib-less
npm install grunt-contrib-connect
npm install grunt-contrib-jshint
npm install grunt-contrib-concat
npm install grunt-contrib-watch 
```

* Run the application
```
grunt
```

Enter to [http://localhost:3000](http://localhost:3000) to see the site


## Contribution
We will use branches to each demo, each demo should be allocated for a branch with the same name.
For example, all the code relevant to the 'example-demo' must be in a new branch for 'master' named as 'example-demo'. In 'master' will be the base code (grunt, bootstrap, angularJS, JQuery, etc..)
All the view's code will be in the 'index.html'.
For example, from 'master' branch:
```
git checkout example-demo
```
... code ...
```
git commit -m "Example demo finished"
git push origin example-demo
```

## Try the demos
As explained above the idea to run a demo is make a checkout to the demo and run the application.
For example, from 'master' branch:
```
git checkout example-demo
grunt
```

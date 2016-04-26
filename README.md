###Source
Github: [https://github.com/estrat/eslint-config-ess](https://github.com/estrat/eslint-config-ess)  
NPM: [https://www.npmjs.com/package/eslint-config-ess](https://www.npmjs.com/package/eslint-config-ess)  

###Install
    npm install --save eslint-config-ess

###Grunt Configuration
  1. Install [grunt-eslint](https://www.npmjs.com/package/grunt-eslint):  
  ```
  npm install --save-dev grunt-eslint
  ```

  2. Create a new file in the grunt tasks folder, e.g. `grunts/eslint.js`.
  ```
  touch grunts/eslint.js
  ```

  3. In this file, paste this code to register a grunt task:  
	```
	'use strict';

	module.exports = function(grunt) {

		grunt.config('eslint', {
			options: {
				rulePaths: ['node_modules/eslint-config-ess/rules']
			},

			backend: {
				options: {
					config: 'eslint-config-ess/configs/backend.js'
				},
				src: [
					//file patterns here
				]
			},

			frontend: {
				options: {
					config: 'eslint-config-ess/configs/frontend.js'
				},
				src: [
					//file patterns here
				]
			}
		});

		grunt.loadNpmTasks('grunt-eslint');

	};
	```
  4. Fill out the `backend.src` and `frontend.src` arrays.
  5. Update `gruntfile.js` to include this configuration:
	```
	'use strict';

	module.exports = function(grunt) {

		grunt.initConfig({
			pkg: require('./package.json')
		});

		grunt.loadTasks('grunts');
		
		grunt.registerTask('check', [
			'eslint'
		]);
		
		grunt.registerTask('build', [
			'check'
			//additional tasks here
		]);
		
		grunt.registerTask('default', [
			'check'
		]);
	};
	```
  6. Test with `grunt` and `grunt check`.

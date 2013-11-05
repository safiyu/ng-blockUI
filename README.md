ng-blockUI
==========

An angular version of blockUI. This work is inspired by [Jim Lavin's angularjs-spinner](https://github.com/lavinjj/angularjs-spinner)

***

There is no necessity of triggering any services or broadcasting messages manually to block the UI. The module takes care of it. The module makes use of response interceptor to block your UI as your http requests are made and completed.

## Installation

AngularJS is required to run this module.


Inject the module to the app.
```javascript
angular.module('myModule', ['ngBlockui']);
```

Add this to your html head.
Note: Path to the css and javascript varies.
```
<link rel="stylesheet" href="css/blockui.css">
<script type="text/javascript" src="js/ngBlockui.js"></script>
```

Add a
```
<div ng-class="{blockui:blockUI==true}">
```
to the body of your index.html. All the webpage code must come under this div as shown below
```
<body>
	<div ng-class="{blockui:blockUI==true}">
		//your code
	</div>
</body>
```

(or if you are using route services)

```
<div ng-class="{blockui:blockUI==true}">
	<div ng-view></div>
</div>
```

Yep!.. That's it. You're done with blocking the UI !

**LICENSE**
-----------

The MIT License

Copyright (c) 2012-2013 Coding Smackdown TV, http://codingsmackdown.tv

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.






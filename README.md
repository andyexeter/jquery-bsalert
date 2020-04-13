[//]: # (Do not edit README.md as it is automatically generated from src/README.tpl.md)

# jQuery Bootstrap Alerts v1.0.0

[![Build status](https://img.shields.io/travis/andyexeter/jquery-bsalert.svg)](https://travis-ci.org/andyexeter/jquery-bsalert)
[![npm version](https://img.shields.io/npm/v/jquery-bsalert.svg)](https://www.npmjs.com/package/jquery-bsalert)
[![devDependency Status](https://img.shields.io/david/dev/andyexeter/jquery-bsalert.svg)](https://david-dm.org/andyexeter/jquery-bsalert#info=devDependencies)

jQuery plugin to programmatically display bootstrap alerts

## Installation

#### Download
* [jquery.bsAlert.min.js](https://unpkg.com/jquery-bsalert@1.0.0/dist/jquery.bsAlert.min.js) (2.09kB, 960B gzipped)
* [jquery.bsAlert.js](https://unpkg.com/jquery-bsalert@1.0.0/dist/jquery.bsAlert.js)  (4.82kB, 1.4kB gzipped)

#### CDN
```html
<script src="https://unpkg.com/jquery-bsalert@1.0.0/dist/jquery.bsAlert.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/jquery-bsalert@1.0.0/dist/jquery.bsAlert.js"></script>
```

#### Package Managers
Install via yarn:
```sh
$ yarn add jquery-bsalert
```

Install via NPM:
```sh
$ npm install jquery-bsalert --save
```

## Usage

#### Standard Usage
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://unpkg.com/jquery-bsalert@1.0.0/dist/jquery.bsAlert.min.js"></script>

<script>
// When the DOM is loaded
$(function() {
    if(someCheck) {
        $('#form').bsAlert('success', 'It was successful!');
    } else {
        $('#form').bsAlert('danger', 'Check form fields!');
    }
    
    // With all options and their default values
    $('#form').bsAlert({
        type: 'success',
        content: 'Thanks for contacting us!',
        clear: true, // Clear previous alerts (default)
        dismissible: true, // Make alert dismissible
        position: 'default' // 'default' causes alert to appear before the element. Can also accept 'after', or a function to position manually 
    });
});
</script>
```

#### Browserify
```sh
$ npm install jquery-bsalert --save
```

```js
var $ = require('jquery');
require('jquery-bsalert');

$('#form').bsAlert('warning', 'Alert');
```

## Options
`type` - The type of alert. See http://getbootstrap.com/components/#alerts for the different types allowed. Defaults to 'danger'.

`content` - The alert's text or html content. Can also be a function, see below for an example.

`clear` - Whether to clear any previous alert on the same element. Defaults to `true`.

`dismissible` - Whether the alert should be dismissible by the user. Defaults to `false`.

`position` - Where to position the alert. 'default' appears before the form, 'after' appears after, or a function may be passed
for custom positioning.

Using the `position` option as a function:
```js
$('#form').bsAlert({
    // 'this' is bound to the plugin instance
    position: function($alert) {
        $alert.appendTo('.container');
    }
});
```

Using the `content` option as a function:
```js
$('#form').bsAlert({
    // 'this' is bound to the plugin instance
    content: function() {
        if(this.options.dismissible) {
            return 'This is a dismissible alert';
        }
        
        return 'This is not a dismissible alert';
    }
});
```

Modify the `$.fn.bsAlert` object to change default option values:

```js
$.fn.bsAlert.dismissible = true;
```

## License

The MIT License (MIT)
Copyright (c) 2020 [The jQuery Bootstrap Alerts authors](https://github.com/andyexeter/jquery-bsalert/graphs/contributors)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

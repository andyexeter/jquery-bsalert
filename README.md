[//]: # (Do not edit README.md as it is automatically generated from src/README.tpl.md)

# jQuery Bootstrap Alerts v1.0.3

[![Build status](https://img.shields.io/travis/andyexeter/jquery-bsalert.svg)](https://travis-ci.org/andyexeter/jquery-bsalert)
[![npm version](https://img.shields.io/npm/v/jquery-bsalert.svg)](https://www.npmjs.com/package/jquery-bsalert)
[![devDependency Status](https://img.shields.io/david/dev/andyexeter/jquery-bsalert.svg)](https://david-dm.org/andyexeter/jquery-bsalert#info=devDependencies)

jQuery plugin to programmatically display bootstrap alerts

## Installation

#### Download
* [jquery.bsAlert.min.js](https://unpkg.com/jquery-bsalert@1.0.3/dist/jquery.bsAlert.min.js) (1.93kB, 920B gzipped)
* [jquery.bsAlert.js](https://unpkg.com/jquery-bsalert@1.0.3/dist/jquery.bsAlert.js)  (4.05kB, 1.31kB gzipped)

#### CDN
```html
<script src="https://unpkg.com/jquery-bsalert@1.0.3/dist/jquery.bsAlert.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/jquery-bsalert@1.0.3/dist/jquery.bsAlert.js"></script>
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
<script src="https://unpkg.com/jquery-bsalert@1.0.3/dist/jquery.bsAlert.min.js"></script>

<script>
$(function() {
    if(someCheck) {
        $('#form').bsAlert('success', 'It was successful!');
    } else {
        $('#form').bsAlert('danger', 'Check form fields!');
    }

    // With all options
    $('#form').bsAlert({
        type: 'success',
        content: 'Thanks for contacting us!',
        dismissible: true,
        position: 'before'
    });
});
</script>
```

#### Webpack and Browserify
```sh
$ yarn add jquery-bsalert
```

```js
var $ = require('jquery');
require('jquery-bsalert');

$('#form').bsAlert('warning', 'Alert');
```

## Options
| Option         | Type                   | Description                                                                                  | Default           |
|----------------|------------------------|----------------------------------------------------------------------------------------------|-------------------|
| type           | `string`               | Alert type. See http://getbootstrap.com/components/#alerts for the different types allowed.  | `danger`          |
| content        | `string` or `function` | The alert's text or html content. Can also be a function, see below for an example..         | `''`              |
| dismissible    | `boolean`              | Whether the alert can be dismissed. Displays a close button if true                          | `false`           |
| position       | `string` or `function` | Where to position the alert. Valid options are 'before', 'after', or a function.             | `before`          |

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

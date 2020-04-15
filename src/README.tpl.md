[//]: # (Do not edit README.md as it is automatically generated from src/README.tpl.md)

# <%= pkg.title %> v<%= pkg.version %>

[![Build status](https://img.shields.io/travis/andyexeter/<%= pkg.name %>.svg)](https://travis-ci.org/andyexeter/<%= pkg.name %>)
[![npm version](https://img.shields.io/npm/v/<%= pkg.name %>.svg)](https://www.npmjs.com/package/<%= pkg.name %>)
[![devDependency Status](https://img.shields.io/david/dev/andyexeter/<%= pkg.name %>.svg)](https://david-dm.org/andyexeter/<%= pkg.name %>#info=devDependencies)

<%= pkg.description %>

## Installation

#### Download
* [<%= files.min.name %>](https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.min.name %>) (<%= files.min.size %>, <%= files.min.gzipped %> gzipped)
* [<%= files.main.name %>](https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.main.name %>)  (<%= files.main.size %>, <%= files.main.gzipped %> gzipped)

#### CDN
```html
<script src="https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.min.name %>"></script>
<!-- OR -->
<script src="https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.main.name %>"></script>
```

#### Package Managers
Install via yarn:
```sh
$ yarn add <%= pkg.name %>
```

Install via NPM:
```sh
$ npm install <%= pkg.name %> --save
```

## Usage

#### Standard Usage
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.min.name %>"></script>

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
$ yarn add <%= pkg.name %>
```

```js
var $ = require('jquery');
require('<%= pkg.name %>');

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

Released under the [MIT license](LICENSE)

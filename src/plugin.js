"use strict";

var pluginName = "bsAlert";

var instances = {};
var instanceIdCounter = -1;

var publicAPI = {
    destroy: function () {
        this.clear();
        delete instances[this.$el.data(pluginName + '.id')];
        this.$el.removeData(pluginName + '.id');
    },

    show: function () {
        if ($.isFunction(this.options.position)) {
            this.options.position.call(this, this.getAlert());
        } else if (this.options.position === 'after') {
            this.$el.after(this.getAlert());
        } else {
            this.$el.before(this.getAlert());
        }
    },

    clear: function () {
        instances[this.$el.data(pluginName + '.id')].$alert.remove();
    }
};

var privateAPI = {
    getAlert: function () {
        var $alert = $("<div />");

        $alert
            .attr("role", "alert")
            .addClass("alert alert-" + this.options.type)
            .append(
                document.createTextNode(' ' + this.getContent(this.options.content))
            );

        if (this.options.icons && this.options.icons[this.options.type]) {
            var $icon = $("<span />").addClass(
                this.options.icons[this.options.type]
            );

            $alert.prepend($icon);
        }

        if (this.options.dismissible) {
            $alert.addClass("alert-dismissible");

            $alert.append(
                $("<button />")
                    .attr({
                        type: "button",
                        "data-dismiss": "alert",
                        "aria-label": "Close",
                        class: "close"
                    })
                    .html('<span aria-hidden="true">&times;</span>')
            );
        }

        this.$alert = $alert;

        return $alert;
    },

    getContent: function (arg) {
        return $.isFunction(arg) ? arg.call(this) : arg;
    }
};

function Plugin(element, options, instanceId) {
    this.$el = $(element);
    this.$alert = null;
    this.options = $.extend({}, $.fn[pluginName].defaults, options);

    this.$el.data(pluginName + '.id', instanceId);

    this.show();
}

Plugin.prototype = $.extend({}, publicAPI, privateAPI);

$.fn[pluginName] = function () {
    var args = arguments;

    var instanceId = this.data(pluginName + '.id');

    if (typeof instanceId === 'undefined') {
        instanceId = ++instanceIdCounter;
    }

    if (instances.hasOwnProperty(instanceId)) {
        if (typeof args[0] === "string" && $.isFunction(publicAPI[args[0]])) {
            return publicAPI[args[0]].apply(instances[instanceId], Array.prototype.slice.call(args, 1));
        }

        instances[instanceId].destroy();
    }

    if (typeof args[0] !== 'object') {
        args[0] = {type: args[0], content: args[1]};
    }

    instances[instanceId] = new Plugin(this, args[0], instanceId);
};

$.fn[pluginName].defaults = {
    type: "danger", // danger, warning, info, success
    content: "",
    clear: true,
    dismissible: false,
    position: "default",
    icons: {
        danger: "fa fa-exclamation-circle",
        warning: "fa fa-question-circle",
        info: "fa fa-info-circle",
        success: "fa fa-check-circle"
    }
};

// noinspection JSAnnotator
return $.fn[pluginName];

!(function($window) {

    /**
     * @module Shift
     * @constructor
     */
    $window.Shift = function() {
        this.setup();
    };

    $window.Shift.prototype = {

        _firstNode: null,

        _shiftDown: false,

        /**
         * Responsible for attaching the events to the elements.
         * @method setup
         */
        setup: function setup() {

            var _fillGaps   = this._fillGaps,
                scope       = this,
                nodes       = $window.document.querySelectorAll('*[data-shift-group]');

            $window.document.onkeyup = function(event) {
                scope._shiftDown = false;
            };

            $window.document.onkeydown = function(event) {
                scope._shiftDown = event.shiftKey;
            };

            // Iterate over each discovered node to attach the event.
            for (var index = 0, maxNodes = nodes.length; index < maxNodes; index++) {

                var node = nodes[index];

                node.onclick = function() {
                    _fillGaps.call(scope, this);
                };

            }

        },

        /**
         * @method _fillGaps
         * @param lastNode {Object}
         * @return {void}
         * @private
         */
        _fillGaps: function(lastNode) {

            if (!this._firstNode || !this._shiftDown) {
                // We don't have an originating node so let's define one!
                this._firstNode = lastNode;
                return;
            }

            var nodes       = $window.document.querySelectorAll('*[data-shift-group]'),
                highlight   = false;

            for (var index = 0, maxNodes = nodes.length; index < maxNodes; index++) {

                var node = nodes[index];

                if (node === lastNode || node === this._firstNode) {
                    highlight = !highlight;
                }

                if (highlight) {
                    node.checked = lastNode.checked;
                }

            }

        }

    };

})(window);
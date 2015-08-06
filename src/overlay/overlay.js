import OpenSeadragon from 'OpenSeadragon';

export default {

    initialize: function (options) {
        OpenSeadragon.extend(this, options);
        this.el = document.createElement('div');
        this.el.className = 'overlay';
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('version', '1.1');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('preserveAspectRatio', 'none');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.style.cursor = 'default';
        this.el.appendChild(svg);
        var width = this.viewer.viewport.homeBounds.width;
        var height = this.viewer.viewport.homeBounds.height;
        this.viewer.addOverlay(this.el, new OpenSeadragon.Rect(0, 0, width, height));
        return this;
    }

};
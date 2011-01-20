/**
 * @author Pavel Podlipensky - http://podlipensky.com
 * @class Ext.ux.touch.CircleRating
 * 
 */
 Ext.namespace('Ext.ux.touch');
 
Ext.ux.touch.CircleRating = Ext.extend(Ext.ux.touch.Rating, {
	margins: {top: 6, bottom: 2,  left: 2, right: 2},
	
	initComponent: function(){
    	Ext.ux.touch.CircleRating.superclass.initComponent.call(this);
    	this.on('afterRender', this.onAfterRender, this);
	},
	
	/**
     * Sets the width and height of this Component and calculates/set size of each "star"
     * @return {Ext.Component} this
     */
    setSize : function(width, height) {
    	console.log('width' + width);
    	console.log('pw:' + this.ownerCt.getTargetEl().getWidth());
    	Ext.ux.touch.CircleRating.superclass.setSize.apply(this, arguments);
		var m = this.margins;
		var count = this.items.length;
		var w = width - (m.left + m.right) * count - this.labelEl.getWidth();
		console.log('w' + w);
		var h = height - (m.top + m.bottom);
		var diameter = Math.min(w, h);
		console.log('d:' + diameter);
		if(w / count < diameter)
		{
			diameter = w / count;
		}
		console.log('d:' + diameter);
		this.diameter = diameter;
		var items = this.items;
		Ext.each(items, function(item){
			item.dom.style.cssText = Ext.util.Format.format('-webkit-border-radius: {0}px; width: {1}px; height: {2}px;margin:{3}px {4}px {5}px {6}px;',
						diameter / 2, diameter, diameter,
						m.top, m.right, m.bottom, m.left);
		}, this);
		return this;
    },
    
    onAfterRender: function(){
    	var size = this.getSize();
    	this.setSize(size.width, size.height);
    }
});

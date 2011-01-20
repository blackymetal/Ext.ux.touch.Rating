Ext.ux.touch.Rating

@author Pavel Podlipensky - http://podlipensky.com
@class Ext.ux.touch.Rating
<p>This is an extension for Ext.form.Field which works with Sencha Touch. 
The Rating control provides an intuitive rating experience that allows users to select the number of stars (or other symbols) that represents their rating.</p>
<p>Sample Usage</p>
<pre><code>
		new Ext.ux.touch.Rating({
			itemsCount : 5,
			label : 'Rating',
			inputCls : 'x-rating-star-input',
			itemCls : 'x-rating-star',
			itemHoverCls : 'x-rating-star-hover'
		})
	</code></pre>
	<p>More detailed rating control configuration</p> 
	<pre><code>						 
		new Ext.ux.touch.Rating({
			label : 'Rating',
			inputCls : 'x-rating-star-color',
			items : [{
						hoverCls : 'x-rating-0'
					}, {
						hoverCls : 'x-rating-1'
					}, {
						hoverCls : 'x-rating-2'
					}, {
						hoverCls : 'x-rating-3'
					}, {
						hoverCls : 'x-rating-4'
					}]
		})
</code></pre> 

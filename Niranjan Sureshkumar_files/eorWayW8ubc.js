if (self.CavalryLogger) { CavalryLogger.start_js(["Z3pgi"]); }

__d("CommerceSelfServeNUXType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COLLECTION_SHARE_UPSELL:"collection_share_upsell",DISCOUNT_CODES_UPSELL:"discount_codes_upsell",FIRST_ORDER_BANNER:"first_order_banner",FIRST_ORDER_MODAL:"first_order_modal",SHOP_NOW_CTA:"shop_now_cta",SHOP_TAB_IN_PUBLISHING_TOOLS:"shop_tab_pt_self_serve_nux",SHOP_TAB_ON_PAGE:"shop_tab_page_self_serve_nux",COMPOSER_PRODUCT_TAGGER_BUTTON:"composer_product_tagger_button",PRODUCT_TAG_PAGE_LANDING_UPSELL:"product_tag_page_landing_upsell",PRODUCT_ATTACHMENT_COMPOSER:"product_attachment_composer_nux",COMPOSER_PRODUCT_PHOTO_TAGGER_BUTTON:"composer_product_photo_tagger_button"};},null);
__d('AdsLabeledField.react',['cx','fbt','AdsHelpLink.react','React','XUIText.react','joinClasses'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return n=(o=k.constructor).call.apply(o,[this].concat(q)),this.$AdsLabeledField1=function(){var s=null;if(this.props.optional)s=c('React').createElement(c('XUIText.react'),{weight:'normal'},this.props.optionalText);return (c('React').createElement('label',{className:"_4el4"+(this.props.labelSize==='small'?' '+"_3qwj":'')+(this.props.labelSize==='medium'?' '+"_3qwk":'')+(!this.props.htmlFor?' '+"_3hy-":''),htmlFor:this.props.htmlFor},i._("{Part of label for an ads field must have a value.} {Part of label for a field that doesn't need a value}",[i.param('Part of label for an ads field must have a value.',this.props.label),i.param('Part of label for a field that doesn\'t need a value',s)])));}.bind(this),this.$AdsLabeledField2=function(){var s=this.props.helpText,t=s?c('React').createElement(c('AdsHelpLink.react'),{imgHover:this.props.imgHover,imgNormal:this.props.imgNormal,linger:this.props.helpLinger,width:300},s):null;return t;}.bind(this),n;}m.prototype.render=function(){return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_3bvz")}),this.$AdsLabeledField1(),this.$AdsLabeledField2(),c('React').createElement('div',{className:"_3bv-"},this.props.children));};m.propTypes={className:l.string,label:l.oneOfType([l.string.isRequired,l.node.isRequired]),helpText:l.node,helpLinger:l.number,htmlFor:l.string,labelSize:l.oneOf(['small','medium']),optional:l.bool,optionalText:l.node};m.defaultProps={label:null,labelSize:'small',optionalText:i._("(optional)")};f.exports=m;},null);
__d('FileInput.react',['cx','invariant','FileInput','InlineBlock.react','React','ReactDOM','joinClasses'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return n=(o=k.constructor).call.apply(o,[this].concat(q)),this.getFileInput=function(){return this.$FileInput1;}.bind(this),this.focus=function(){var s=c('ReactDOM').findDOMNode(this.refs.fileInput);if(!s.disabled)s.focus();}.bind(this),n;}m.prototype.render=function(){'use strict';var n=c('joinClasses')("_m",this.props.containerClassName),o='container',p=c('React').createElement('input',babelHelpers['extends']({},this.props,{type:'file',className:c('joinClasses')(this.props.className,"_n"),ref:'fileInput'}),undefined);if(this.props.display==='inline-block')return c('React').createElement(c('InlineBlock.react'),{className:n,ref:o},this.props.children,p);return c('React').createElement('span',{className:n,ref:o},this.props.children,p);};m.prototype.componentDidMount=function(){'use strict';var n=c('ReactDOM').findDOMNode(this.refs.fileInput),o=c('ReactDOM').findDOMNode(this.refs.container),p=o.firstChild;!(p.nodeName==='A')?i(0):void 0;p.setAttribute('rel','ignore');this.$FileInput1=new (c('FileInput'))(o,p,n);};m.prototype.componentWillUnmount=function(){'use strict';this.$FileInput1.destroy();this.$FileInput1=null;};m.propTypes={containerClassName:l.string,display:l.oneOf(['inline-block','inline'])};m.defaultProps={display:'inline-block'};f.exports=m;},null);
__d('XUIOverlayButton.react',['cx','AbstractButton.react','React','joinClasses'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';var l="_51tl selected";return (c('React').createElement(c('AbstractButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,l)})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('XUIDialogSaveButton.react',['fbt','React','XUIDialogButton.react'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'confirm',label:h._("Save")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d("Collection",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){if(!i.__collection__){var k=new Function();for(var l in i.prototype)k.prototype[l]=h._call.bind(null,l);i.__collection__=k;}var m=new i.__collection__();m._elements=j;return m;}h._call=function(i){var j=Array.prototype.slice.call(arguments,1);this._elements.forEach(function(k){k[i].apply(k,j);});return this;};f.exports=h;},null);
__d('Drag',['Event','Arbiter','DOM','Style','Vector'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};h.currentDraggable=null;h.grab=function(i){if(h.currentDraggable)h._onmouseup();i.lastDragOver=null;h.attachDragEvents();h.currentDraggable=i;};h.attachDragEvents=function(){document.onselectstart=function(){document.onselectstart=null;return false;};if(h.dragEventsAttached)return;h.dragEventsAttached=true;c('Arbiter').subscribe('scroller/scroll',h._onmousemove);c('Event').listen(document,{mousemove:h._onmousemove,mouseup:h._onmouseup});};h.droppables={};h.addDroppable=function(i,j){(h.droppables[i]=h.droppables[i]||[]).push(j);};h.removeDroppable=function(i,j){h.droppables[i]=h.droppables[i].filter(function(k){return k!=j;});};h.getOffsetParent=function(i){if(c('DOM').isNodeOfType(i,['body','html']))return document.body;while((i=i.parentNode)&&i!==document.body)if(c('Style').get(i,'position')!=='static')return i;return document.body;};h._onmousemove=function(event,i){if(!h.currentDraggable)return;var j=i||c('Vector').getEventPosition(event),k=h.currentDraggable,l=h.droppables[k.namespace];if(k.namespace&&k.active&&l){var m={};l.forEach(function(s){m[s.zIndex]=s.zIndex;});var n=[];for(var o in m)n.push(m[o]);n.sort();var p=k.lastDragOver,q=null;for(var r=n.length-1;r>=0;r--)if(p&&p.dom!=null&&p.zIndex==n[r]&&p.isDraggedOver(j)){q=p;break;}else for(o=0;o<l.length;o++){if(n[r]!=l[o].zIndex)continue;if(p!=l[o]&&k.dom!=l[o].dom&&l[o].isDraggedOver(j)){q=l[o];r=-1;break;}}if(q&&q!=p){q.ondragover(k);h.currentDraggable.adjustCursorPosition();}if(q)q.ondragmove(k,j.sub(c('Vector').getElementPosition(q.dom)));k.lastDragOver=q;}h.currentDraggable._onmousemove(j);};h._onmouseup=function(i){document.onselectstart=null;if(h.currentDraggable){h.currentDraggable._ondrop();h.currentDraggable=null;}};f.exports=h;},null);
__d('Draggable',['Event','Arbiter','Collection','DOM','Drag','Rect','Style','Vector','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){'use strict';this.canvas=j;this.scrollZone=50;this.velocity=100;this.coefficient=1;}h.prototype.activate=function(){'use strict';this.activate=c('emptyFunction');this.event=c('Event').listen(document,'mousemove',this._onmousemove.bind(this));this.interval=setInterval(this._intervalHandler.bind(this),50);this.cursor=null;};h.prototype.deactivate=function(){'use strict';delete this.activate;this.event&&this.event.remove();this.event=null;clearInterval(this.interval);};h.prototype._onmousemove=function(event){'use strict';this.cursor=c('Vector').getEventPosition(event);};h.prototype._intervalHandler=function(){'use strict';if(!this.cursor)return;var j=this.canvas==document.body?c('Rect').getViewportBounds():new (c('Rect'))(this.canvas),k=new (c('Rect'))(this.cursor.y-j.t,j.r-this.cursor.x,j.b-this.cursor.y,this.cursor.x-j.l),l=new (c('Vector'))(0,0);if(k.t<k.b&&k.t<this.scrollZone){l.y=-this.scrollZone+k.t;}else if(k.b<this.scrollZone)l.y=this.scrollZone-k.b;l.y=this._doMath(l.y);if(k.l<k.r&&k.l<this.scrollZone){l.x=-this.scrollZone+k.l;}else if(k.r<this.scrollZone)l.x=this.scrollZone-k.r;l.x=this._doMath(l.x);if(l.x||l.y){l.scrollElementBy(this.canvas);if(document.body==this.canvas){var m=c('Vector').getScrollPosition();l.scrollElementBy(this.canvas);var n=c('Vector').getScrollPosition();this.cursor=this.cursor.add(n.sub(m));}else l.scrollElementBy(this.canvas);c('Arbiter').inform('scroller/scroll',this.cursor);}};h.prototype._doMath=function(j){'use strict';j=j>=0?Math.min(j,this.scrollZone):Math.max(j,-this.scrollZone);return Math.floor(Math.pow(j/this.scrollZone*this.velocity,this.coefficient));};h.findScrollParent=function(j){'use strict';var k;j=j.parentNode;while(j){if(j.scrollHeight!=j.offsetTop){k=c('Style').get(j,'overflowY');if(k=='scroll'||k=='auto')return j;}j=j.parentNode;}return document.body;};function i(j){'use strict';if(!j)throw new Error('Element should be a DOM node');if(!(this instanceof i)){if(j instanceof Array){var k=[];j.forEach(function(l){k.push(new i(l));});return new (c('Collection'))(i,k);}else return new i(j);}else{this.data={};this.handles=[];this.dom=j;this.boundingBox=null;this.useScroller=true;this.grabPctX=this.grabPctY=0;this._shouldKillEvents=true;this.addHandle(this.dom);}}i.prototype.destroy=function(){'use strict';this.handles.forEach(function(j){this.removeHandle(j.obj);}.bind(this));this.data=this.dom=null;};i.prototype.adjustCursorPosition=function(){'use strict';var j=c('Vector').getElementDimensions(this.dom);this.cursorPositionVector=new (c('Vector'))(parseInt(this.grabPctX*j.x,10),parseInt(this.grabPctY*j.y,10));};i.prototype._onclick=function(event){'use strict';if(!this._shouldKillEvents)return true;if(this.active)return c('Event').kill(event);};i.prototype._ongrab=function(j){'use strict';this.ongrab();if(this.useScroller){if(!this.scroller)this.scroller=new h(h.findScrollParent(this.dom));this.scroller.activate();}if(this.active){if(!this.oldPosition)this.oldPosition=this.dom.style.position;var k=c('Drag').getOffsetParent(this.dom);if(k!==document.body)j=j.sub(c('Vector').getElementPosition(k));this.dom.style.position=this.absolute?'absolute':'relative';j.sub(this.cursorPositionVector).setElementPosition(this.dom);}};i.prototype._onmousedown=function(event){'use strict';if(!(event.which&&event.which===1||event.button&&event.button===1))return;var j=event.getTarget();if(c('DOM').isNodeOfType(j,['input','select','textarea','object','embed']))return true;var k=c('Vector').getEventPosition(event),l=c('Vector').getElementDimensions(this.dom);this.draggableInitialVector=c('Vector').getElementPosition(this.dom);this.cursorPositionVector=k.sub(this.draggableInitialVector);this.grabPctX=l.x===0?0:this.cursorPositionVector.x/l.x;this.grabPctY=l.y===0?0:this.cursorPositionVector.y/l.y;c('Drag').grab(this,event);if(this.gutter){this.cursorInitialVector=k;}else{this._setActive(true);this._ongrab(k);}if(!this._shouldKillEvents)return true;return c('Event').kill(event);};i.prototype._onmousemove=function(j){'use strict';if(!this.active)if(j.distanceTo(this.cursorInitialVector)>=this.gutter){this._setActive(true);this._ongrab(j);}if(this.active){var k=j.sub(this.cursorPositionVector),l;if(this.boundingBox){var m=c('Rect').newFromVectors(k,c('Vector').getElementDimensions(this.dom));m=m.boundWithin(this.boundingBox);k=m.getPositionVector();if(this.boundingBox.w()===0){l=new (c('Vector'))(this.draggableInitialVector.x,k.y,'document');}else if(this.boundingBox.h()===0){l=new (c('Vector'))(k.x,this.draggableInitialVector.y,'document');}else l=k;}else l=k;var n=c('Drag').getOffsetParent(this.dom);if(n!==document.body)l=l.sub(c('Vector').getElementPosition(n));l.setElementPosition(this.dom);this.ondrag(j);}};i.prototype._ondrop=function(){'use strict';this.scroller&&this.scroller.deactivate();if(this.active){setTimeout(function(){this._setActive(false);}.bind(this),0);this.ondrop(this.scroller&&this.scroller.cursor);if(this.lastDragOver)this.lastDragOver.ondrop(this);}};i.prototype.killDrag=function(){'use strict';this._setActive(false);c('Drag')._onmouseup();};i.prototype.forceDrop=function(){'use strict';c('Drag')._onmouseup();};i.prototype.setBoundingBox=function(j){'use strict';this.boundingBox=j;return this;};i.prototype.resetPosition=function(){'use strict';this.dom.style.position=this.oldPosition;this.oldPosition=null;this.dom.style.left='';this.dom.style.top='';return this;};i.prototype.setUseAbsolute=function(j){'use strict';this.absolute=j;return this;};i.prototype.setDragHandler=function(j){'use strict';this.ondrag=j;return this;};i.prototype.setGrabHandler=function(j){'use strict';this.ongrab=j;return this;};i.prototype.setDropHandler=function(j){'use strict';this.ondrop=j;return this;};i.prototype.setGutter=function(j){'use strict';this.gutter=j;return this;};i.prototype.setNamespace=function(j){'use strict';this.namespace=j;return this;};i.prototype.setUseScroller=function(j){'use strict';this.useScroller=j;return this;};i.prototype.setAvoidKillingEvents=function(j){'use strict';this._shouldKillEvents=!j;return this;};i.prototype.addHandle=function(j){'use strict';if(this.handles.length==1&&this.handles[0].obj==this.dom)this.removeHandle(this.dom);this.handles.push({obj:j,evt:[c('Event').listen(j,'mousedown',this._onmousedown.bind(this)),c('Event').listen(j,'click',this._onclick.bind(this)),c('Event').listen(j,'drag',this._killUnlessActive.bind(this)),c('Event').listen(j,'selectstart',this._killUnlessActive.bind(this))]});return this;};i.prototype.removeHandle=function(j){'use strict';this.handles=this.handles.filter(function(k){if(k.obj!=j){return true;}else{k.evt.forEach(function(l){l.remove();});return false;}});};i.prototype.getDOM=function(){'use strict';return this.dom;};i.prototype.setKey=function(j,k){'use strict';this.data[j]=k;return this;};i.prototype.getKey=function(j){'use strict';return this.data[j];};i.prototype._setActive=function(j){'use strict';if(!this.dom)return;this.dom.activeDrag=this.active=j;for(var k=0;k<this.handles.length;k++)this.handles[k].obj.activeDrag=j;};i.prototype._killUnlessActive=function(j){'use strict';if(!this._shouldKillEvents)return;if(j.getTarget()!==document.activeElement)return j.kill();};i.prototype.ondrag=c('emptyFunction');i.prototype.ongrab=c('emptyFunction');i.prototype.ondrop=c('emptyFunction');i.prototype.gutter=0;i.prototype.handles=null;f.exports=i;},null);
__d('ContextualLayerHideOnScrollOut',['Event','SubscriptionsHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$ContextualLayerHideOnScrollOut1=i;}h.prototype.enable=function(){'use strict';if(!this.$ContextualLayerHideOnScrollOut2){this.$ContextualLayerHideOnScrollOut2=new (c('SubscriptionsHandler'))();this.$ContextualLayerHideOnScrollOut2.addSubscriptions(this.$ContextualLayerHideOnScrollOut1.subscribe('contextchange',this.$ContextualLayerHideOnScrollOut3.bind(this)),this.$ContextualLayerHideOnScrollOut1.subscribe('show',this.$ContextualLayerHideOnScrollOut4.bind(this)),this.$ContextualLayerHideOnScrollOut1.subscribe('hide',this.$ContextualLayerHideOnScrollOut5.bind(this)));}};h.prototype.disable=function(){'use strict';if(this.$ContextualLayerHideOnScrollOut2){this.$ContextualLayerHideOnScrollOut2.release();this.$ContextualLayerHideOnScrollOut2=undefined;}this.$ContextualLayerHideOnScrollOut5();};h.prototype.$ContextualLayerHideOnScrollOut4=function(){'use strict';if(!this.$ContextualLayerHideOnScrollOut6){this.$ContextualLayerHideOnScrollOut7=this.$ContextualLayerHideOnScrollOut1.getContextScrollParent();if(this.$ContextualLayerHideOnScrollOut7===window)return;this.$ContextualLayerHideOnScrollOut6=c('Event').listen(this.$ContextualLayerHideOnScrollOut7,'scroll',this.$ContextualLayerHideOnScrollOut8.bind(this));}};h.prototype.$ContextualLayerHideOnScrollOut5=function(){'use strict';if(this.$ContextualLayerHideOnScrollOut6){this.$ContextualLayerHideOnScrollOut6.remove();this.$ContextualLayerHideOnScrollOut6=undefined;this.$ContextualLayerHideOnScrollOut7=undefined;}};h.prototype.$ContextualLayerHideOnScrollOut8=function(){'use strict';var i=this.$ContextualLayerHideOnScrollOut1.getContent().getBoundingClientRect(),j=this.$ContextualLayerHideOnScrollOut7.getBoundingClientRect(),k=i.bottom<=j.top||i.top>=j.bottom,l=i.right<=j.left||i.left>=j.right;if(k||l)this.$ContextualLayerHideOnScrollOut1.hide();};h.prototype.$ContextualLayerHideOnScrollOut3=function(){'use strict';this.detach();if(this.$ContextualLayerHideOnScrollOut1.isShown())this.attach();};f.exports=h;},null);
__d('promiseStoreGet',['Promise','Map'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(j,k,l,m){var n=l||function(p){return p.isDone()&&p.hasValue();},o=m||function(p){return p.isDone()&&p.hasError();};return new (c('Promise'))(function(p,q){var r=j.addListener(s);s();function s(){var t=k();if(o(t)){q(t.error||t.value);r.remove();}else if(n(t)){p(t.value);r.remove();}}});}h.all=function(j,k,l,m){var n=l||function(p){return p.isDone()&&p.hasValue();},o=m||function(p){return p.isDone()&&p.hasError();};return new (c('Promise'))(function(p,q){var r=j.addListener(s);s();function s(){var t=true,u=k();for(var v=u,w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var y;if(w){if(x>=v.length)break;y=v[x++];}else{x=v.next();if(x.done)break;y=x.value;}var z=y,aa=z[1];if(o(aa)){q(aa.error||aa.value);r.remove();return;}t=t&&n(aa);}if(t){p(i(u));r.remove();}}});};function i(j){var k=new (c('Map'))();for(var l=j,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o,q=p[0],r=p[1];k.set(q,r.value);}return k;}f.exports=h;},null);
__d("XCommerceSelfServeMerchantNUXSeenController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/commerce\/self-serve\/merchant\/mark-nux-seen\/",{page_id:{type:"Int",required:true},nux_type:{type:"Enum",required:true,enumType:1}});},null);
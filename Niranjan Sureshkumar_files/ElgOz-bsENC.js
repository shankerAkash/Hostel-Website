if (self.CavalryLogger) { CavalryLogger.start_js(["QJdf\/"]); }

__d('ScrollColumn.react',['cx','invariant','joinClasses','throttle','tidyEvent','Arbiter','Event','React','ReactDOM','Vector','ViewportBounds'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k='ScrollColumn/adjust',l=c('React').createClass({displayName:'ScrollColumn',propTypes:{topOffset:j.number,zIndex:j.number},getDefaultProps:function(){return {topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function(){var m='auto',n=this.state.fixedLeft,o='auto';if(this.state.fixed==='bottom'){m=this.state.fixedBottom;}else if(this.state.fixed==='top'){o=this.state.fixedTop;}else{n='auto';o=this.state.top;}var p=c('joinClasses')(this.props.className,"_5ss7");return (c('React').createElement('div',{className:p,ref:'container'},c('React').createElement('div',{className:"_5ss8"+(this.state.fixed?' '+"fixed_always":''),ref:'column',style:{bottom:m,left:n,top:o,zIndex:this.props.zIndex}},this.props.children)));},componentDidMount:function(){this.setState({adjustEventListener:c('tidyEvent')(c('Arbiter').subscribe(k,function(){this._adjust();}.bind(this))),resizeListener:c('tidyEvent')(c('Event').listen(window,'resize',c('throttle')(this._adjust))),scrollListener:c('tidyEvent')(c('Event').listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:c('tidyEvent')(c('ViewportBounds').subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function(m,n){if(n.fixed!==this.state.fixed)c('Arbiter').inform('reflow');},componentWillUnmount:function(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function(event){var m=c('Vector').getScrollPosition().y;this._scrollDelta=m-this._scroll;this._scroll=m;this._adjust();},_adjust:function(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var m=this._getTopPositionForRef('column'),n=this._getTopPositionForRef('container'),o=m-n;this._setNotFixed(o);},_getTopPositionForRef:function(m){var n=this.refs[m];!n?i(0):void 0;var o=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(n),'viewport').y;if(this._scroll<0)o+=this._scroll;return o;},_getTopBoundWithOffset:function(){return c('ViewportBounds').getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function(){var m=this._getTopPositionForRef('container');return m>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function(){var m=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom()-this._getTopBoundWithOffset();return c('ReactDOM').findDOMNode(this.refs.column).offsetHeight>m;},_isBottomOfColumnVisible:function(){var m=this._getTopPositionForRef('column'),n=c('Vector').getElementDimensions(c('ReactDOM').findDOMNode(this.refs.column),'viewport').y,o=m+n;return o<=c('Vector').getViewportDimensions().y-c('ViewportBounds').getBottom();},_isTopOfColumnVisible:function(){var m=this._getTopPositionForRef('column');return m>=this._getTopBoundWithOffset();},_getFixedLeft:function(){return (c('Vector').getElementPosition(c('ReactDOM').findDOMNode(this.refs.container),'viewport').x);},_setFixedToBottom:function(){this.setState({fixed:'bottom',fixedBottom:c('ViewportBounds').getBottom(),fixedLeft:this._getFixedLeft()});},_setFixedToTop:function(){this.setState({fixed:'top',fixedLeft:this._getFixedLeft(),fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function(m){this.setState({fixed:false,top:m});},_updateContainerHeight:function(){c('ReactDOM').findDOMNode(this.refs.container).style.height=c('ReactDOM').findDOMNode(this.refs.column).offsetHeight+this.state.top+'px';},_updateColumnWidth:function(){c('ReactDOM').findDOMNode(this.refs.column).style.width=c('ReactDOM').findDOMNode(this.refs.container).offsetWidth+'px';}});l.EVENT_SHOULD_ADJUST=k;f.exports=l;},null);
__d('XUITypeahead.react',['cx','AbstractTypeahead.react','Image.react','React','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses','update'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l={ViewRenderer:c('XUITypeaheadView.react'),useLayer:true},m={ViewRenderer:c('XUITypeaheadView.react'),useLayer:false},n={ViewRenderer:c('XUITypeaheadTextOnlyView.react'),useLayer:true};i=babelHelpers.inherits(o,c('React').Component);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return p=(q=j.constructor).call.apply(q,[this].concat(s)),this.focusInput=function(){this.refs.typeahead&&this.refs.typeahead.focusInput();}.bind(this),this.blurInput=function(){this.refs.typeahead&&this.refs.typeahead.blurInput();}.bind(this),this.hideView=function(){this.refs.typeahead.hideView();}.bind(this),this.getTextFieldDOM=function(){return this.refs.typeahead.getTextFieldDOM();}.bind(this),this.$XUITypeahead1=function(){this.props.onClear();setTimeout(function(){return this.focusInput();}.bind(this),0);}.bind(this),p;}o.prototype.componentWillMount=function(){'use strict';};o.prototype.render=function(){'use strict';var p="_55r1"+(!!this.props.tallInput?' '+"_55r2":''),q=null;if(this.props.presenter){q=this.props.presenter;}else if(this.props.viewStyle=='rich'){q=l;}else if(this.props.viewStyle=='richNoLayer'){q=m;}else q=n;if(!this.props.presenter&&this.props.maxEntries)q=c('update')(q,{maxEntries:{$set:this.props.maxEntries}});var r=this.props.showPhoto&&this.props.selectedEntry?c('React').createElement(c('Image.react'),{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,s=this.props.clearable&&!this.props.disabled?c('React').createElement(c('XUICloseButton.react'),{className:"_wrm"+(!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this.$XUITypeahead1}):null,t=this.props,u=t.className,v=babelHelpers.objectWithoutProperties(t,['className']);return (c('React').createElement(c('XUIError.react'),this.props,c('React').createElement('span',{className:c('joinClasses')("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!s?' '+"_4ehf":'')+(!!r?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),u)},r,c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},v,{inputClassName:p,ref:'typeahead',presenter:q})),s)));};o.propTypes=babelHelpers['extends']({maxEntries:k.number,onChange:k.func.isRequired,onSelectAttempt:k.func.isRequired,onEnterWithoutSelection:k.func,onEntriesFound:k.func,onNoEntriesFound:k.func,selectedEntry:k.instanceOf(c('SearchableEntry')),tallInput:k.bool,viewStyle:k.oneOf(['textonly','rich','richNoLayer']),clearable:k.bool,onClear:k.func,showPhoto:k.bool,highlightOnSelect:k.bool,presenter:k.object,inputID:k.string},c('XUIError.react').propTypes);o.defaultProps={viewStyle:'rich'};f.exports=o;},null);
__d("XLtgPostTranslationController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/intl\/see_translation\/",{ftid:{type:"String",required:true},text_size:{type:"Enum",defaultValue:"medium",enumType:1}});},null);
__d('highlight',['Animation','Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){new (c('Animation'))(i).from('background',l||'#fff9d7').to('background',k||'#fff').ease(c('Animation').ease.both).duration(2000).ondone(function(){c('Style').set(i,'background','');j&&j();}).go();}f.exports=h;},null);
__d('LtgPostTranslation',['cx','Arbiter','AsyncRequest','ContentTranslationStrings','DOM','Event','highlight','LoadingIndicator.react','React','ReactDOM','UFIUIEvents','XLtgPostTranslationController'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=c('DOM').create('div',{'class':"_49k0"},l||c('ContentTranslationStrings').NO_TRANSLATION_AVAILABLE);c('DOM').replace(k,m);if(l)c('highlight')(m);}var j={bindListener:function(k,l){c('Event').listen(k,'click',function(event){event.prevent();c('ReactDOM').render(c('React').createElement(c('LoadingIndicator.react'),{size:'small',color:'white'}),k);var m=c('XLtgPostTranslationController').getURIBuilder().setString('ftid',l).getURI();new (c('AsyncRequest'))().setURI(m).setHandler(function(n){var o=n.getPayload();i(k,o&&o.text);c('Arbiter').inform(c('UFIUIEvents').TranslationRendered);}).setErrorHandler(function(){i(k,null);}).send();});}};f.exports=j;},null);
__d('VertexScrollColumn.react',['DOMContainer.react','React','ScrollColumn.react'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=5,l=10;h=babelHelpers.inherits(m,c('React').Component);i=h&&h.prototype;m.prototype.render=function(){'use strict';var n=c('React').createElement(c('ScrollColumn.react'),{topOffset:l,ref:'scrollColumn',zIndex:k},c('React').createElement(c('DOMContainer.react'),null,this.props.content));return n;};function m(){'use strict';h.apply(this,arguments);}m.propTypes={content:j.object.isRequired};f.exports=m;},null);
__d('ScrollColumnRenderer',['DOMContainer.react','React','ReactRenderer','ScrollColumn.react'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j,k){c('ReactRenderer').constructAndRenderComponentAcrossTransitions(c('ScrollColumn.react'),babelHelpers['extends']({children:[c('React').createElement(c('DOMContainer.react'),{key:'content'},i)]},k),j);}};f.exports=h;},null);
__d("QueriesHistory",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$QueriesHistory1=i;this.reset();}h.prototype.getQueries=function(){"use strict";return this.$QueriesHistory2;};h.prototype.getCurrentLength=function(){"use strict";return this.$QueriesHistory3;};h.prototype.add=function(i){"use strict";this.$QueriesHistory2.push(i);this.$QueriesHistory3+=i.length;while(this.$QueriesHistory2.length!==0&&this.$QueriesHistory3>this.$QueriesHistory1){var j=this.$QueriesHistory2.shift();this.$QueriesHistory3-=j.length;}};h.prototype.reset=function(){"use strict";this.$QueriesHistory3=0;this.$QueriesHistory2=[];};f.exports=h;},null);
__d('trim',['invariant'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j,k){!(k.length===1)?h(0):void 0;if(j==='')return j;while(j.charAt(0)===k)j=j.slice(1);while(j.charAt(j.length-1)===k)j=j.slice(0,-1);return j;}f.exports=i;},null);
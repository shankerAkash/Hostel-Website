if (self.CavalryLogger) { CavalryLogger.start_js(["1RIJQ"]); }

__d('BrowseTopFiltersNone',['cx','CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={init:function(){c('CSS').removeClass(document.body,"_4dik");}};f.exports=i;},null);
__d('LeftNavItemClassicDraggableContainer.react',['React','ReactDOM'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){return (c('React').createElement('div',{'data-itemid':this.props.itemID},this.props.children));};k.prototype.componentDidMount=function(){var l=this.props,m=l.section,n=l.itemID,o=l.draggableBound,p=l.ItemDraggableBehavior;if(p&&!this.draggable)this.draggable=new p(c('ReactDOM').findDOMNode(this),m,n,o);};k.prototype.componentWillUnmount=function(){this.draggable.destroy();this.draggable=null;};function k(){h.apply(this,arguments);}k.propTypes={itemID:j.oneOfType([j.string,j.number]).isRequired,section:j.object.isRequired,draggableBound:j.object,ItemDraggableBehavior:j.func};f.exports=k;},null);
__d('LeftNavItem.react',['cx','fbt','Arbiter','BootloadedComponent.react','DOMContainer.react','Image.react','LeftNavItemClassicDraggableContainer.react','Link.react','JSResource','React','UnicodeBidi','XUISpinner.react','ifRequired'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').createElement('span',{className:"_upa"}),m=c('React').createElement(c('XUISpinner.react'),{className:'uiSideNavSpinner'});j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(o){k.constructor.call(this,o);var p=c('ifRequired')('EXHPLeftNavController',function(q){return q.consumeDidHaveClick(o.model.id);});if(p)setTimeout(function(){o.loadDragDropModules();});this.state=babelHelpers['extends']({},this.$LeftNavItem1(o),{hasUsedPopoverMenu:p,showPopoverOnMount:p});}n.prototype.componentWillReceiveProps=function(o){var p=this.$LeftNavItem1(o);if(o.inEditMode)p.showPopoverOnMount=false;this.setState(p);};n.prototype.$LeftNavItem1=function(o){var p=o.model,q=o.section.props.id,r=p.count>0,s=q==='pinnedNav'&&p.sortable,t=q==='bookmarksSeeAllEntSection',u=p.keys.some(function(x){return x===o.selectedKey;}),v=p.keys.some(function(x){return x===o.loadingKey;}),w=s&&o.inEditMode;return {hasCount:r,hasSortableItems:s,inSeeAllSection:t,isSelected:u,isLoading:v,isSorting:w};};n.prototype.render=function(){var o=this.props.model,p=this.state;return (c('React').createElement('li',{className:"clearfix"+(' '+"sideNavItem")+(' '+"stat_elem")+(p.isSelected?' '+"selectedItem":'')+(p.isLoading?' '+"_5afd":''),'data-sortable':p.isSorting?o.sortable:null,id:'navItem_'+o.id},this.$LeftNavItem2(this.$LeftNavItem3())));};n.prototype.$LeftNavItem3=function(){var o=this.props.model,p=this.props.section,q=this.state,r=c('UnicodeBidi').isDirectionRTL(o.name)?'rtl':'ltr',s=c('React').createElement('a',{key:'link','data-testid':'left_nav_item_'+o.link.title,className:"_5afe"+(q.hasSortableItems?' '+"sortableItem":''),'data-gt':o.datagt,title:o.link.title,rel:o.link.rel,href:o.link.href,target:o.link.target,ajaxify:o.link.ajaxify,draggable:'false',onClick:function(){return this.$LeftNavItem4(o);}.bind(this)},this.$LeftNavItem5(o),this.$LeftNavItem6(o.image),c('React').createElement('div',{dir:r,className:"linkWrap"+(q.hasCount?' '+"hasCount":'')+(!q.hasCount?' '+"noCount":'')},c('React').createElement('span',null,o.name),q.inSeeAllSection?this.$LeftNavItem7(o.count):null));return [o.auxcontent?c('React').createElement(c('DOMContainer.react'),{key:'auxpopover'},o.auxcontent):null,this.$LeftNavItem8(o,p,this.props.loadDragDropModules,this.state.hasUsedPopoverMenu),s];};n.prototype.$LeftNavItem8=function(o,p,q,r){if(!o.editmenu)return null;var s=function(){this.setState({hasUsedPopoverMenu:true,showPopoverOnMount:true});q&&q();}.bind(this),t=i._("Edit {Link name} link",[i.param('Link name',o.name)]),u=c('React').createElement(c('Link.react'),{href:'#',title:t,'aria-label':t,onClick:r?null:s,className:"_1wc5"+(' '+"_26tg")+(!o.isProfile?' '+"_1iiv":'')+(o.isProfile?' '+"_1iiw":'')});if(r)u=c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:u,bootloadLoader:c('JSResource')('BookmarkPopoverMenu.react').__setRef('LeftNavItem.react'),module:'BookmarkPopoverMenu.react',navSection:p,model:o,showOnMount:this.state.showPopoverOnMount},u);var v=this.state.inSeeAllSection?'bookmark_edit_button_see_all':'bookmark_edit_button';return (c('React').createElement('div',{className:'buttonWrap','data-testid':v,key:'popover'},c('React').createElement('div',{className:'uiSideNavEditButton'},u)));};n.prototype.$LeftNavItem6=function(o){return (c('React').createElement('span',{className:'imgWrap','data-testid':'bookmark_icon_'+(this.state.inSeeAllSection?'see_all':'left_nav')},c('React').createElement(c('Image.react'),{src:o,draggable:'false',alt:''})));};n.prototype.$LeftNavItem7=function(o){if(!this.state.hasCount)return null;return (c('React').createElement('span',{className:"countValue"+(' '+"_5aff")},o<=20?o:'20+'));};n.prototype.$LeftNavItem5=function(o){var p=this.state;if(p.inSeeAllSection)return null;var q=p.hasCount&&!p.isSorting;if(p.isLoading||q||p.isSorting)return (c('React').createElement('div',{className:'rfloat'},p.isLoading?m:null,q?this.$LeftNavItem7(o.count):null,p.isSorting?l:null));return null;};n.prototype.$LeftNavItem2=function(o){if(!this.state.isSorting)return o;return (c('React').createElement(c('LeftNavItemClassicDraggableContainer.react'),{itemID:this.props.model.id,section:this.props.section,draggableBound:this.props.draggableBound,ItemDraggableBehavior:this.props.ItemDraggableBehavior},o));};n.prototype.$LeftNavItem4=function(o){c('Arbiter').inform('LeftNavController/setItemCount',{item:o,count:0});if(o&&o.type==='type_explore_feed')c('Arbiter').inform('LeftNavController/topicFeedClick',o.id);};f.exports=n;},null);
__d('LeftNavItemPlaceholder.react',['cx','React'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){return (c('React').createElement('li',{className:'sideNavItem stat_elem'},c('React').createElement('a',{className:"_5afe clearfix sortableItem"})));};function k(){i.apply(this,arguments);}f.exports=k;},null);
__d('LeftNavSection.react',['cx','fbt','Arbiter','Bootloader','ContextualDialogArrow','ContextualLayerAutoFlip','Image.react','InlineBlock.react','LeftNavItem.react','LeftNavItemPlaceholder.react','LeftRight.react','Link.react','PopoverMenu.react','React','ReactDOM','ReactXUIMenu','XUIPopoverButton.react','ifRequired'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('ReactXUIMenu').Item,m='more';j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return o=(p=k.constructor).call.apply(p,[this].concat(r)),this.state={inEditMode:false,draggableBound:null,placeholderIdx:-1,seeAll:c('ifRequired')('EXHPLeftNavController',function(t){return t.consumeDidClickSeeAll(this.props.model.id);}.bind(this))},this.$LeftNavSection4=function(t){var u=this.props.model,v=void 0;if(u.title){var w=u.seeallhref&&!u.seeallbelow?c('React').createElement(c('Link.react'),{href:u.seeallhref,'data-gt':t},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('span',{className:'sectionDragHandle'},u.title),u.remainingcount?c('React').createElement(c('InlineBlock.react'),{className:"_3-91"},c('React').createElement('div',{'data-testid':"left_nav_section_MORE",className:"_1cwg _5ol3"},u.seealltext)):null)):c('React').createElement('span',{className:'sectionDragHandle'},u.title);v=c('React').createElement('h4',{className:'navHeader'},w);}else v=null;return v;}.bind(this),this.$LeftNavSection3=function(){return this.props.id==='pinnedNav';}.bind(this),this.$LeftNavSection1=function(t,u,v){var w=u.id,x=u.model,y=u.total;v=v?JSON.parse(v):{};if(w!=='bookmarksSeeAllEntSection'){v.masher=t.toString();v.total=y.toString();}if(t===m){v.nav_section=x.id;v.nav_items_count=x.items?x.items.length:0;v.remaining_count=x.remainingcount;}v=JSON.stringify(v);return v;},this.$LeftNavSection2=function(){this.setState({seeAll:true});}.bind(this),o;}n.prototype.render=function(){var o=this,p=this.props,q=p.ItemDraggableBehavior,r=p.loadingKey,s=p.loadDragDropModules,t=p.model,u=p.selectedKey,v=p.config,w=t.items,x=this.state,y=x.inEditMode,z=x.draggableBound,aa=x.seeAll;if(w.length===0)return null;if(t.id==='createNav'){var ba=w.map(function(ka){return c('React').createElement(l,babelHelpers['extends']({key:ka.id,icon:c('React').createElement(c('Image.react'),{src:ka.image})},ka.link,{title:'','data-gt':this.$LeftNavSection1('item',this.props,ka.datagt)}),ka.name);}.bind(this)),ca=v&&v.CreateAlt1,da=v&&v.CreateAlt2;return c('React').createElement(c('PopoverMenu.react'),{menu:c('React').createElement(c('ReactXUIMenu'),null,ba),layerBehaviors:[c('ContextualLayerAutoFlip'),c('ContextualDialogArrow')]},c('React').createElement(c('XUIPopoverButton.react'),{className:"_3-8w"+(' '+"_ljv")+(ca?' '+"_5xwa":'')+(da?' '+"_5xwb":''),label:t.title,size:ca||da?'large':'medium',use:ca?'confirm':'default'}));}var ea=w.map(function(ka){ka.datagt=this.$LeftNavSection1('item',this.props,ka.datagt);return c('React').createElement(c('LeftNavItem.react'),{key:ka.id,model:ka,section:o,selectedKey:u,loadingKey:r,inEditMode:y,draggableBound:z,loadDragDropModules:s,ItemDraggableBehavior:q});},this);if(this.state.placeholderIdx>=0)ea.splice(this.state.placeholderIdx,0,c('React').createElement(c('LeftNavItemPlaceholder.react'),{key:'itemplaceholder',ref:'placeholder'}));var fa=this.$LeftNavSection1(m,this.props),ga=void 0;if(!aa&&t.seeallhref&&t.seeallbelow&&ea.length>5){ea.splice(8);ga=c('React').createElement(c('Link.react'),{className:"_1msp",onClick:this.$LeftNavSection2,'data-gt':fa},t.seealltext);}var ha="_bui"+(aa?' '+"_48gh":'')+(this.$LeftNavSection3()?' '+"droppableNav":'')+(!this.$LeftNavSection3()?' '+"nonDroppableNav":'')+(!y?' '+"_3-96":''),ia=this.$LeftNavSection3()?c('React').createElement('div',{className:"_3hge _3hgf"},c('React').createElement(c('Link.react'),{className:'navEditDone',ref:'Donelink',onClick:function(){c('Bootloader').loadModules(["LeftNavDragController"],function(){c('Arbiter').inform('LeftNavDragController/toggleEditMode',{section:o});},'LeftNavSection.react');}},i._("Done"))):null,ja=t.welcomebox?t.welcomebox:'left_nav_section_'+(t.title||'FAVORITES');return c('React').createElement('div',{id:this.props.id,className:"homeSideNav",'data-ft':t.dataft,'data-testid':ja,ref:'sectionBody'},this.$LeftNavSection4(fa),c('React').createElement('ul',{className:ha,'data-ft':t.dataft},ea),ga,ia);};n.prototype.componentDidUpdate=function(o,p){if(this.state.inEditMode)c('ReactDOM').findDOMNode(this.refs.Donelink).focus();};f.exports=n;},null);
__d('LeftNavSectionPlaceholder.react',['cx','React'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){var l={height:this.props.height+'px',width:this.props.width+'px'};return (c('React').createElement('div',{className:'homeSideNav',style:l},c('React').createElement('ul',{className:"_bui"})));};function k(){i.apply(this,arguments);}f.exports=k;},null);
__d('LeftNavContainer.react',['invariant','fbt','Arbiter','AsyncRequest','Bootloader','BootloadedComponent.react','JSResource','LeftNavSection.react','LeftNavSectionPlaceholder.react','React','ReactLayeredComponentMixin_DEPRECATED','XFeedNUXSaveSeenStateController','emptyFunction'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();function j(l){l.setState({loadDragDropModules:c('emptyFunction')});c('Bootloader').loadModules(["LeftNavDragController","LeftNavItemDraggableBehavior"],function(m,n){m.subscribe();l.setState({DragController:m,ItemDraggableBehavior:n});},'LeftNavContainer.react');}var k=c('React').createClass({displayName:'LeftNavContainer',mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],getInitialState:function(){return {placeholderIdx:-1,placeholderWidth:0,placeholderHeight:0,loadDragDropModules:function(){return j(this);}.bind(this),DragController:null,ItemDraggableBehavior:null,topicFeedsNuxShown:false};},componentDidMount:function(){var l=this.state.DragController;if(l)l.subscribe();if(this.props.config.ShowTopicFeedNux)this.setState({topicFeedsNuxShown:true},function(){c('Arbiter').subscribe('LeftNavController/topicFeedClick',function(){return this.setState({topicFeedsNuxShown:false});}.bind(this));var m=c('XFeedNUXSaveSeenStateController').getURIBuilder().setString('key','topic_feed_bookmarks').setBool('seen',true).getURI();new (c('AsyncRequest'))(m).setMethod('POST').send();setTimeout(function(){return this.setState({topicFeedsNuxShown:false});}.bind(this),10000);}.bind(this));},componentWillUnmount:function(){var l=this.state.DragController;if(l)l.unsubscribe();},renderLayers:function(){if(!this.props.config.ShowTopicFeedNux||!this.refs)return null;return (c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('span',null),bootloadLoader:c('JSResource')('XUIAmbientNUX.react').__setRef('LeftNavContainer.react'),contextRef:function(){return this.refs.topicFeedsNav;}.bind(this),customwidth:270,hasActionableContext:true,onCloseButtonClick:function(){return this.setState({topicFeedsNuxShown:false});}.bind(this),position:'below',shown:this.state.topicFeedsNuxShown,width:'custom'},i._("See posts from friends and Pages around the topics that interest you.")));},render:function(){var l=this.props.model,m=c('React').createElement(c('LeftNavSection.react'),{selectedKey:l.selectedKey,loadingKey:l.loadingKey,model:l.userSection,key:'userNav',id:'userNav',ref:'userNav',total:l.total}),n=c('React').createElement(c('LeftNavSection.react'),{selectedKey:l.selectedKey,loadingKey:l.loadingKey,model:l.pinnedSection,key:'pinnedNav',id:'pinnedNav',ref:'pinnedNav',loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,total:l.total}),o=[],p=[],q=void 0;l.sections.forEach(function(s){if(this.props.config.Hide&&this.props.config.Hide[s.id]){p.push(s);}else o.push(s);}.bind(this));if(p.length>0)q=c('React').createElement(c('BootloadedComponent.react'),{bootloadPlaceholder:c('React').createElement('span',null),bootloadLoader:c('JSResource')('LeftNavSeeMoreContainer.react').__setRef('LeftNavContainer.react'),model:l,config:this.props.config,sections:p});var r=o.map(function(s){return (c('React').createElement(c('LeftNavSection.react'),{selectedKey:l.selectedKey,loadingKey:l.loadingKey,model:s,key:s.id,id:s.id,loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,ref:s.id==='topicFeedsNav'?'topicFeedsNav':null,total:l.total,config:this.props.config}));}.bind(this));if(this.state.placeholderIdx>-1)r.splice(this.state.placeholderIdx,0,c('React').createElement(c('LeftNavSectionPlaceholder.react'),{key:'placeholder',width:this.state.placeholderWidth,height:this.state.placeholderHeight}));return (c('React').createElement('div',null,m,n,r,q));},getPinnedSection:function(){var l=this.refs.pinnedNav;!l?h(0):void 0;return l;}});f.exports=k;},null);
__d('LeftNavModel',['URI'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=void 0,i=null,j={init:function(k){h=k;},initAdditionalItems:function(k){i=k.items;},setSelectedKey:function(k){h.loadingKey=null;h.selectedKey=k||h.defaultKey;},setLoadingKey:function(k){h.loadingKey=k;},setItemCount:function(k,l){k.count=l||0;},updateItemCounts:function(k,l){var m=false;l.forEach(function(n){var o=void 0,p=j.findItemByKey(n.key);if(p){o=p.count;if(n.count!==undefined){p.count=n.count;}else if(n.increment!==undefined)p.count+=n.increment;m=m||o!=n.count;}});return m;},findItemByKey:function(k){return j.findItem(function(l){return l.keys.some(function(m){return m===k;});});},findItem:function(k){var l=void 0;if(h.pinnedSection){l=h.pinnedSection.items.find(k);if(l)return l;}if(h.pinnedSection.default_count>0){l=j._findItemInFlyout(k);if(l)return l;}for(var m=0;m<h.sections.length;m++){l=h.sections[m].items.find(k);if(l)return l;}if(i){l=i.find(k);if(l)return l;}return null;},findItemByURI:function(k){var l=k.getQueryData().sk;if(l){return j.findItemByKey(l);}else if(j._isHomePath(k)){return j.findItemByKey(h.defaultKey);}else return j.findItem(function(m){if(m.link&&new (c('URI'))(m.link.href).qualify().getSubdomain()!==k.getSubdomain())return false;return m.path&&m.path.some(function(n){if(typeof n==='object'&&n.regex)return k.getPath().match(n.regex);return n===k.getPath();});});},_isHomePath:function(k){var l=c('URI').getRequestURI();return (k.getDomain()===l.getDomain()&&(k.getPath()==='/'||k.getPath()==='/home.php'));},_findItemInFlyout:function(k){var l=void 0;h.pinnedSection.items.some(function(m){if(m&&m.flyout_items){l=m.flyout_items.find(k);if(l)return true;}return false;});return l;}};f.exports=j;},null);
__d("XFeedTopicRefreshLoadTimeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/topic\/refresh\/loadtime\/",{});},null);
__d('LeftNavController',['cx','Arbiter','AsyncRequest','Bootloader','ChannelConstants','LeftNavConfig','LeftNavContainer.react','LeftNavModel','NavigationMessage','PageTransitionPriorities','React','ReactDOM','Run','SubscriptionsHandler','XFeedTopicRefreshLoadTimeController','CSS'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=[],j=void 0,k=void 0,l=void 0,m=void 0,n={init:function(u,v){k=u;c('LeftNavModel').init(v);var w=function(y){c('Bootloader').loadModules(["LeftNavActions"],function(z){z.initModel(v);y(z);o();},'LeftNavController');};l=new (c('SubscriptionsHandler'))();l.addSubscriptions(c('Arbiter').subscribe('LeftNavController/toggleFavorite',function(y,z){return w(function(aa){return (aa.toggleFavorite(y,z,i));});}),c('Arbiter').subscribe('LeftNavController/updatePinnedSection',function(y,z){var aa=z.idOrder;return w(function(ba){return (ba.updatePinnedSection(y,aa));});}),c('Arbiter').subscribe('LeftNavController/setItemCount',function(y,z){var aa=z.item,ba=z.count;c('LeftNavModel').setItemCount(aa,ba);o();}),c('Arbiter').subscribe('LeftNavController/topicFeedClick',function(y,z){new (c('AsyncRequest'))(c('XFeedTopicRefreshLoadTimeController').getURIBuilder().getURI()).setData({topic_id:z}).setMethod('POST').send();}),c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('nav_update_counts'),function(y,z){var aa=z.obj.items,ba=c('LeftNavModel').updateItemCounts(y,aa);if(ba)o();}),c('Arbiter').subscribeOnce('AsyncLayout/initialized',function(){return m=true;}),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_ITEM_REMOVED,function(y,z){return w(function(aa){return (aa.removeItemByKey(y,z));});}),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_COMPLETED,function(){c('LeftNavModel').setSelectedKey(v.loadingKey);o();}),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_FAILED,function(){c('LeftNavModel').setLoadingKey(null);o();}),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_COUNT_UPDATE,function(y,z){var aa=c('LeftNavModel').findItemByKey(z&&z.key);if(aa){var ba=aa.count,ca=z.count||0;c('LeftNavModel').setItemCount(aa,z.hide?0:ca);if(ca!==ba||z.hide&&ba>0)o();}}),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_SELECT,function(y,z){var aa=z.sk;if(z.asLoading){c('LeftNavModel').setLoadingKey(aa);}else c('LeftNavModel').setSelectedKey(aa);}),c('Arbiter').subscribe('LeftNavDragController/toggleEditMode',function(){return c('CSS').toggleClass(k,"_2ryg");}),c('Arbiter').subscribe('LeftNavController/updateFoldPinnedSection',function(y,z){var aa=z.idOrder;return w(function(ba){return (ba.updateFoldPinnedSection(y,aa));});}),c('Arbiter').subscribe('UnfollowUser',function(y,z){var aa=z.profile_id;return w(function(ba){return (ba.removeItemByKey(y,'profile_'+aa));});}));var x=c('LeftNavModel').findItemByKey(v.selectedKey);if(x)x.count=0;j=c('ReactDOM').render(c('React').createElement(c('LeftNavContainer.react'),{model:v,config:c('LeftNavConfig')}),k);c('Run').onLeave(this.uninstall.bind(this));},uninstall:function(){m=false;l.release();if(j.componentWillUnmount)j.componentWillUnmount();},initAdditionalItems:function(u){c('LeftNavModel').initAdditionalItems(u);},initPageTransitions:function(u){u.registerHandler(function(v){return m&&p(v);},c('PageTransitionPriorities').LEFT_NAV);},mountSeeAllPayload:function(u){i.push(u);}};function o(){j.forceUpdate();}function p(u){var v=c('LeftNavModel').findItemByURI(u);return v&&v.endpoint&&q(v,u);}function q(u,v){c('LeftNavModel').setLoadingKey(u.keys[0]);c('LeftNavModel').setItemCount(u,0);o();s(u.endpoint,babelHelpers['extends']({},r(u,v),v.getQueryData()));return true;}function r(u,v){var w={};w.sidecol=true;w.path=v.getPath();var x=t(u.keys);x=x.text?x.text:x.numeric;w.sk=x;w.key=x;return w;}function s(u,v){v.endpoint=u;c('Arbiter').inform(c('NavigationMessage').NAVIGATION_BEGIN,{useAjaxPipe:true,params:v});}function t(u){var v=/^(app|group|fl)_/,w={};for(var x=0;x<u.length;x++){var y=v.test(u[x]);if(y&&!w.numeric){w.numeric=u[x];}else if(!y&&!w.text)w.text=u[x];if(w.numeric&&w.text)break;}return w;}f.exports=n;},null);
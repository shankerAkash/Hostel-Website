if (self.CavalryLogger) { CavalryLogger.start_js(["9wuIx"]); }

__d('ViewportTrackingHelper',['Event','Vector','getViewportDimensions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getScrollListener:function(i){return c('Event').listen(window,'scroll',i);},looseIsVisible:function(i,j){if(!i.x&&!i.y&&!i.width&&!i.height)return false;var k=c('Vector').getScrollPosition().y,l=c('getViewportDimensions')().height,m=l+j-k;return i.y<m;},isVisible:function(i,j){if(!i.x&&!i.y&&!i.width&&!i.height)return false;var k=c('getViewportDimensions')().height,l=Math.max(i.y,0),m=Math.min(i.y+i.height,k),n=Math.min(i.height,j);return m-l>=n;},isDescendantOf:function(i,j){if(i===j)return i;while(i&&i.parentNode){if(i.parentNode===j)return i;i=i.parentNode;}return false;}};f.exports=h;},null);
__d('ViewportTracking',['cx','Arbiter','AsyncSignal','Banzai','BanzaiScuba','CSS','CurrentUser','DOM','DOMDimensions','Event','LitestandMessages','NavigationMessage','Run','SubscriptionsHandler','UserActivity','Vector','ViewportTrackingHelper','ViewportTrackingHooks','clickRefAction','collectDataAttributes','debounce','getElementPosition','getViewportDimensions','throttle'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=97,j=51,k='vpv',l='/feed/feed_tracking/vpv_waterfall_logging',m=3,n=2,o=1,p=0,q=1,r=2,s=3,t=4;function u(){'use strict';}u.prototype.init=function(v){'use strict';this.useBanzai=true;this.vpvDebug=!!v.vpv_debug;this.vpvdDebug=!!v.vpvd_debug;this.vpvdAnalysis=!!v.vpvd_analysis;this.trackingHooks=!!v.tracking_hooks;this.useWaterfallLogging=!!v.waterfall_logging;this.loggedStoryIDs={};this.readStoryIDs={};this.annotatedStoryIDs={};this.minSizeToBeVisible=200;this.minFractionToBeVisibleForTimetracking=.5;this.scrollThrottlingInterval=100;this.mouseThrottlingInterval=100;this.keyboardThrottlingInterval=100;this.minTimeToReportImmediately=500;this.discardVPVDIntervalThreshold=90000;this.active_state_duration=1000;this.height_diff_to_change_state=25;this.focused_state_duration=3500;this.invalidateAllStoriesCache();this.cachedViewportHeight=c('getViewportDimensions')().height;this.isTimetrackingEnabled=0;this.activeStories={};this.userInactiveLock=false;this.userActivityPollerTimeoutID=-1;this._headLoadStoryCount=0;this.getDataFromConfig(v);if(this.isTimetrackingEnabled){this.lastMouseX=-1;this.lastMouseY=-1;this.lastStreamY=-1;this.latestStreamYChangedTimeStamp=-1;this.userFocus=r;this.latestUserFocus=r;this.latestUserActivity='init';this.focusedStory=null;this.latestFocusedStory=null;this.latestActiveStory=null;this.totalVPVDuration={};}this.isLoose=!!v.is_loose;this.maxScrollPosition=0;if(v.tracking_duration_config){this.scrollThrottlingInterval=v.tracking_duration_config.scroll_throttling_interval;this.mouseThrottlingInterval=v.tracking_duration_config.mouse_throttling_interval;this.keyboardThrottlingInterval=v.tracking_duration_config.keyboard_throttling_interval;this.userActivityPollingInterval=v.tracking_duration_config.user_activity_polling_interval;this.timeToBeConsideredInactive=v.tracking_duration_config.time_to_be_considered_inactive;this.minFractionToBeVisibleForTimetracking=v.tracking_duration_config.min_fraction_to_be_visible;this.minTimeToReportImmediately=v.tracking_duration_config.min_time_to_report_immediately;this.active_state_duration=v.tracking_duration_config.active_state_duration;this.height_diff_to_change_state=v.tracking_duration_config.story_height_diff_to_change_state;this.focused_state_duration=v.tracking_duration_config.focused_state_duration;this.discardVPVDIntervalThreshold=v.tracking_duration_config.discard_vpvd_interval_threshold;}var w,x=c('debounce')(this.fireTimer,this.getTimeout(),this);if(this.isLoose){this.minSizeToBeVisible=0;w=c('throttle')(function(){this.maxScrollPosition=Math.max(this.maxScrollPosition,c('Vector').getScrollPosition().y);x();}.bind(this));}else w=x;this.initialStories=this.getStoriesInView();this.initialStoriesLogged=false;if(this.annotatedVPVLogging)this.initialStories.forEach(this.logAnnotatedVPV,this);if(this.useWaterfallLogging)this.getStoriesInView().forEach(function(ba){this.waterfallLogStep(ba,'100_all_stories_in_view_ignore_height',true);},this);this.subscriptions=new (c('SubscriptionsHandler'))();this.subscriptions.addSubscriptions(this._getScrollListener(w),c('Event').listen(window,'resize',function(){this.invalidateVisibleStoriesCache();this.cachedViewportHeight=c('getViewportDimensions')().height;w();}.bind(this)),c('Event').listen(window,'focus',function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,'window_focus');}.bind(this)),c('Event').listen(window,'blur',function(){if(this.isTimetrackingEnabled)this.updateTimeTrackingData(true,'window_blur');}.bind(this)),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.cleanup.bind(this)),c('Arbiter').subscribe('Stream/totalHeadLoadedStories',function(ba,ca){this._headLoadStoryCount=ca.count;}.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,function(){if(!this.initialStoriesLogged){var ba=this.getStoriesInView();ba.forEach(this.logAnnotatedVPV,this);}else w();if(this.isTimetrackingEnabled)this.updateTimeTrackingData(false,'stories_inserted');}.bind(this)));if(this.isTimetrackingEnabled){this.updateTimeTrackingData(false,'init');var y=c('throttle')(function(event){this.invalidateVisibleStoriesCache();this.handleScroll(event);}.bind(this),this.scrollThrottlingInterval),z=c('throttle')(function(event){this.handleKeyboard(event);}.bind(this),this.keyboardThrottlingInterval),aa=c('throttle')(function(event){this.handleMouse(event);}.bind(this),this.mouseThrottlingInterval);this.subscriptions.addSubscriptions(c('Event').listen(window,'scroll',y),c('Event').listen(document.documentElement,'DOMMouseScroll',y),c('Event').listen(document.documentElement,'mousewheel',y));this.subscriptions.addSubscriptions(c('Event').listen(document.documentElement,'keydown',z));this.subscriptions.addSubscriptions(c('Event').listen(document.documentElement,'mouseover',aa),c('Event').listen(document.documentElement,'mousemove',aa));this.subscriptions.addSubscriptions(c('Arbiter').subscribe('Event/stop',function(ba,ca){this.handleMouse(ca.event);}.bind(this)));this.subscriptions.addSubscriptions(c('Event').listen(document.documentElement,'click',function(event){this.handleMouse(event);}.bind(this)),c('Arbiter').subscribe('PhotoSnowlift.OPEN',function(){this.userFocus=s;this.handleLayers();}.bind(this)),c('Arbiter').subscribe('PhotoSnowlift.CLOSE',function(){this.userFocus=q;this.focusedStory=null;this.updateTimeTrackingData(false,'snowlift_close');}.bind(this)));this._userActivityPoller();}c('Run').onLeave(this.cleanup.bind(this));c('Run').onUnload(this.cleanup.bind(this));};u.prototype._getScrollListener=function(v){'use strict';return c('Event').listen(window,'scroll',v);};u.prototype.cleanup=function(){'use strict';if(this.subscriptions){this.subscriptions.release();this.subscriptions=null;}if(this.isTimetrackingEnabled){clearTimeout(this.userActivityPollerTimeoutID);this.updateTimeTrackingData(true,'cleanup');}if(this.annotatedVPVLogging){var v=this.getStoriesInView();v.forEach(this.logAnnotatedVPV,this);}this.initialStories=[];this._headLoadStoryCount=0;};u.prototype.fireTimer=function(){var v,w=this;'use strict';if(this.useWaterfallLogging){var x=this.getStoriesInViewIgnoreHeight();x.forEach(function(y){this.waterfallLogStep(y,'100_all_stories_in_view_ignore_height');},this);}if(!this.initialStoriesLogged){this.initialStories.forEach(this.markStoryRead,this);this.initialStoriesLogged=true;}this.storiesInView=this.getStoriesInView();this.storiesInView.forEach(this.markStoryRead,this);if(this.trackingHooks)(function(){var y=void 0;if(w.isTimetrackingEnabled){y=w.getVisibleStoriesFromCache();}else y=w.getAllStoriesInView();var z=Object.keys(y).map(function(aa){return y[aa].story;});c('ViewportTrackingHooks').updateVisibleViewportObjects(z);})();};u.prototype.getSessionID=function(){'use strict';return null;};u.prototype._userActivityPoller=function(){'use strict';if(!this.userInactiveLock&&!c('UserActivity').isActive(this.timeToBeConsideredInactive)){this.userInactiveLock=true;this.userFocus=r;this.updateTimeTrackingData(false,'user_activity_inactive');c('UserActivity').subscribeOnce(function(){this.userFocus=q;this.updateTimeTrackingData(false,'user_activity_active');this.userInactiveLock=false;}.bind(this));}this.userActivityPollerTimeoutID=setTimeout(this._userActivityPoller.bind(this),this.userActivityPollingInterval);};u.prototype.getQueryID=function(v){'use strict';return -1;};u.prototype.getFBFeedLocations=function(v){'use strict';return -1;};u.prototype.getFBFeedInsertionPosition=function(v){'use strict';return -1;};u.prototype.createVPVDTimer=function(v){'use strict';var w=document.createElement("Label");w.setAttribute("for",v);w.setAttribute("class",'vpvd_debug_timer');return w;};u.prototype.updateVPVDTimer=function(v){'use strict';var w=this.activeStories[v].story,x=c('DOM').scry(w,'.vpvd_debug_timer');if(!x.length){x=[this.createVPVDTimer(w),this.createVPVDTimer(w)];var y=c('DOM').scry(w,'.UFIRow');if(y.length&&y[y.length-1].clientWidth>0){y[y.length-1].appendChild(x[0]);}else w.appendChild(x[0]);w.insertBefore(x[1],w.firstChild);}var z=this.totalVPVDuration[v],aa=Math.floor(z/1000)+'.'+Math.floor(z%1000/100);c('DOM').setContent(x[0],aa);c('DOM').setContent(x[1],aa);};u.prototype.updateVPVDTimers=function(){'use strict';for(var v in this.activeStories)if(this.activeStories.hasOwnProperty(v))this.updateVPVDTimer(v);};u.prototype.logVpvdAnalysis=function(v,w,x,y,z,aa){'use strict';var ba=new (c('BanzaiScuba'))('vpv_duration');ba.addDenorm('qid',this.getQueryID(this.activeStories[v].story));ba.addDenorm('uid',c('CurrentUser').getID());ba.addDenorm('vsid',v);ba.addInteger('time',Math.round(Date.now()/1000));ba.addInteger('duration',y);ba.addInteger('total_duration',z);ba.addNormal('story_state',this.activeStories[v].state);ba.addNormal('is_active_state',x);ba.addNormal('num_visible_stories',this.numVisibleStories);ba.addInteger('story_height',this.activeStories[v].story_height);ba.addInteger('story_visible_height',this.activeStories[v].height);ba.addInteger('state_visible_height',aa);ba.addInteger('total_visible_height',this.totalVisibleHeight);ba.addInteger('total_height',this.totalHeight);ba.addNormal('user_focus',this.latestUserFocus);ba.addNormal('next_user_focus',this.userFocus);ba.addInteger('vpvd',w);ba.addInteger('accumulated_vpvd',this.activeStories[v].vpvd);ba.addNormal('user_activity',this.latestUserActivity);ba.addNormal('next_user_activity',this.userActivity);ba.addInteger('story_position_y',this.activeStories[v].y);ba.addInteger('feed_insertion_position',this.getFBFeedInsertionPosition(this.activeStories[v].story));ba.addNormal('visible_position',this.activeStories[v].visible_position);ba.addNormal('is_focused_story',this.activeStories[v].is_focused);ba.post();};u.prototype.shouldDiscardStory=function(v){'use strict';return this.activeStories[v].height!=this.activeStories[v].story_height&&this.activeStories[v].height<this.totalHeight/2;};u.prototype.calculateTotalHeight=function(){'use strict';this.totalHeight=0;for(var v in this.activeStories)if(this.activeStories.hasOwnProperty(v))this.totalHeight+=this.activeStories[v].height;};u.prototype.updateVPVDurations=function(v){'use strict';if(this.latestUserFocus===r||v-this.latestTimeTrackingTimestamp>this.discardVPVDIntervalThreshold)return;var w={1:0,2:0,3:0},x=v-this.latestTimeTrackingTimestamp>=this.focused_state_duration;this.totalVisibleHeight=0;for(var y in this.activeStories)if(this.activeStories.hasOwnProperty(y))if(!(this.latestUserFocus===q&&x&&this.shouldDiscardStory(y))){w[this.activeStories[y].state]+=this.activeStories[y].height;this.totalVisibleHeight+=this.activeStories[y].height;}var z=0,aa=v-this.latestTimeTrackingTimestamp;if(this.latestUserFocus===q){aa=w[m]>0?this.focused_state_duration:this.active_state_duration;aa=Math.min(aa,v-this.latestTimeTrackingTimestamp);z=v-this.latestTimeTrackingTimestamp-aa;}var ba=0,ca=m;for(var da=m;da>=o;da--)if(w[da]>0){ba=w[da];ca=da;break;}var ea=w[m]+w[n]+w[o],fa=0;for(y in this.activeStories)if(this.activeStories.hasOwnProperty(y)){if(this.latestUserFocus===q&&x&&this.shouldDiscardStory(y))continue;if(ba>0&&this.activeStories[y].state>=ca){fa=aa*(this.activeStories[y].height/ba);if(this.vpvdAnalysis&&aa>0)this.logVpvdAnalysis(y,fa,true,aa,aa+z,ba);this.activeStories[y].vpvd+=fa;this.totalVPVDuration[y]+=fa;}if(ea>0){fa=z*(this.activeStories[y].height/ea);if(this.vpvdAnalysis&&z>0)this.logVpvdAnalysis(y,fa,false,z,aa+z,ea);this.activeStories[y].vpvd+=fa;this.totalVPVDuration[y]+=fa;}}};u.prototype.updateActiveStory=function(v,w,x,y){'use strict';this.activeStories[v].state=w;this.activeStories[v].ts=x;this.activeStories[v].height_snapshot=y[v].height;this.activeStories[v].is_focused=this.focusedStory===y[v].story;this.activeStories[v].story_height=y[v].story_height;if(this.vpvdAnalysis){this.activeStories[v].visible_position=y[v].visible_position;this.activeStories[v].y=y[v].y;}};u.prototype.updateActiveStories=function(v,w){'use strict';for(var x in v)if(v.hasOwnProperty(x))if(x in this.activeStories){this.activeStories[x].height=v[x].height;var y=v[x].height-this.activeStories[x].height_snapshot;if(this.focusedStory===v[x].story){this.updateActiveStory(x,m,w,v);}else if(y<=-this.height_diff_to_change_state){this.updateActiveStory(x,this.shouldDiscardStory(x)?p:o,w,v);}else if(y>=this.height_diff_to_change_state||this.activeStories[x].is_focused||this.activeStories[x].height===this.activeStories[x].story_height)this.updateActiveStory(x,n,w,v);}else{this.activeStories[x]={evp_ts:w,story:v[x].story,height:v[x].height,vpvd:0};if(!this.totalVPVDuration[x])this.totalVPVDuration[x]=0;this.updateActiveStory(x,n,w,v);}};u.prototype.recordVPVDurations=function(v,w){'use strict';for(var x in this.activeStories)if(this.activeStories.hasOwnProperty(x))if(w||!(x in v)){if(this.activeStories[x].vpvd>this.focused_state_duration||this.activeStories[x].vpvd===this.totalVPVDuration[x])this.recordTimeStoryWasInView(this.activeStories[x]);delete this.activeStories[x];}};u.prototype.updateTimeTrackingData=function(v,w){'use strict';this.userActivity=w;if(!this.activeStories)this.activeStories={};var x=Date.now();if(!this.latestTimeTrackingTimestamp)this.latestTimeTrackingTimestamp=x;var y=this.getVisibleStoriesFromCache();this.calculateTotalHeight();this.updateVPVDurations(x);this.updateActiveStories(y,x);if(this.vpvdDebug)this.updateVPVDTimers();this.recordVPVDurations(y,v);if(v){this.latestTimeTrackingTimestamp=0;}else this.latestTimeTrackingTimestamp=x;this.latestUserActivity=this.userActivity;this.latestUserFocus=this.userFocus;if(this.focusedStory)this.latestActiveStory=this.focusedStory;this.latestFocusedStory=this.focusedStory;this.focusedStory=null;};u.prototype.needsToUpdateTimeTrackingData=function(){'use strict';return !(this.latestUserFocus===this.userFocus&&(this.userFocus===r||this.userFocus===q&&!this.latestFocusedStory&&!this.focusedStory));};u.prototype.getfocusedStory=function(v){'use strict';var w=this.getVisibleStoriesFromCache();for(var x in w)if(w.hasOwnProperty(x))if(c('ViewportTrackingHelper').isDescendantOf(v,w[x].story))return w[x].story;return null;};u.prototype.handleLayers=function(){'use strict';if(this.userFocus===s||this.userFocus===t){this.focusedStory=this.latestActiveStory;this.updateTimeTrackingData(false,'media_layer');return true;}return false;};u.prototype.didInteractWithStream=function(v){'use strict';return c('ViewportTrackingHelper').isDescendantOf(v,this.getStream())||c('ViewportTrackingHelper').isDescendantOf(this.getStream(),v);};u.prototype.handleScroll=function(event){'use strict';if(this.handleLayers())return;var v=Date.now(),w=c('getElementPosition')(this.getStream()).y;if(w!=this.lastStreamY||v-this.latestStreamYChangedTimeStamp<2.5*this.scrollThrottlingInterval||this.didInteractWithStream(event.target)){this.latestStreamYChangedTimeStamp=v;this.userFocus=q;}else this.userFocus=r;this.lastStreamY=w;if(this.userFocus===q||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,'scroll');};u.prototype.handleKeyboard=function(event){'use strict';if(this.handleLayers())return;if(this.didInteractWithStream(event.target)){this.userFocus=q;this.focusedStory=this.getfocusedStory(event.target);}else if(c('CSS').hasClass(event.target,'shareInput')){this.userFocus=q;this.focusedStory=this.latestActiveStory;}else this.userFocus=r;if(this.userFocus===q||this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,'keyboard');};u.prototype.handleMouse=function(event){'use strict';if(this.handleLayers())return;if(event.type!='click'&&event.clientX===this.lastMouseX&&event.clientY===this.lastMouseY)return;if(event.type==='click')this.invalidateVisibleStoriesCache();if(this.didInteractWithStream(event.target)){this.userFocus=q;this.focusedStory=this.getfocusedStory(event.target);}else this.userFocus=r;this.lastMouseX=event.clientX;this.lastMouseY=event.clientY;if(this.needsToUpdateTimeTrackingData())this.updateTimeTrackingData(false,event.type);};u.prototype.getStoriesInView=function(){'use strict';var v=this.getAllStories(),w=[],x=false;for(var y=0;y<v.length;y++){var z=v[y],aa=this.getStoryID(z);if(this.hasBeenVisible(aa))continue;if(this.isVisible(z)){if(z.getAttribute('data-insertion-position')===null)z.setAttribute('data-insertion-position',y-this._headLoadStoryCount);w.push(z);x=true;}else if(x)break;}return w;};u.prototype.getStoriesInViewIgnoreHeight=function(){'use strict';var v=this.getAllStories(),w=false,x=[];for(var y=0;y<v.length;y++){var z=v[y];if(this.isVisible(z,false,0)){x.push(z);w=true;}else if(w)break;}return x;};u.prototype.getAllStoriesFromCache=function(){'use strict';if(this.cachedAllStories===null)this.cachedAllStories=this.getAllStories();return this.cachedAllStories;};u.prototype.invalidateAllStoriesCache=function(){'use strict';this.cachedAllStories=null;this.invalidateVisibleStoriesCache();};u.prototype.getVisibleStoriesFromCache=function(){'use strict';if(this.cachedVisibleStories===null)this.cachedVisibleStories=this.getAllStoriesInView();return this.cachedVisibleStories;};u.prototype.invalidateVisibleStoriesCache=function(){'use strict';this.cachedVisibleStories=null;};u.prototype.getAllStoriesInView=function(){'use strict';var v=this.getAllStoriesFromCache(),w={},x=false,y=0,z=v.length,aa=1,ba=v.length;if(this._indexOfLastVisibleStoryOnPreviousPass>z/2){y=z-1;z=-1;aa=-aa;}for(var ca=y;ca!=z;ca+=aa){var da=v[ca],ea=this.getHeightIfVisible(da,false,Math.min(this.minSizeToBeVisible,this.minFractionToBeVisibleForTimetracking*c('DOMDimensions').getElementDimensions(da).height));if(ea>0||da===this.focusedStory){if(da.getAttribute('data-insertion-position')===null)da.setAttribute('data-insertion-position',ca-this._headLoadStoryCount);var fa=this.getStoryID(da);w[fa]={story:da,height:ea,story_height:c('DOMDimensions').getElementDimensions(da).height};x=true;if(this.vpvdAnalysis){w[fa].y=c('getElementPosition')(da).y;w[fa].visible_position=ca;ba=Math.min(ba,ca);}}else if(x){this._indexOfLastVisibleStoryOnPreviousPass=ca-aa;break;}}if(this.vpvdAnalysis){this.numVisibleStories=0;for(fa in w)if(w.hasOwnProperty(fa)){w[fa].visible_position-=ba;this.numVisibleStories++;}}return w;};u.prototype.getTimetrackingDataToLog=function(v){'use strict';var w={evt:i,vpvd_start_timestamp:v.evp_ts,vpvd_time_delta:Math.round(v.vpvd),story_height:c('DOMDimensions').getElementDimensions(v.story).height,viewport_height:this.cachedViewportHeight};return {ft:w};};u.prototype.recordTimeStoryWasInView=function(v){'use strict';if(this.isTimetrackingEnabled&&v.vpvd>0){var w=this.getTimetrackingDataToLog(v),x=c('collectDataAttributes')(v.story,['ft']);Object.assign(w.ft,x.ft);var y=!!x.ft.ei&&w.ft.vpvd_time_delta>this.minTimeToReportImmediately;delete w.ei;this.sendDataToLog(v.story,w,y);}};u.prototype.hasBeenVisible=function(v){'use strict';return v in this.readStoryIDs;};u.prototype.isVisible=function(v,w,x){'use strict';return this.getHeightIfVisible(v,w,x)>0;};u.prototype.getHeightIfVisible=function(v,w,x){'use strict';if(w===undefined)w=this.isLoose;if(x===undefined)x=this.minSizeToBeVisible;var y=c('Vector').getScrollPosition().y,z=c('getViewportDimensions')().height,aa=c('getElementPosition')(v),ba=c('DOMDimensions').getElementDimensions(v),ca=z+this.maxScrollPosition-y;if(!aa.x&&!aa.y&&!ba.x&&!ba.y)return false;if(w&&aa.y<ca)return true;var da=Math.max(aa.y,0),ea=Math.min(aa.y+ba.height,z),fa=Math.min(ba.height,x);return ea-da>=fa?ea-da:0;};u.prototype.getHeightInViewport=function(v){'use strict';var w=c('getViewportDimensions')().height,x=c('getElementPosition')(v),y=c('DOMDimensions').getElementDimensions(v);if(!x.x&&!x.y&&!y.x&&!y.y)return false;var z=Math.max(x.y,0),aa=Math.min(x.y+y.height,w);return aa-z;};u.prototype.sendDataToLog=function(v,w,x){'use strict';if(this.useBanzai){var y={};if(x)y.delay=3000;var z=this.getSessionID();if(z)w.ft.session_id=z;if(this.useWaterfallLogging&&w.ft.evt==j){w.ft.should_waterfall_logging=1;w.ft['interface']='www';var aa=!this.initialStoriesLogged;this.waterfallLogStep(v,'200_sent_to_banzai',aa);}c('Banzai').post('feed_tracking',w,y);}else c('clickRefAction')(k,v,null,'FORCE',w);};u.prototype.waterfallLogStep=function(v,w,x){'use strict';var y=this.getStoryID(v);if(this.loggedStoryIDs[w]&&this.loggedStoryIDs[w][y])return;var z=this.getWaterfallData(v,w,x);if(!z.qid)return;new (c('AsyncSignal'))(l,z).send();if(!this.loggedStoryIDs[w])this.loggedStoryIDs[w]={};this.loggedStoryIDs[w][y]=true;};u.prototype.getWaterfallData=function(v,w,x){'use strict';var y=this._getDataToLogImpl(v),z=c('collectDataAttributes')(v,['ft']);Object.assign(y.ft,z.ft);var aa=y.ft;aa.height_in_viewport=this.getHeightInViewport(v);aa.step=w;aa.is_initial_story=x?1:0;aa['interface']='www';return aa;};u.prototype.markStoryRead=function(v){'use strict';var w=this.getStoryID(v);if(!w||this.hasBeenVisible(w))return;this.readStoryIDs[w]=true;this.annotatedStoryIDs[w]=true;var x=this._getDataToLogImpl(v),y=c('collectDataAttributes')(v,['ft']);Object.assign(x.ft,y.ft);delete x.ei;this.sendDataToLog(v,x,false);c('CSS').addClass(v,"_x72");if(this.vpvDebug)c('CSS').addClass(v,"_5m7s");};u.prototype.logAnnotatedVPV=function(v){'use strict';var w=this.getStoryID(v);if(!w||w in this.annotatedStoryIDs)return;this.annotatedStoryIDs[w]=true;var x=this._getDataToLogImpl(v),y=c('collectDataAttributes')(v,['ft']);Object.assign(x.ft,y.ft);delete x.ei;x.ft.vpv_ft_only=1;this.sendDataToLog(v,x,false);};u.prototype._getDataToLogImpl=function(v){'use strict';var w=this.getDataToLog(v);if(!w.ft)w.ft={};return w;};f.exports=u;},null);
__d('collectSubtreeData',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k,l,m,n){if(j.offsetWidth===0&&j.offsetHeight===0)return n;var o={};if(j.getAttribute)for(s=0;s<k.length;s++){u=k[s];var p=j.getAttribute(l[u]);if(p){o[u]={};var q=JSON.parse(p);for(var r in m)if(q[r]!==undefined){o[u][r]=true;if(n[u]===undefined)n[u]={};if(n[u][r]===undefined)n[u][r]=[];if(m[r].length>0)n[u][r].push(m[r]);n[u][r].push('('+q[r]);}}}for(var s=0;s<j.childNodes.length;s++){var t=j.childNodes[s];h(t,k,l,m,n);}for(var u in o)for(var v in o[u]){var w=n[u][v][n[u][v].length-1];if(w.length>0&&w.charAt(0)=='('){n[u][v][n[u][v].length-1]=w.substr(1);}else n[u][v].push(')');}return n;}function i(j,k){var l={};for(var m=0;m<k.length;++m)l[k[m]]='data-'+k[m];var n={tn:"","tn-debug":","},o={};h(j,k,l,n,o);for(var p in o)for(var q in o[p])o[p][q]=o[p][q].join('');return o;}f.exports=i;},null);
__d("getFullScreenElement",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;}f.exports=h;},null);
__d('recordTNTreeData',['collectSubtreeData'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k={},l=c('collectSubtreeData')(i,['ft']);for(var m in l.ft){k[m+'_tree']=l.ft[m];if(m==='tn-debug')i.setAttribute('tn-debug_subtree',l.ft[m]);}k.evt_value=i.offsetHeight;if(j)k.offset=Math.max(0,i.offsetTop-j.offsetTop);return k;}f.exports=h;},null);
__d('StreamViewportTracking',['DataAttributeUtils','DOM','DOMDimensions','ViewportTracking','ge','recordTNTreeData'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=51;h=babelHelpers.inherits(k,c('ViewportTracking'));i=h&&h.prototype;k.prototype.init=function(l,m){'use strict';if(m)this.$StreamViewportTracking1=m;i.init.call(this,l);this.initSubscriptions();};k.prototype.initSubscriptions=function(){'use strict';};k.prototype.getDataFromConfig=function(l){'use strict';this.isTimetrackingEnabled=1;this.timeout=l.record_delay;};k.prototype.getTimeout=function(){'use strict';return this.timeout;};k.prototype.getStorySelector=function(){'use strict';return '.uiStreamStory';};k.prototype.getAllStories=function(){'use strict';var l=c('DOM').scry(this.getStream(),this.getStorySelector());return l.filter(function(m){return c('DataAttributeUtils').getDataFt(m);});};k.prototype.getStoryID=function(l){'use strict';var m=JSON.parse(c('DataAttributeUtils').getDataFt(l));return m.mf_story_key;};k.prototype.getQueryID=function(l){'use strict';var m=JSON.parse(c('DataAttributeUtils').getDataFt(l));return m.qid;};k.prototype.getFBFeedLocations=function(l){'use strict';var m=JSON.parse(c('DataAttributeUtils').getDataFt(l));return m.fbfeed_location;};k.prototype.getFBFeedInsertionPosition=function(l){'use strict';var m=JSON.parse(c('DataAttributeUtils').getDataFt(l));return m.insertion_position;};k.prototype.getDataToLog=function(l){'use strict';var m={},n=this.getStream();m=c('recordTNTreeData')(l,n);var o=l.getAttribute('data-insertion-position');if(o!==null)m.inspos=o;m.evt=j;m.vpv_time=Math.round(Date.now()/1000);var p=c('DOM').scry(l,".fbStoryAttachmentImage")[0];if(p){var q=c('DOMDimensions').getElementDimensions(p);m.story_image_height=q.height;m.story_image_width=q.width;}return {ft:m};};k.prototype.getStream=function(){'use strict';if(this.$StreamViewportTracking1)return this.$StreamViewportTracking1;return c('ge')('home_stream');};k.init=function(l,m){'use strict';k.instance=new k();k.instance.init(l,m);};k.getInstance=function(){'use strict';return k.instance;};function k(){'use strict';h.apply(this,arguments);}f.exports=k;},null);
__d('VideoFrameBuffer',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.$VideoFrameBuffer2=j;this.$VideoFrameBuffer1=i;this.$VideoFrameBuffer3=k||'contain';}h.prototype.updateFrameBuffer=function(){'use strict';if(this.$VideoFrameBuffer4){this.$VideoFrameBuffer1.width=this.$VideoFrameBuffer4;this.$VideoFrameBuffer4=null;}if(this.$VideoFrameBuffer5){this.$VideoFrameBuffer1.height=this.$VideoFrameBuffer5;this.$VideoFrameBuffer5=null;}var i=this.$VideoFrameBuffer1.clientWidth||this.$VideoFrameBuffer1.width,j=this.$VideoFrameBuffer1.clientHeight||this.$VideoFrameBuffer1.height,k=i,l=j,m=this.$VideoFrameBuffer2.videoWidth/this.$VideoFrameBuffer2.videoHeight,n=k/l;if(this.$VideoFrameBuffer3==='cover'){n*=-1;m*=-1;}if(n>m){k=l*m;}else if(n<m)l=k/m;var o=this.$VideoFrameBuffer1.getContext('2d');if(!(o instanceof window.CanvasRenderingContext2D))return;o.drawImage(this.$VideoFrameBuffer2,(i-k)/2,(j-l)/2,k,l);};h.prototype.getDOMNode=function(){'use strict';return this.$VideoFrameBuffer1;};h.prototype.updateDimensions=function(i,j){'use strict';this.$VideoFrameBuffer4=i;this.$VideoFrameBuffer5=j;};f.exports=h;},null);
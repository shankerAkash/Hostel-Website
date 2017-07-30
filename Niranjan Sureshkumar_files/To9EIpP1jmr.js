if (self.CavalryLogger) { CavalryLogger.start_js(["IN+CZ"]); }

__d('MessengerQuickCam.react',['cx','fbt','FluxContainer','FluxReduceStore','Image.react','React','ReactDOM','MessengerQuickCamActions','MessengerQuickCamOrigins','MessengerQuickCamStore'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.getStores=function(){return [c('MessengerQuickCamStore')];};m.calculateState=function(){return {quickcam:c('MessengerQuickCamStore').getState()};};m.prototype.componentDidMount=function(){var n=c('ReactDOM').findDOMNode(this);c('MessengerQuickCamActions').registerQuickCam(this.props.location,n);};m.prototype.componentWillUnmount=function(){this.props.onHidden();};m.prototype.render=function(){return (c('React').createElement('div',{className:"_34a6"},this.$MessengerQuickCam1(),this.$MessengerQuickCam2(),this.$MessengerQuickCam3(),this.$MessengerQuickCam4(),this.$MessengerQuickCam5(),this.$MessengerQuickCam6()));};m.prototype.$MessengerQuickCam1=function(){var n=this.state.quickcam.videoSrc;if(this.state.quickcam.videoBlob)n=window.URL.createObjectURL(this.state.quickcam.videoBlob);return (c('React').createElement('video',{autoPlay:true,loop:true,muted:true,className:"_9q6"+(this.state.quickcam.snapshot?' '+"hidden_elem":''),src:n}));};m.prototype.$MessengerQuickCam2=function(){return (c('React').createElement('canvas',{className:'hidden_elem'}));};m.prototype.$MessengerQuickCam3=function(){return (c('React').createElement(c('Image.react'),{className:"_34a7"+(!this.state.quickcam.snapshot?' '+"hidden_elem":''),src:this.state.quickcam.snapshot}));};m.prototype.$MessengerQuickCam4=function(){return (c('React').createElement('img',{id:'spinner',className:"_34a9 _34aa",src:'/images/loaders/indicator_blue_large.gif'}));};m.prototype.$MessengerQuickCam5=function(){return (c('React').createElement('label',{className:"_34ab"+(!this.state.quickcam.uploadError?' '+"hidden_elem":'')},i._("Error uploading your picture! Please try again.")));};m.prototype.$MessengerQuickCam6=function(){return (c('React').createElement('div',{id:'progress',className:"_1q5",style:{width:this.state.quickcam.progressWidth+'%'}}));};function m(){j.apply(this,arguments);}m.propTypes={onHidden:l.func.isRequired,location:l.oneOf(c('MessengerQuickCamOrigins').getValues()).isRequired};f.exports=c('FluxContainer').create(m);},null);
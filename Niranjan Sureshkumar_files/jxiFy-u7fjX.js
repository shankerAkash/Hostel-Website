if (self.CavalryLogger) { CavalryLogger.start_js(["AXKjg"]); }

__d('ViewportTrackingHooks',['Base64'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=[],j={registerFeedObject:function(k,l){h[k]=c('Base64').encode(l);},updateVisibleViewportObjects:function(k){var l=[],m=false;for(var n=0;n<k.length;n++){var o=k[n],p=o.id;while(!(p in h)&&o.firstChild!=undefined&&o.firstChild.id!=undefined&&o.firstChild.id.startsWith("u_")){o=o.firstChild;p=o.id;}if(p in h){l.push(h[p]);if(!(n in i)||i[n]!=h[p])m=true;}}if(!m&&i.length!=l.length)m=true;if(m){i=l;if(typeof __EXT__updateVisibleViewportObjects==='function')__EXT__updateVisibleViewportObjects(i);}}};f.exports=j;},null);
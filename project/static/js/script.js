$(document).ajaxSend(function(e,t,n){function r(e){var t=null;if(document.cookie&&document.cookie!==""){var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=jQuery.trim(n[r]);if(i.substring(0,e.length+1)==e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}}return t}function i(e){var t=document.location.host,n=document.location.protocol,r="//"+t,i=n+r;return e==i||e.slice(0,i.length+1)==i+"/"||e==r||e.slice(0,r.length+1)==r+"/"||!/^(\/\/|http:|https:).*/.test(e)}function s(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}!s(n.type)&&i(n.url)&&t.setRequestHeader("X-CSRFToken",r("csrftoken"))}),window.google=window.google||{},google.maps=google.maps||{},function(){function e(e){document.write('<script src="'+e+'"'+' type="text/javascript"><'+"/script>")}var t=google.maps.modules={};google.maps.__gjsload__=function(e,n){t[e]=n},google.maps.Load=function(e){delete google.maps.Load,e([.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@234000000&src=api&hl=ru-RU&","http://mt1.googleapis.com/vt?lyrs=m@234000000&src=api&hl=ru-RU&"],null,null,null,null,"m@234000000"],[["http://khm0.googleapis.com/kh?v=138&hl=ru-RU&","http://khm1.googleapis.com/kh?v=138&hl=ru-RU&"],null,null,null,1,"138"],[["http://mt0.googleapis.com/vt?lyrs=h@234000000&src=api&hl=ru-RU&","http://mt1.googleapis.com/vt?lyrs=h@234000000&src=api&hl=ru-RU&"],null,null,null,null,"h@234000000"],[["http://mt0.googleapis.com/vt?lyrs=t@131,r@234000000&src=api&hl=ru-RU&","http://mt1.googleapis.com/vt?lyrs=t@131,r@234000000&src=api&hl=ru-RU&"],null,null,null,null,"t@131,r@234000000"],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=81&hl=ru-RU&","http://khm1.googleapis.com/kh?v=81&hl=ru-RU&"],null,null,null,null,"81"],[["http://mt0.googleapis.com/mapslt?hl=ru-RU&","http://mt1.googleapis.com/mapslt?hl=ru-RU&"]],[["http://mt0.googleapis.com/mapslt/ft?hl=ru-RU&","http://mt1.googleapis.com/mapslt/ft?hl=ru-RU&"]],[["http://mt0.googleapis.com/vt?hl=ru-RU&","http://mt1.googleapis.com/vt?hl=ru-RU&"]],[["http://mt0.googleapis.com/mapslt/loom?hl=ru-RU&","http://mt1.googleapis.com/mapslt/loom?hl=ru-RU&"]],[["https://mts0.googleapis.com/mapslt?hl=ru-RU&","https://mts1.googleapis.com/mapslt?hl=ru-RU&"]],[["https://mts0.googleapis.com/mapslt/ft?hl=ru-RU&","https://mts1.googleapis.com/mapslt/ft?hl=ru-RU&"]]],["ru-RU","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com"],["http://maps.gstatic.com/intl/ru_ru/mapfiles/api-3/14/6","3.14.6"],[1701743641],1,null,null,null,null,1,"",null,null,0,"http://khm.googleapis.com/mz?v=138&",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",234e6]],[null,"ru-RU","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",234e6]],[null,"ru-RU","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"h",234e6]],[null,"ru-RU","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"h",234e6]],[null,"ru-RU","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",131],[0,"r",131e6]],[null,"ru-RU","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],0],[null,[[4,"t",131],[0,"r",131e6]],[null,"ru-RU","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],3],[null,null,[null,"ru-RU","US",null,18],0],[null,null,[null,"ru-RU","US",null,18],3],[null,null,[null,"ru-RU","US",null,18],6],[null,null,[null,"ru-RU","US",null,18],0]],2,500],n)};var n=(new Date).getTime();e("http://maps.gstatic.com/intl/ru_ru/mapfiles/api-3/14/6/main.js")}();if(typeof window.google!="object"||!window.google.maps)throw"Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.";var extend_object=function(e,t){var n;if(e===t)return e;for(n in t)e[n]=t[n];return e},replace_object=function(e,t){var n;if(e===t)return e;for(n in t)e[n]!=undefined&&(e[n]=t[n]);return e},array_map=function(e,t){var n=Array.prototype.slice.call(arguments,2),r=[],i=e.length,s;if(Array.prototype.map&&e.map===Array.prototype.map)r=Array.prototype.map.call(e,function(e){return callback_params=n,callback_params.splice(0,0,e),t.apply(this,callback_params)});else for(s=0;s<i;s++)callback_params=n,callback_params.splice(0,0,e[s]),r.push(t.apply(this,callback_params));return r},array_flat=function(e){var t=[],n;for(n=0;n<e.length;n++)t=t.concat(e[n]);return t},coordsToLatLngs=function(e,t){var n=e[0],r=e[1];return t&&(n=e[1],r=e[0]),new google.maps.LatLng(n,r)},arrayToLatLng=function(e,t){var n;for(n=0;n<e.length;n++)e[n].length>0&&typeof e[n][0]!="number"?e[n]=arrayToLatLng(e[n],t):e[n]=coordsToLatLngs(e[n],t);return e},getElementById=function(e,t){var n,e=e.replace("#","");return"jQuery"in this&&t?n=$("#"+e,t)[0]:n=document.getElementById(e),n},findAbsolutePosition=function(e){var t=0,n=0;if(e.offsetParent)do t+=e.offsetLeft,n+=e.offsetTop;while(e=e.offsetParent);return[t,n]},GMaps=function(e){"use strict";var t=document,n=function(e){e.zoom=e.zoom||15,e.mapType=e.mapType||"roadmap";var n=this,r,i=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],s=["mousemove","mouseout","mouseover"],o=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],u=e.el||e.div,a=e.markerClusterer,f=google.maps.MapTypeId[e.mapType.toUpperCase()],l=new google.maps.LatLng(e.lat,e.lng),c=e.zoomControl||!0,h=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},p=h.style||"DEFAULT",d=h.position||"TOP_LEFT",v=e.panControl||!0,m=e.mapTypeControl||!0,g=e.scaleControl||!0,y=e.streetViewControl||!0,b=b||!0,w={},E={zoom:this.zoom,center:l,mapTypeId:f},S={panControl:v,zoomControl:c,zoomControlOptions:{style:google.maps.ZoomControlStyle[p],position:google.maps.ControlPosition[d]},mapTypeControl:m,scaleControl:g,streetViewControl:y,overviewMapControl:b};typeof e.el=="string"||typeof e.div=="string"?this.el=getElementById(u,e.context):this.el=u;if(typeof this.el=="undefined"||this.el===null)throw"No element defined.";window.context_menu=window.context_menu||{},window.context_menu[n.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=e.zoom,this.registered_events={},this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=e.enableNewStyle;for(r=0;r<o.length;r++)delete e[o[r]];e.disableDefaultUI!=1&&(E=extend_object(E,S)),w=extend_object(E,e);for(r=0;r<i.length;r++)delete w[i[r]];for(r=0;r<s.length;r++)delete w[s[r]];this.map=new google.maps.Map(this.el,w),a&&(this.markerClusterer=a.apply(this,[this.map]));var x=function(e,t){var r="",i=window.context_menu[n.el.id][e];for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];r+='<li><a id="'+e+"_"+s+'" href="#">'+o.title+"</a></li>"}if(!getElementById("gmaps_context_menu"))return;var u=getElementById("gmaps_context_menu");u.innerHTML=r;var a=u.getElementsByTagName("a"),f=a.length;s;for(s=0;s<f;s++){var l=a[s],c=function(r){r.preventDefault(),i[this.id.replace(e+"_","")].action.apply(n,[t]),n.hideContextMenu()};google.maps.event.clearListeners(l,"click"),google.maps.event.addDomListenerOnce(l,"click",c,!1)}var h=findAbsolutePosition.apply(this,[n.el]),p=h[0]+t.pixel.x-15,d=h[1]+t.pixel.y-15;u.style.left=p+"px",u.style.top=d+"px",u.style.display="block"};this.buildContextMenu=function(e,t){if(e==="marker"){t.pixel={};var r=new google.maps.OverlayView;r.setMap(n.map),r.draw=function(){var n=r.getProjection(),i=t.marker.getPosition();t.pixel=n.fromLatLngToContainerPixel(i),x(e,t)}}else x(e,t)},this.setContextMenu=function(e){window.context_menu[n.el.id][e.control]={};var r,i=t.createElement("ul");for(r in e.options)if(e.options.hasOwnProperty(r)){var s=e.options[r];window.context_menu[n.el.id][e.control][s.name]={title:s.title,action:s.action}}i.id="gmaps_context_menu",i.style.display="none",i.style.position="absolute",i.style.minWidth="100px",i.style.background="white",i.style.listStyle="none",i.style.padding="8px",i.style.boxShadow="2px 2px 6px #ccc",t.body.appendChild(i);var o=getElementById("gmaps_context_menu");google.maps.event.addDomListener(o,"mouseout",function(e){(!e.relatedTarget||!this.contains(e.relatedTarget))&&window.setTimeout(function(){o.style.display="none"},400)},!1)},this.hideContextMenu=function(){var e=getElementById("gmaps_context_menu");e&&(e.style.display="none")};var T=function(t,r){google.maps.event.addListener(t,r,function(t){t==undefined&&(t=this),e[r].apply(this,[t]),n.hideContextMenu()})};for(var N=0;N<i.length;N++){var C=i[N];C in e&&T(this.map,C)}for(var N=0;N<s.length;N++){var C=s[N];C in e&&T(this.map,C)}google.maps.event.addListener(this.map,"rightclick",function(t){e.rightclick&&e.rightclick.apply(this,[t]),window.context_menu[n.el.id]["map"]!=undefined&&n.buildContextMenu("map",t)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var e=[],t=this.markers.length,n;for(n=0;n<t;n++)e.push(this.markers[n].getPosition());this.fitLatLngBounds(e)},this.fitLatLngBounds=function(e){var t=e.length,n=new google.maps.LatLngBounds;for(var r=0;r<t;r++)n.extend(e[r]);this.map.fitBounds(n)},this.setCenter=function(e,t,n){this.map.panTo(new google.maps.LatLng(e,t)),n&&n()},this.getElement=function(){return this.el},this.zoomIn=function(e){e=e||1,this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom)},this.zoomOut=function(e){e=e||1,this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom)};var k=[],L;for(L in this.map)typeof this.map[L]=="function"&&!this[L]&&k.push(L);for(r=0;r<k.length;r++)(function(e,t,n){e[n]=function(){return t[n].apply(t,arguments)}})(this,this.map,k[r])};return n}(this);GMaps.prototype.createControl=function(e){var t=document.createElement("div");t.style.cursor="pointer",t.style.fontFamily="Arial, sans-serif",t.style.fontSize="13px",t.style.boxShadow="rgba(0, 0, 0, 0.398438) 0px 2px 4px";for(var n in e.style)t.style[n]=e.style[n];e.id&&(t.id=e.id),e.classes&&(t.className=e.classes),e.content&&(t.innerHTML=e.content);for(var r in e.events)(function(t,n){google.maps.event.addDomListener(t,n,function(){e.events[n].apply(this,[this])})})(t,r);return t.index=1,t},GMaps.prototype.addControl=function(e){var t=google.maps.ControlPosition[e.position.toUpperCase()];delete e.position;var n=this.createControl(e);return this.controls.push(n),this.map.controls[t].push(n),n},GMaps.prototype.createMarker=function(e){if(e.lat==undefined&&e.lng==undefined&&e.position==undefined)throw"No latitude or longitude defined.";var t=this,n=e.details,r=e.fences,i=e.outside,s={position:new google.maps.LatLng(e.lat,e.lng),map:null};delete e.lat,delete e.lng,delete e.fences,delete e.outside;var o=extend_object(s,e),u=new google.maps.Marker(o);u.fences=r;if(e.infoWindow){u.infoWindow=new google.maps.InfoWindow(e.infoWindow);var a=["closeclick","content_changed","domready","position_changed","zindex_changed"];for(var f=0;f<a.length;f++)(function(t,n){e.infoWindow[n]&&google.maps.event.addListener(t,n,function(t){e.infoWindow[n].apply(this,[t])})})(u.infoWindow,a[f])}var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(var f=0;f<l.length;f++)(function(t,n){e[n]&&google.maps.event.addListener(t,n,function(){e[n].apply(this,[this])})})(u,l[f]);for(var f=0;f<c.length;f++)(function(t,n,r){e[r]&&google.maps.event.addListener(n,r,function(n){n.pixel||(n.pixel=t.getProjection().fromLatLngToPoint(n.latLng)),e[r].apply(this,[n])})})(this.map,u,c[f]);return google.maps.event.addListener(u,"click",function(){this.details=n,e.click&&e.click.apply(this,[this]),u.infoWindow&&(t.hideInfoWindows(),u.infoWindow.open(t.map,u))}),google.maps.event.addListener(u,"rightclick",function(n){n.marker=this,e.rightclick&&e.rightclick.apply(this,[n]),window.context_menu[t.el.id]["marker"]!=undefined&&t.buildContextMenu("marker",n)}),u.fences&&google.maps.event.addListener(u,"dragend",function(){t.checkMarkerGeofence(u,function(e,t){i(e,t)})}),u},GMaps.prototype.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_"))t=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";t=this.createMarker(e)}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),GMaps.fire("marker_added",t,this),t},GMaps.prototype.addMarkers=function(e){for(var t=0,n;n=e[t];t++)this.addMarker(n);return this.markers},GMaps.prototype.hideInfoWindows=function(){for(var e=0,t;t=this.markers[e];e++)t.infoWindow&&t.infoWindow.close()},GMaps.prototype.removeMarker=function(e){for(var t=0;t<this.markers.length;t++)if(this.markers[t]===e){this.markers[t].setMap(null),this.markers.splice(t,1),GMaps.fire("marker_removed",e,this);break}return e},GMaps.prototype.removeMarkers=function(e){var e=e||this.markers;for(var t=0;t<this.markers.length;t++)this.markers[t]===e[t]&&this.markers[t].setMap(null);var n=[];for(var t=0;t<this.markers.length;t++)this.markers[t].getMap()!=null&&n.push(this.markers[t]);this.markers=n},GMaps.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView,n=!0;return t.setMap(this.map),e.auto_show!=null&&(n=e.auto_show),t.onAdd=function(){var n=document.createElement("div");n.style.borderStyle="none",n.style.borderWidth="0px",n.style.position="absolute",n.style.zIndex=100,n.innerHTML=e.content,t.el=n,e.layer||(e.layer="overlayLayer");var r=this.getPanes(),i=r[e.layer],s=["contextmenu","DOMMouseScroll","dblclick","mousedown"];i.appendChild(n);for(var o=0;o<s.length;o++)(function(e,t){google.maps.event.addDomListener(e,t,function(e){navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()})})(n,s[o]);google.maps.event.trigger(this,"ready")},t.draw=function(){var r=this.getProjection(),i=r.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0;var s=t.el,o=s.children[0],u=o.clientHeight,a=o.clientWidth;switch(e.verticalAlign){case"top":s.style.top=i.y-u+e.verticalOffset+"px";break;default:case"middle":s.style.top=i.y-u/2+e.verticalOffset+"px";break;case"bottom":s.style.top=i.y+e.verticalOffset+"px"}switch(e.horizontalAlign){case"left":s.style.left=i.x-a+e.horizontalOffset+"px";break;default:case"center":s.style.left=i.x-a/2+e.horizontalOffset+"px";break;case"right":s.style.left=i.x+e.horizontalOffset+"px"}s.style.display=n?"block":"none",n||e.show.apply(this,[s])},t.onRemove=function(){var n=t.el;e.remove?e.remove.apply(this,[n]):(t.el.parentNode.removeChild(t.el),t.el=null)},this.overlays.push(t),t},GMaps.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break}},GMaps.prototype.removeOverlays=function(){for(var e=0,t;t=this.overlays[e];e++)t.setMap(null);this.overlays=[]},GMaps.prototype.drawPolyline=function(e){var t=[],n=e.path;if(n.length)if(n[0][0]===undefined)t=n;else for(var r=0,i;i=n[r];r++)t.push(new google.maps.LatLng(i[0],i[1]));var s={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:!0,editable:!1,visible:!0};e.hasOwnProperty("clickable")&&(s.clickable=e.clickable),e.hasOwnProperty("editable")&&(s.editable=e.editable),e.hasOwnProperty("icons")&&(s.icons=e.icons),e.hasOwnProperty("zIndex")&&(s.zIndex=e.zIndex);var o=new google.maps.Polyline(s),u=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var a=0;a<u.length;a++)(function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})})(o,u[a]);return this.polylines.push(o),GMaps.fire("polyline_added",o,this),o},GMaps.prototype.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++)if(this.polylines[t]===e){this.polylines[t].setMap(null),this.polylines.splice(t,1),GMaps.fire("polyline_removed",e,this);break}},GMaps.prototype.removePolylines=function(){for(var e=0,t;t=this.polylines[e];e++)t.setMap(null);this.polylines=[]},GMaps.prototype.drawCircle=function(e){e=extend_object({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e),delete e.lat,delete e.lng;var t=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var r=0;r<n.length;r++)(function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})})(t,n[r]);return this.polygons.push(t),t},GMaps.prototype.drawRectangle=function(e){e=extend_object({map:this.map},e);var t=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=t;var n=new google.maps.Rectangle(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++)(function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})})(n,r[i]);return this.polygons.push(n),n},GMaps.prototype.drawPolygon=function(e){var t=!1;e.hasOwnProperty("useGeoJSON")&&(t=e.useGeoJSON),delete e.useGeoJSON,e=extend_object({map:this.map},e),t==0&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=array_flat(array_map(e.paths,arrayToLatLng,t)));var n=new google.maps.Polygon(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++)(function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t])})})(n,r[i]);return this.polygons.push(n),GMaps.fire("polygon_added",n,this),n},GMaps.prototype.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++)if(this.polygons[t]===e){this.polygons[t].setMap(null),this.polygons.splice(t,1),GMaps.fire("polygon_removed",e,this);break}},GMaps.prototype.removePolygons=function(){for(var e=0,t;t=this.polygons[e];e++)t.setMap(null);this.polygons=[]},GMaps.prototype.getFromFusionTables=function(e){var t=e.events;delete e.events;var n=e,r=new google.maps.FusionTablesLayer(n);for(var i in t)(function(e,n){google.maps.event.addListener(e,n,function(e){t[n].apply(this,[e])})})(r,i);return this.layers.push(r),r},GMaps.prototype.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);return t.setMap(this.map),t},GMaps.prototype.getFromKML=function(e){var t=e.url,n=e.events;delete e.url,delete e.events;var r=e,i=new google.maps.KmlLayer(t,r);for(var s in n)(function(e,t){google.maps.event.addListener(e,t,function(e){n[t].apply(this,[e])})})(i,s);return this.layers.push(i),i},GMaps.prototype.loadFromKML=function(e){var t=this.getFromKML(e);return t.setMap(this.map),t},GMaps.prototype.addLayer=function(e,t){t=t||{};var n;switch(e){case"weather":this.singleLayers.weather=n=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=n=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=n=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=n=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=n=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=n=new google.maps.panoramio.PanoramioLayer,n.setTag(t.filter),delete t.filter,t.click&&google.maps.event.addListener(n,"click",function(e){t.click(e),delete t.click});break;case"places":this.singleLayers.places=n=new google.maps.places.PlacesService(this.map);if(t.search||t.nearbySearch){var r={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};t.search&&n.search(r,t.search),t.nearbySearch&&n.nearbySearch(r,t.nearbySearch)}if(t.textSearch){var i={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};n.textSearch(i,t.textSearch)}}if(n!==undefined)return typeof n.setOptions=="function"&&n.setOptions(t),typeof n.setMap=="function"&&n.setMap(this.map),n},GMaps.prototype.removeLayer=function(e){if(typeof e=="string"&&this.singleLayers[e]!==undefined)this.singleLayers[e].setMap(null),delete this.singleLayers[e];else for(var t=0;t<this.layers.length;t++)if(this.layers[t]===e){this.layers[t].setMap(null),this.layers.splice(t,1);break}};var travelMode,unitSystem;GMaps.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":travelMode=google.maps.TravelMode.BICYCLING;break;case"transit":travelMode=google.maps.TravelMode.TRANSIT;break;case"driving":travelMode=google.maps.TravelMode.DRIVING;break;default:travelMode=google.maps.TravelMode.WALKING}e.unitSystem==="imperial"?unitSystem=google.maps.UnitSystem.IMPERIAL:unitSystem=google.maps.UnitSystem.METRIC;var t={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},n=extend_object(t,e);n.origin=/string/.test(typeof e.origin)?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),n.destination=/string/.test(typeof e.destination)?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),n.travelMode=travelMode,n.unitSystem=unitSystem,delete n.callback;var r=this,i=new google.maps.DirectionsService;i.route(n,function(t,n){if(n===google.maps.DirectionsStatus.OK)for(var i in t.routes)t.routes.hasOwnProperty(i)&&r.routes.push(t.routes[i]);e.callback&&e.callback(r.routes)})},GMaps.prototype.removeRoutes=function(){this.routes=[]},GMaps.prototype.getElevations=function(e){e=extend_object({locations:[],path:!1,samples:256},e),e.locations.length>0&&e.locations[0].length>0&&(e.locations=array_flat(array_map([e.locations],arrayToLatLng,!1)));var t=e.callback;delete e.callback;var n=new google.maps.ElevationService;if(!e.path)delete e.path,delete e.samples,n.getElevationForLocations(e,function(e,n){t&&typeof t=="function"&&t(e,n)});else{var r={path:e.locations,samples:e.samples};n.getElevationAlongPath(r,function(e,n){t&&typeof t=="function"&&t(e,n)})}},GMaps.prototype.cleanRoute=GMaps.prototype.removePolylines,GMaps.prototype.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,callback:function(n){n.length>0&&(t.drawPolyline({path:n[n.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.callback&&e.callback(n[n.length-1]))}})},GMaps.prototype.travelRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(t){t.length>0&&e.start&&e.start(t[t.length-1]);if(t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0){var r=n.legs[0].steps;for(var i=0,s;s=r[i];i++)s.step_number=i,e.step(s,n.legs[0].steps.length-1)}}t.length>0&&e.end&&e.end(t[t.length-1])}});else if(e.route&&e.route.legs.length>0){var t=e.route.legs[0].steps;for(var n=0,r;r=t[n];n++)r.step_number=n,e.step(r)}},GMaps.prototype.drawSteppedRoute=function(e){var t=this;if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(n){n.length>0&&e.start&&e.start(n[n.length-1]);if(n.length>0&&e.step){var r=n[n.length-1];if(r.legs.length>0){var i=r.legs[0].steps;for(var s=0,o;o=i[s];s++)o.step_number=s,t.drawPolyline({path:o.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.step(o,r.legs[0].steps.length-1)}}n.length>0&&e.end&&e.end(n[n.length-1])}});else if(e.route&&e.route.legs.length>0){var n=e.route.legs[0].steps;for(var r=0,i;i=n[r];r++)i.step_number=r,t.drawPolyline({path:i.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.step(i)}},GMaps.Route=function(e){this.origin=e.origin,this.destination=e.destination,this.waypoints=e.waypoints,this.map=e.map,this.route=e.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length,this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}).getPath()},GMaps.Route.prototype.getRoute=function(t){var n=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],callback:function(){n.route=e[0],t.callback&&t.callback.call(n)}})},GMaps.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.pop()}},GMaps.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.push(e[t]);this.step_count++}},GMaps.prototype.checkGeofence=function(e,t,n){return n.containsLatLng(new google.maps.LatLng(e,t))},GMaps.prototype.checkMarkerGeofence=function(e,t){if(e.fences)for(var n=0,r;r=e.fences[n];n++){var i=e.getPosition();this.checkGeofence(i.lat(),i.lng(),r)||t(e,r)}},GMaps.prototype.toImage=function(e){var e=e||{},t={};t.size=e.size||[this.el.clientWidth,this.el.clientHeight],t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng();if(this.markers.length>0){t.markers=[];for(var n=0;n<this.markers.length;n++)t.markers.push({lat:this.markers[n].getPosition().lat(),lng:this.markers[n].getPosition().lng()})}if(this.polylines.length>0){var r=this.polylines[0];t.polyline={},t.polyline.path=google.maps.geometry.encoding.encodePath(r.getPath()),t.polyline.strokeColor=r.strokeColor,t.polyline.strokeOpacity=r.strokeOpacity,t.polyline.strokeWeight=r.strokeWeight}return GMaps.staticMapURL(t)},GMaps.staticMapURL=function(e){function p(e,t){if(e[0]==="#"){e=e.replace("#","0x");if(t){t=parseFloat(t),t=Math.min(1,Math.max(t,0));if(t===0)return"0x00000000";t=(t*255).toString(16),t.length===1&&(t+=t),e=e.slice(0,8)+t}}return e}var t=[],n,r="http://maps.googleapis.com/maps/api/staticmap";e.url&&(r=e.url,delete e.url),r+="?";var i=e.markers;delete e.markers,!i&&e.marker&&(i=[e.marker],delete e.marker);var s=e.polyline;delete e.polyline;if(e.center)t.push("center="+e.center),delete e.center;else if(e.address)t.push("center="+e.address),delete e.address;else if(e.lat)t.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng;else if(e.visible){var o=encodeURI(e.visible.join("|"));t.push("visible="+o)}var u=e.size;u?(u.join&&(u=u.join("x")),delete e.size):u="630x300",t.push("size="+u),e.zoom||(e.zoom=15);var a=e.hasOwnProperty("sensor")?!!e.sensor:!0;delete e.sensor,t.push("sensor="+a);for(var f in e)e.hasOwnProperty(f)&&t.push(f+"="+e[f]);if(i){var l,c;for(var h=0;n=i[h];h++)l=[],n.size&&n.size!=="normal"?l.push("size:"+n.size):n.icon&&l.push("icon:"+encodeURI(n.icon)),n.color&&l.push("color:"+n.color.replace("#","0x")),n.label&&l.push("label:"+n.label[0].toUpperCase()),c=n.address?n.address:n.lat+","+n.lng,l.length||h===0?(l.push(c),l=l.join("|"),t.push("markers="+encodeURI(l))):(l=t.pop()+encodeURI("|"+c),t.push(l))}if(s){n=s,s=[],n.strokeWeight&&s.push("weight:"+parseInt(n.strokeWeight,10));if(n.strokeColor){var d=p(n.strokeColor,n.strokeOpacity);s.push("color:"+d)}if(n.fillColor){var v=p(n.fillColor,n.fillOpacity);s.push("fillcolor:"+v)}var m=n.path;if(m.join)for(var g=0,y;y=m[g];g++)s.push(y.join(","));else s.push("enc:"+m);s=s.join("|"),t.push("path="+encodeURI(s))}return t=t.join("&"),r+t},GMaps.prototype.addMapType=function(e,t){if(!t.hasOwnProperty("getTileUrl")||typeof t["getTileUrl"]!="function")throw"'getTileUrl' function required.";t.tileSize=t.tileSize||new google.maps.Size(256,256);var n=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,n)},GMaps.prototype.addOverlayMapType=function(e){if(!e.hasOwnProperty("getTile")||typeof e["getTile"]!="function")throw"'getTile' function required.";var t=e.index;delete e.index,this.map.overlayMapTypes.insertAt(t,e)},GMaps.prototype.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)},GMaps.prototype.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,e.styledMapName);this.map.mapTypes.set(e.mapTypeId,t)},GMaps.prototype.setStyle=function(e){this.map.setMapTypeId(e)},GMaps.prototype.createPanorama=function(e){if(!e.hasOwnProperty("lat")||!e.hasOwnProperty("lng"))e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng();return this.panorama=GMaps.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama},GMaps.createPanorama=function(e){var t=getElementById(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;var n=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],r=extend_object({visible:!0},e);for(var i=0;i<n.length;i++)delete r[n[i]];var s=new google.maps.StreetViewPanorama(t,r);for(var i=0;i<n.length;i++)(function(t,n){e[n]&&google.maps.event.addListener(t,n,function(){e[n].apply(this)})})(s,n[i]);return s},GMaps.prototype.on=function(e,t){return GMaps.on(e,this,t)},GMaps.prototype.off=function(e){GMaps.off(e,this)},GMaps.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],GMaps.on=function(e,t,n){if(GMaps.custom_events.indexOf(e)==-1)return google.maps.event.addListener(t,e,n);var r={handler:n,eventName:e};return t.registered_events[e]=t.registered_events[e]||[],t.registered_events[e].push(r),r},GMaps.off=function(e,t){GMaps.custom_events.indexOf(e)==-1?google.maps.event.clearListeners(t,e):t.registered_events[e]=[]},GMaps.fire=function(e,t,n){if(GMaps.custom_events.indexOf(e)==-1)google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2));else if(e in n.registered_events){var r=n.registered_events[e];for(var i=0;i<r.length;i++)(function(e,t,n){e.apply(t,[n])})(r[i].handler,n,t)}},GMaps.geolocate=function(e){var t=e.always||e.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){e.success(n),t&&t()},function(n){e.error(n),t&&t()},e.options):(e.not_supported(),t&&t())},GMaps.geocode=function(e){this.geocoder=new google.maps.Geocoder;var t=e.callback;e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&(e.latLng=new google.maps.LatLng(e.lat,e.lng)),delete e.lat,delete e.lng,delete e.callback,this.geocoder.geocode(e,function(e,n){t(e,n)})},google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(e){var t=new google.maps.LatLngBounds,n=this.getPaths(),r;for(var i=0;i<n.getLength();i++){r=n.getAt(i);for(var s=0;s<r.getLength();s++)t.extend(r.getAt(s))}return t}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(t!==null&&!t.contains(e))return!1;var n=!1,r=this.getPaths().getLength();for(var i=0;i<r;i++){var s=this.getPaths().getAt(i),o=s.getLength(),u=o-1;for(var a=0;a<o;a++){var f=s.getAt(a),l=s.getAt(u);(f.lng()<e.lng()&&l.lng()>=e.lng()||l.lng()<e.lng()&&f.lng()>=e.lng())&&f.lat()+(e.lng()-f.lng())/(l.lng()-f.lng())*(l.lat()-f.lat())<e.lat()&&(n=!n),u=a}}return n}),google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)},google.maps.Marker.prototype.setFences=function(e){this.fences=e},google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)},google.maps.Marker.prototype.getId=function(){return this.__gm_id},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){"use strict";if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>1&&(r=Number(arguments[1]),r!=r?r=0:r!=0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}),$(document).ready(function(){map=new GMaps({div:"#map",lat:-12.043333,lng:-77.028333,height:"400px"}),map.addMarker({position:map.getCenter(),draggable:!0}),GMaps.geolocate({success:function(e){map.setCenter(e.coords.latitude,e.coords.longitude),map.removeMarkers(),map.addMarker({lat:e.coords.latitude,lng:e.coords.longitude,draggable:!0}),$("#status").load("/record/",{lat:e.coords.latitude,lng:e.coords.longitude})},error:function(e){alert("Geolocation failed: "+e.message)},not_supported:function(){alert("Your browser does not support geolocation")}}),$(".friend").click(function(){return marker_position=map.markers[0].getPosition(noWrap=!0),$("#status").load("/record/",{lat:marker_position.lat(),lng:marker_position.lng()}),$.ajax({type:"POST",data:{lat:marker_position.lat(),lng:marker_position.lng()},url:$(this).attr("href"),success:function(e){$(".block_main").html(e)}}),!1})})
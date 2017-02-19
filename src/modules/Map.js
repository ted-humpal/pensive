//TODO the esthetic need is pretty high, attempt to create an attractive Africa and see how it looks
//TODO output the entire animation construct
//TODO start animation
//TODO reset to an animation stage 
import React from 'react';
import Arboreal from 'arboreal';

let TIMESTEP = 100;
let ANIMATE = true;
ANIMATE = false;

let DUALDRAW = true;
DUALDRAW = false;
let SEEMARKERS = true;
//SEEMARKERS = false;

let COLORS = { NAVY:'001f3f', BLUE:'0074D9', AQUA:'7FDBFF', TEAL:'39CCCC', OLIVE:'3D9970', GREEN:'2ECC40', LIME:'01FF70', YELLOW:'FFDC00', ORANGE:'FF851B', RED:'FF4136', MAROON:'85144b', FUCHSIA:'F012BE', PURPLE:'B10DC9', BLACK:'111111', GRAY:'AAAAAA', SILVER:'DDDDDD' };
let COLOR = COLORS.GRAY;
let BCOLOR = COLORS.OLIVE;


/* */
  function DeleteMenu() {
	this.div_ = document.createElement('div');
	this.div_.className = 'delete-menu';
	this.div_.innerHTML = 'Delete';

	var menu = this;
	google.maps.event.addDomListener(this.div_, 'click', function() {
	  menu.removeVertex();
	});
  }
  DeleteMenu.prototype = new google.maps.OverlayView();

  DeleteMenu.prototype.onAdd = function() {
	var deleteMenu = this;
	var map = this.getMap();
	this.getPanes().floatPane.appendChild(this.div_);

	// mousedown anywhere on the map except on the menu div will close the
	// menu.
	this.divListener_ = google.maps.event.addDomListener(map.getDiv(), 'mousedown', function(e) {
	  if (e.target != deleteMenu.div_) {
		deleteMenu.close();
	  }
	}, true);
  };

  DeleteMenu.prototype.onRemove = function() {
	google.maps.event.removeListener(this.divListener_);
	this.div_.parentNode.removeChild(this.div_);

	// clean up
	this.set('position');
	this.set('path');
	this.set('vertex');
  };

  DeleteMenu.prototype.close = function() {
	this.setMap(null);
  };

  DeleteMenu.prototype.draw = function() {
	var position = this.get('position');
	var projection = this.getProjection();

	if (!position || !projection) {
	  return;
	}

	var point = projection.fromLatLngToDivPixel(position);
	this.div_.style.top = point.y + 'px';
	this.div_.style.left = point.x + 'px';
  };

   // Opens the menu at a vertex of a given path.
  DeleteMenu.prototype.open = function(map, path, vertex) {
	this.set('position', path.getAt(vertex));
	this.set('path', path);
	this.set('vertex', vertex);
	this.setMap(map);
	this.draw();
  };

  // Deletes the vertex from the path.
  DeleteMenu.prototype.removeVertex = function() {
	var path = this.get('path');
	var vertex = this.get('vertex');

	if (!path || vertex == undefined) {
	  this.close();
	  return;
	}

	path.removeAt(vertex);
	this.close();
  };
  /* */

export default class Map extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Map">
				<div className='Map-canvas' ref="mapCanvas">
					Loading map...
				</div>
			</div>
		)
	}

	componentDidMount(){
		this.initMap();
	}

	componentDidUpdate(){
	}

	initMap() {
		// create the map, marker and infoWindow after the component has
		// been rendered because we need to manipulate the DOM for Google =(
		if(this.map === undefined) {
			let mapOptions = {
				zoom: DEFAULT_ZOOM,
				mapTypeId: google.maps.MapTypeId.SATELLITE,
				center: new google.maps.LatLng(0, 0),
				disableDefaultUI: true
			}
			this.map = new google.maps.Map(this.refs.mapCanvas, mapOptions);
			let styles = [
				{ featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
				{ featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
				{ featureType: "road", stylers: [{ visibility: "off" }] },
				{ featureType: "poi", stylers: [{ visibility: "off" }] }, 
				{ featureType: "transit", stylers: [{ visibility: "off" }] }
			];
			this.map.setOptions({styles: styles});

			var deleteMenu = new DeleteMenu();
			let Nations = [];


      function MakeControls(controlDiv, controlDiv2, map) {

		// Marker Visibility
        var controlUI = document.createElement('div');
        controlUI.title = 'Click to recenter the map';
        controlUI.className = 'controlUI';
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('div');
        controlText.innerHTML = 'Marker Visibility';
        controlText.className = 'controlText';
        controlUI.appendChild(controlText);

        controlUI.addEventListener('click', function() {
			Nations.map((nation) => {
				nation.getMarkers().map((arr) => {
					arr.map((m) => { m.setVisible(!m.getVisible()); } );
				});
			});
        });

        var controlUI2 = document.createElement('div');
        controlUI2.className = 'controlUI';
        controlDiv2.appendChild(controlUI2);

        var controlText2 = document.createElement('div');
        controlText2.innerHTML = 'Toggle Animate';
        controlText2.className = 'controlText';
        controlUI2.appendChild(controlText2);

        controlUI2.addEventListener('click', function() {
        	ANIMATE = !ANIMATE;
        });

      }

// Create Controls
var markerControlDiv = document.createElement('div');
var animateControlDiv = document.createElement('div');
var centerControl = new MakeControls(markerControlDiv, animateControlDiv, this.map);
markerControlDiv.index = 1;
animateControlDiv.index = 2;
this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(markerControlDiv);
this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(animateControlDiv);








let SumerBorders = {
	points : [
		[
			[1.7132651050559398, 34.845820312499995, 1.4376921427967229, 35.418632812499936, 0.6269450269346983, 36.498593750000055, -1.4205206760230005, 36.12671875000001],
			[0.9068294173313176, 31.737617187500064, 1.4575040611054924, 32.52804687499997, 1.9927008379157494, 33.4814453125, 2.016392743826537, 34.20480468749997],
			[-3.469211228634133, 32.780390624999995, -2.9307048571245446, 31.331718749999936, -1.417828439148396, 30.781679687499945, -0.10230679689221454, 31.15355468749999],
			[-2.0050907009315844, 35.780585937500064, -2.994383192006709, 35.20871093749997, -3.660531805824051, 34.5458984375, -3.912763273865498, 33.60281250000003]
		],
		[
			[8.015372675278607, 37.834101562499995, 3.983458170058817, 40.955742187499936, -0.0761674392609916, 38.344296875000055, -2.5623897642531306, 37.79664062500001],
			[8.434827737571318, 6.776679687500064, 16.17964319902485, 12.928437499999973, 13.468873262309707, 27.9443359375, 8.663296096376685, 36.75363281249997],
			[2.2409860541106177, 17.047968749999995, 4.4025448574992865, 15.511406249999936, 6.434668572328466, 12.500429687499945, 7.478903118991911, 6.676015624999991],
			[-6.9978029842920675, 36.044257812500064, -7.02107796804504, 32.74777343749997, -7.944089355555468, 25.0537109375, -3.825072957683521, 21.913359375000027]
		],
		[
			[10.228096066175398, 41.833124999999995, 14.295000000000066, 57.171562499999936, 4.270459062092592, 50.561093750000055, -2.255044742518806, 39.99390625000001],
			[16.45236553927402, 8.578437500000064, 15.206590727649639, 20.135468749999973, 30.499961843415175, 21.484375, 32.09722916876456, 31.260468749999973],
			[4.653425485337044, 11.247187499999995, 7.3311331985889145, 9.534843749999936, -2.8669713342748926, -17.865781250000055, 13.097539320453034, -18.72437500000001],
			[-10.47209423935723, 41.273750000000064, -48.05370068932507, 27.166718749999973, -41.68453605839184, 17.71484375, -1.410782699506581, 8.466093750000027]
		]
	],
	times : [new Date().getTime(), (new Date().getTime())+15000, (new Date().getTime())+15000+15000]
}

let Sumer = new Nation('Sumer', this.map, COLOR, SumerBorders);
Nations.push(Sumer);

 
if (ANIMATE) {
	function animateBorders(borders, nation) {
	  //setup
  	  var id = setInterval(frame, TIMESTEP);
  	  var startTime = borders.times[0];
  	  var endTime = borders.times[1];
  	  var startBorders = borders.points[0];
  	  var nextBorders = borders.points[1];

  	  function frame() {
  		let curTime = new Date().getTime();

    	if (endTime <= curTime) {
    		var found = false;
    		borders.times.slice(1).map((time,i) => {
    			//find the next endTime and border to expand to (if endTime hasn't come yet)
    			if (curTime <= borders.times[i+1] && ANIMATE) {
  	  	  	  	  	startTime = borders.times[i];
  	  	  	  	  	endTime = borders.times[i+1];
  	  	  	  	  	startBorders = borders.points[i];
  	  	  	  	  	nextBorders = borders.points[i+1];
  	  	  	  	  	found = true;
  	  	  	  	}
    		});
    		// if no value was found we're done animating!
    		if (!found ) {
      	  		clearInterval(id);
	  	  		nation.setAnchors(nextBorders);
	  	  	}
    	} else {
        	let percentComplete = (curTime - startTime) / (endTime - startTime);
      		let curPoints = [];
      		//move.startPoints.map((myArr, i) => {
      		startBorders.map((myArr, i) => {
      			let temp = [];
      			myArr.map((item, j) => {
      				//curPoints.push(percentComplete * (move.endPoints[j] - item) + item);
      				//temp.push(percentComplete * (move.endPoints[i][j] - item) + item);
      				temp.push(percentComplete * (nextBorders[i][j] - item) + item);
      			});
      			curPoints.push(temp);
      		});
			//obj.setAnchors(curPoints);
			nation.setAnchors(curPoints);
    	}
  	  }
	}


	animateBorders(SumerBorders, Sumer);
}



		}
	}
}



class Nation {
	constructor(id, map, color, borders) {
		this.map = map;
		let self = this;
		let lineArray = borders.points[0].map((border, i) => {
			return new GmapsCubicBezier('id'+i, ...border, 0.05, this.map);
		});

		// get complete path
		let path = [];
		lineArray.map((item) => { path = path.concat(item.getArray()); });


		// initial draw
		var poly = new google.maps.Data.Polygon([path]);
		let nat, nat2
		nat = this.map.data.add({ geometry: poly, id: id, properties: { color: color } });
		if (DUALDRAW)
			nat2 = this.map.data.add({ geometry: poly, id: id+'2', properties: { color: color } });

		// set color (based on the properties set)
		this.map.data.setStyle(function(feature) { return { fillColor: feature.getProperty('color'), strokeWeight: 1, strokeColor: BCOLOR }; });

		let q = 0;

		// further redraws
		this.redraw = () => {
			// get path and redraw
			path = [];
			lineArray.map((item) => { path = path.concat(item.getArray()); });
			var poly = new google.maps.Data.Polygon([path]);
			if (q%2 == 0) {
				this.map.data.add({ geometry: poly, id: id, properties: { color: color } });
			} else {
				this.map.data.add({ geometry: poly, id: id+'2', properties: { color: color } });
			}
			//this.map.data.setStyle(function(feature) { return { fillColor: feature.getProperty('color'), strokeWeight: 1, strokeColor: BCOLOR }; });
			if (DUALDRAW)
				q+=1;
			

			// output onto the console the updated nation
			let mystr = '';
			lineArray.map((item, i) => { 
				let points = item.getAnchors();
				mystr += "[" + points[0].lat() + ", " + points[0].lng() + ", " + points[1].lat() + ", " + points[1].lng() + ", " +
							points[2].lat() + ", " + points[2].lng() + ", " + points[3].lat() + ", " + points[3].lng() + "],\n";
			});
			console.log(mystr.slice(0,-2));
			let mystr2 = '';
			borders.points.map((border, i) => { 
				mystr2 += '[\n';
				border.map((item, i) => { 
					mystr2 += "[" + item[0] + ", " + item[1] + ", " + item[2] + ", " + item[3] + ", " +
								item[4] + ", " + item[5] + ", " + item[6] + ", " + item[7] + "],\n";
				});
				mystr2 = mystr2.slice(0,-2) + '\n],\n';
			});
			console.log(mystr2.slice(0,-2));
		}


		// child can call the redraw
		lineArray.map((item) => { item.setCallback(self.redraw); });


		// set anchor points
		this.setAnchors = (anchorArr) => {
			lineArray.map((item, i) => {
				item.setPath(...anchorArr[i]);
			});
			this.redraw();
		}
		this.getMarkers = () => { 
			return lineArray.map((item) => {
				return item.getMarkers();
			});
		}
	}

	getMarkers() {}

	setAnchors() {}
	redraw() {}
}
/* */

class GmapsCubicBezier {
	constructor(id, lat1, long1, lat2, long2, lat3, long3, lat4, long4, resolution, map) {
		let self = this;
		this.path = [];
		this.id = id;
		this.subId = '-bezier';
		this.map = map;
		this.resolution = resolution;

		this.setPath = (lat1, long1, lat2, long2, lat3, long3, lat4, long4) => {
			self.path = [];
			for(let it = 0; it <= 1; it += self.resolution) {
				self.path.push(self.getBezier({x:lat1, y:long1},{x:lat2, y:long2},{x:lat3, y:long3},{x:lat4, y:long4}, it));
			}
			self.anchors = [
				new google.maps.LatLng(lat1, long1),
				new google.maps.LatLng(lat2, long2),
				new google.maps.LatLng(lat3, long3),
				new google.maps.LatLng(lat4, long4)
			];
			this.drawAnchors();
		}

		this.getArray = () => { return self.path; }
		//this.getAnchors = () => { return map.data.getFeatureById(self.id+self.subId).getGeometry().getArray(); }
		this.getAnchors = () => { return self.anchors; }
		this.setCallback = (f) => { self.callback = f; }


		let pinColor = Math.floor((Math.random() * 999999) + 100000) + "";
    	var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
    	    	       new google.maps.Size(21, 34),
    	    	       new google.maps.Point(0,0),
    	    	       new google.maps.Point(10, 34));
		let markers = Array(4).fill(null).map((item) => {
			return new google.maps.Marker({
				position: {lat: 0, lng: 0},
				draggable: true,
				map: map,
				icon: pinImage,
				visible: SEEMARKERS
			});
		});
		self.markers = markers;

		markers.map((item) => {
			item.addListener('mouseup', (event) => {
				let points = self.markers.map((x) => { return x.getPosition() });
				self.setPath(points[0].lat(), points[0].lng(), points[1].lat(), points[1].lng(), 
							 points[2].lat(), points[2].lng(), points[3].lat(), points[3].lng());
				self.callback();
        	});
        });

		/*
		// When done dragging an anchor marker, redraw
		map.data.addListener('mouseup', (event) => {
    		if (event.feature.getProperty('drag') && event.feature.getId() == id+self.subId) {
				//let points = map.data.getFeatureById(self.id+self.subId).getGeometry().getArray();
				let points = self.markers;
				self.setPath(points[0].lat(), points[0].lng(), points[1].lat(), points[1].lng(), 
							 points[2].lat(), points[2].lng(), points[3].lat(), points[3].lng());
				self.callback();
			}
        });
        */

		this.drawAnchors = () => {
			self.markers.map((item, i) => {
				item.setPosition(this.anchors[i]);
			});
			// Create markers - id '2'
			//let mp = new google.maps.Data.MultiPoint(this.anchors);
			/*
			let thing = this.map.data.add({ 
				geometry: mp, 
				properties: {
    				draggable: true,
					//visible: false,
					fillcolor: 'blue',
					style: {
    					draggable: true,
						fillcolor: 'blue',
						//visible: false
					}
				}, 
				id: this.id+this.subId });
			//thing.setProperty('visible', false);
			this.map.data.getFeatureById(this.id+this.subId).setProperty('drag', true);

			// Make markers draggable
			this.map.data.setStyle(function(feature) {
    			return { 
    				draggable: feature.getProperty('drag'),
    				visible: !feature.getProperty('drag') 
    			};
			});
			/* */
		}

		this.setPath(lat1, long1, lat2, long2, lat3, long3, lat4, long4);
		this.getMarkers = () => { return self.markers };

	}

	getMarkers() { }
	drawAnchors() { }
	getArray() { }
	getAnchors() { }
	setAnchors() { }
	setCallback(f) { }
	setPath(lat1, long1, lat2, long2, lat3, long3, lat4, long4) { }

	B1(t) { return t*t*t; }
	B2(t) { return 3*t*t*(1-t); }
	B3(t) { return 3*t*(1-t)*(1-t); }
	B4(t) { return (1-t)*(1-t)*(1-t); }
	getBezier(C1,C2,C3,C4, percent) {
		var pos = {};
		pos.x = C1.x*this.B1(percent) + C2.x*this.B2(percent) + C3.x*this.B3(percent) + C4.x*this.B4(percent);
		pos.y = C1.y*this.B1(percent) + C2.y*this.B2(percent) + C3.y*this.B3(percent) + C4.y*this.B4(percent);
		return new google.maps.LatLng(pos.x, pos.y);
	}
}



Map.displayName = 'Map';
const DEFAULT_ZOOM = 2;

/*var paths = [
[ { lat:0, lng:-20},  { lat:10, lng:-30} ],
[ { lat:14.585157027016134, lng:77.47350200000011, time:-200000},  { lat:18.944840382278763, lng:77.12732822412147},  { lat:23.611086266731316, lng:76.39920111922953},  { lat:25.815039714413697, lng:75.51857568305923},	{ lat:27.492998449933904, lng:74.61068599090862},  { lat:28.69606476879269, lng:73.58991421534034},  { lat:29.94614531974164, lng:72.42601254582502},  { lat:30.651246297713627, lng:71.15049506682573},  { lat:32.480062322470054, lng:68.98075981249997, time:546} ],
[ { lat:1.6028258074102704, lng:35.906555877685605, time:-200000},	{ lat:30.68789540327471, lng:32.30567415663768, time:-199999},	{ lat:24.11142014080988, lng:103.25977038822703, time:-199998},  { lat:9.103819480115206, lng:124.22001562499997, time:-199997} ],
[ { lat:1.6028289748548707, lng:35.90650282287584},  { lat:7.60624700786913, lng:13.744744992475262},	{ lat:12.791960400708996, lng:-11.383921874999828}],
[ { lat:1.6028258074102704, lng:35.90655587768572},  { lat:-1.6643598137831919, lng:36.31936027689699},  { lat:-5.019386387060663, lng:36.205336454826465},  { lat:-9.030553955546228, lng:35.563926118521294},  { lat:-12.865631568805185, lng:34.28657360737884},  { lat:-16.67618718156459, lng:31.942299631255878},  { lat:-20.20040946796966, lng:28.96944472014627},	{ lat:-22.2608312375265, lng:26.969210774130374},  { lat:-24.125109645516908, lng:24.28837499999986} ],
[ { lat:41.50587882986372, lng:-4.967906249999828},  { lat:49.3578482788793, lng:11.64473588736314},  { lat:49.643926362297236, lng:34.012867822342514},  { lat:48.877356124291815, lng:37.50762439750497},  { lat:47.56052545099231, lng:40.34430999210258},  { lat:45.941663126174106, lng:42.851399316040215},  { lat:43.788443565235255, lng:44.85478124999986} ],
[{ lat:1.602912328732033, lng:35.90641699218736},  { lat:12.311801554331428, lng:41.85916333848377},{ lat:12.913949446192717, lng:44.9128037780938}, {lat: 14.710286937907219, lng: 49.36838375214404}, {lat: 16.95136552810223, lng: 53.71762709974723}, {lat: 19.366649236074686, lng: 57.46751101394807}, {lat: 22.484085899598817, lng: 59.76353906250017}],
[ { lat:22.499280249444837, lng:59.76353906250017},  { lat:25.585794062958847, lng:66.0981481243673},  { lat:25.883045696996906, lng:75.36568327925579},  { lat:24.88651801039385, lng:80.08269673757525},	{ lat:23.768993254908057, lng:84.91284123700802},  { lat:22.914237047688, lng:91.79708498105128},  { lat:20.07275735797195, lng:95.90363904516778},  { lat:16.195388818051264, lng:97.43167911262458},	{ lat:10.078151580043814, lng:98.31362289429194},  { lat:2.8107548186259677, lng:100.78877616465934},  { lat:-0.6342752051778824, lng:104.0724413840478},  { lat:-2.98086978328905, lng:105.57760414521249},  { lat:-5.5019362785644645, lng:106.20872811156403},  { lat:-6.921942497944432, lng:112.59585860213747},  { lat:-10.844866975352733, lng:121.70986559901212},	{ lat:-14.006091272220758, lng:126.06592789178353},  { lat:-16.30637133863945, lng:128.27980659666412},  { lat:-18.925410343424524, lng:130.016518474622},	{ lat:-21.281455831084703, lng:131.6327393091666},	{ lat:-24.279080223159834, lng:132.95174999999972} ],
[ { lat:-6.9226494895989825, lng:112.62975000000017},  { lat:-5.100695353735186, lng:119.9409329728885},  { lat:-1.384704984182994, lng:127.42437501529776},  { lat:-0.7943007958048764, lng:135.42005339462617},  { lat:-1.800712396450524, lng:139.8429288104826},  { lat:-3.324186515721468, lng:143.39323849059906},  { lat:-4.853945472076594, lng:145.39650634837108},  { lat:-5.677423586146996, lng:147.40626482147877},  { lat:-5.445655030672441, lng:150.20865310424995},  { lat:-4.330798428720004, lng:151.95167410663134},  { lat:-7.625934226672115, lng:156.73709210760148},  { lat:-9.658583618104943, lng:160.87040024999988} ],
[ { lat:1.6028351494997755, lng:35.90655587768538},  { lat:1.959702063650759, lng:34.29330681878923},  { lat:2.487917370193467, lng:32.2557593782667},	{ lat:2.654978839548707, lng:31.18523659862649},  { lat:3.1676823423437113, lng:29.464948006099803},  { lat:3.5722092839078257, lng:28.014854515303114},  { lat:3.9699107803385267, lng:26.914973937477498},  { lat:4.01510730887109, lng:25.55078988309083},  { lat:3.6225784517787285, lng:24.230926190471564},  { lat:2.614626186242837, lng:23.264243868798644},  { lat:1.6501347171147733, lng:22.254605861188338},  { lat:0.9492586030847275, lng:21.816840840345435},  { lat:0.22990025218472776, lng:21.452622643882364},  { lat:-0.12475100505181495, lng:21.127337462236255},  { lat:-0.567034924057625, lng:20.890078109369824},  { lat:-1.2285699874997147, lng:20.34519108003815},  { lat:-2.021514503478074, lng:19.66834707219857},	{ lat:-3.2079043986280387, lng:19.337622506635853},  { lat:-4.701851675784391, lng:19.316600897587477},  { lat:-6.152773960774386, lng:19.64922659374747},	{ lat:-7.866050142143414, lng:20.42118749999986} ],
[ { lat:32.12321227196192, lng:41.25157617187483},	{ lat:32.208565701511645, lng:41.31879893397513},  { lat:32.34604285061729, lng:41.39900008526456},  { lat:32.51412547495944, lng:41.53006480912984},  { lat:32.59906130470201, lng:41.58117102191932},  { lat:32.69101422991097, lng:41.65253877971759},  { lat:33.48729584942735, lng:42.05112147992975},  { lat:34.924010651494996, lng:42.71358451582364},	{ lat:38.05333533487618, lng:44.615089246466596},  { lat:42.30064162385089, lng:45.1749458176198},	{ lat:56.16833822762913, lng:40.63603124999986} ],
[ { lat:32.27653401999585, lng:-107.09681450000033},  { lat:19.091204522134944, lng:-96.57248851860976},  { lat:9.62170970547189, lng:-82.35082272617063},	{ lat:7.25621470759544, lng:-75.64581326195048},  { lat:-16.241798103460727, lng:-62.63577214967273},  { lat:-35.18622931732451, lng:-64.30537699999996} ],
[ { lat:45.48911437601843, lng:-110.26087500000017},  { lat:63.884590903535035, lng:175.42632623996167},  { lat:26.179893386345242, lng:99.17118749999986} ],
[ { lat:45.58393567908057, lng:-110.26087700000016},  { lat:46.19021750529392, lng:-68.52412700000014} ],
[ { lat:20.077579445805416, lng:95.90031884765608},  { lat:21.708664950824385, lng:104.60779842627755},  { lat:23.735290727543116, lng:113.30693917603196},  { lat:30.462703800316017, lng:122.91245920943379},  { lat:36.65333451666448, lng:139.14306430338797},	{ lat:60.04017759306764, lng:169.7889112014375},  { lat:32.484983820888594, lng:-106.49287700000025} ],
[ { lat:56.70519450484493, lng:53.74303124999983},	{ lat:30.338902252584443, lng:101.28056249999986} ],
[ { lat:30.895049594650345, lng:32.27574609374983},  { lat:31.039967081468912, lng:33.908560518668764},  { lat:31.772399968263773, lng:34.96063079736405},	{ lat:34.50686642375888, lng:36.191641250381736},  { lat:36.13342359111269, lng:36.57458577771524},  { lat:37.06014795970327, lng:36.45890677799116},  { lat:41.0918013998497, lng:29.021003700697747},  { lat:46.001010892913875, lng:13.671635931100923},  { lat:43.550032555264714, lng:10.196101257485566},  { lat:41.514292549216336, lng:-0.7604531250001401} ],
[ { lat:30.888877431989602, lng:32.27025292968733},  { lat:29.740919219738675, lng:27.11677409897618},	{ lat:29.589271046688772, lng:24.036309455786977},	{ lat:32.20003308119973, lng:6.419508443721952},  { lat:31.636744943592298, lng:-7.70381250000014} ],
[ { lat:49.35926569757824, lng:11.64342187499983},	{ lat:53.625481622268495, lng:-4.89131250000014} ]
];
*/
//How to draw on the map?
//Have this component do the drawing. Send in the information in from above (control above).
//Just have a basic datastructure and draw what's in it. 
//Markers
//Lines
//Filled Polygons with text inside
import React from 'react';
import Arboreal from 'arboreal';

// Set a listener on every MyLine
// Add to the path by altering gLine
// draw
class MyLine {
	constructor(obj) {
		this.path = obj.path;
	/*
		*/
		//this.gPath = obj.path.map((aPath) => {
			/*
			filteredPath = aPath.filter((point) => {
				//return ('undefined' !== typeof point.time); //&& point.time > obj.currTime);
				return true;
			});*/
		//});
		this.gLine = new google.maps.Polyline({
			path: obj.path,
			//path: this.gPath,
			geodesic: obj.geodesic,
			editable: obj.editable
		});
		this.time = obj.path.map((o) => {
			if ('undefined' !== typeof o.time) return o.time;
			else return null;
		});
	}
	/* */
	redraw() {
		this.path.map((point) => {
			point.lat += 10;
		});
		this.gLine.setPath(this.path);
		//call this to set the path in the google polyline
		//TODO will this update the line????
		//this.gPath = obj.path.map((aPath) => {
		//	aPath.map((point) => {
		//		return ('undefined' !== typeof point.time and point.time > obj.currTime);
		//	}
		//});
	}
	/* */
}

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
		this.myline = {};
	}

	static propTypes() {
	}


	componentWillMount(){
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

	shouldComponentUpdate(nextProps, nextState) {
		if (!nextProps.locationData || nextProps.locationData.length === 0) {
			return false
		}
		return true
	}

	componentDidMount(){
		this.initMap();
	}

	componentDidUpdate(){
		if (prevProps.google !== this.props.google) {
			if(!this.map){
				this.initMap();
			}
			this.configureMap();
		}
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

			function wasDragged(event) {
				let string = '[\n';
				mylines.map((line,j) => {
					if (j != 0) string += ',\n'; 
					string += '[';
					line.gLine.getPath().forEach((l,i) => { 
						if (i != 0) string += ', '; 
						//string += ' { lat:' + l.lat() + ', lng:' + l.lng() + '}'; 
						string += ' { lat:' + l.lat() + ', lng:' + l.lng();
						if (line.time.length > i) string += ', time:' + line.time[i] + '}'; 
						else string += '}'; 
					});
					string += ' ]';
				});
				string += '\n]';
			}

			this.mylines = [];
			var deleteMenu = new DeleteMenu();
			/*
			paths.map((mypath) => {
				var line = new MyLine({
					path: mypath,
					geodesic: true,
					editable: true
					//editable: false
				});
				this.mylines.push(line);
				line.gLine.setMap(this.map);
				line.gLine.addListener('mouseup',wasDragged);
				line.gLine.addListener('rightclick', function(e) {
					if (e.vertex == undefined) {return; }
					deleteMenu.open(this.map, line.gLine.getPath(), e.vertex);
				});
				line.gLine.addListener('rightclick', function(e) {
					if (e.vertex == undefined) {return; }
					//deleteMenu.open(this.map, line.gLine.getPath(), e.vertex);
					line.redraw();
				});
			});
			var mylines = this.mylines;
			*/

			let curvedLine = new GmapsCubicBezier('someid', 0, 0, 10, 20, -40, 30, 40, 40, 0.05, this.map);
			let curvedLine2 = new GmapsCubicBezier('someid2', 50, 150, 30, 130, -20, 110, 0, 100, 0.05, this.map);
			let sumer = new Nation("Sumer", [curvedLine, curvedLine2], this.map);




			/*	
			var bermudaTriangle = new google.maps.Data.Polygon([curvedLine.path]);
			this.map.data.add({ geometry:bermudaTriangle });
			this.map.data.add({ geometry: new google.maps.Data.MultiPoint(curvedLine.anchors) });
			this.map.data.setStyle({
				editable: true,
				draggable: true
			});
			/*	*/
		}
	}


	/*
	redraw() {
		this.mylines.map((line) => {
			line.redraw();
		});
	}*/
	
	startTimer() {
	}

	// clean up event listeners when component unmounts
	componentDidUnMount() {
	}
	/**/
}

class Nation {
	constructor(id, lineArray, map) {
		this.map = map;
		let self = this;

		// get complete path
		let path = [];
		lineArray.map((item) => { path = path.concat(item.getArray()); });

		// initial draw
		var poly = new google.maps.Data.Polygon([path]);
		this.map.data.add({ geometry: poly, id: id });

		// further redraws
		this.redraw = () => {
			// get path and redraw
			path = [];
			lineArray.map((item) => { path = path.concat(item.getArray()); });
			var poly = new google.maps.Data.Polygon([path]);
			this.map.data.add({ geometry: poly, id: id });
		}
		// child can call the redraw
		lineArray.map((item) => { item.setCallback(self.redraw); });
	}

	draw() {
	}

	redraw() {
		console.log('parent called');
	}
	//TODO output the geoJSON and possibly custom built data
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

		this.getPath = (lat1, long1, lat2, long2, lat3, long3, lat4, long4) => {
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
		}


		this.getPath(lat1, long1, lat2, long2, lat3, long3, lat4, long4);
		//this.draw();
		this.drawAnchors();

		this.getArray = () => {
			//self.getPath(lat1, long1, lat2, long2, lat3, long3, lat4, long4);
			return self.path;
		}

		this.setCallback = (f) => {
			self.callback = f;
		}

		// When done dragging an anchor marker, redraw
		//this.map.data.addListener('mouseup', (event) => {
		map.data.addListener('mouseup', (event) => {
    		if (event.feature.getProperty('drag') && event.feature.getId() == id+self.subId) {
				let points = map.data.getFeatureById(self.id+self.subId).getGeometry().getArray();
				self.getPath(points[0].lat(), points[0].lng(), points[1].lat(), points[1].lng(), 
							 points[2].lat(), points[2].lng(), points[3].lat(), points[3].lng());
				self.callback();
			}
        });

	}

	getArray() { }
	setCallback(f) { }
	getPath(lat1, long1, lat2, long2, lat3, long3, lat4, long4) { }

	// Get a curved line based on 4 anchors
	/*
	getPath(lat1, long1, lat2, long2, lat3, long3, lat4, long4) {
		this.path = [];
		for(let it = 0; it <= 1; it += this.resolution) {
			this.path.push(this.getBezier({x:lat1, y:long1},{x:lat2, y:long2},{x:lat3, y:long3},{x:lat4, y:long4}, it));
		}
		this.anchors = [
			new google.maps.LatLng(lat1, long1),
			new google.maps.LatLng(lat2, long2),
			new google.maps.LatLng(lat3, long3),
			new google.maps.LatLng(lat4, long4)
		];
	}
	*/

	drawAnchors() {
		// Create markers - id '2'
		let mp = new google.maps.Data.MultiPoint(this.anchors);
		this.map.data.add({ geometry: mp, id: this.id+this.subId });
		this.map.data.getFeatureById(this.id+this.subId).setProperty('drag', true);

		// Make markers draggable
		this.map.data.setStyle(function(feature) {
    		return { draggable: feature.getProperty('drag') };
		});
	}

	draw() {
		// Create polygon - id '1'
		//var poly = new google.maps.Data.Polygon([this.path]);
		var poly = new google.maps.Data.LineString(this.path);
		this.map.data.add({ geometry: poly, id: 1 });
		this.map.data.getFeatureById(1).setProperty('drag', false);

		// Create markers - id '2'
		let mp = new google.maps.Data.MultiPoint(this.anchors);
		this.map.data.add({ geometry: mp, id: this.id+this.subId });
		this.map.data.getFeatureById(this.id+this.subId).setProperty('drag', true);

		// Make markers draggable
		this.map.data.setStyle(function(feature) {
    		return { draggable: feature.getProperty('drag') };
		});
	}

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

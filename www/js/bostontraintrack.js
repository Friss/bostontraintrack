var g_stop_layer ;

var g_verbose=1;
var g_map;

var g_marker = {};
var g_marker_popup = {};
var g_marker_layer ;

var g_dirty = 0;

var g_zoom = 14;

var g_socket;

var g_param = {
  bus_w : 36,
  bus_h : 45,
  stop_w : 15,
  stop_h : 18
};


var g_stops =  {

//Boston College (Green)
//  "place-lake" : { "id" : "place-lake", "name" : "Boston College Station", "lat" : "42.340081", "lon" : "-71.166769", "code" : "rob" } ,
//  "place-alsgr" : { "id" : "place-alsgr", "name" : "Allston St. Station", "lat" : "42.348701", "lon" : "-71.137955", "code" : "rob" } ,
//  "place-babck" : { "id" : "place-babck", "name" : "Babcock St. Station", "lat" : "42.35182", "lon" : "-71.12165", "code" : "rob" } ,
//  "place-brico" : { "id" : "place-brico", "name" : "Packards Corner Station", "lat" : "42.351967", "lon" : "-71.125031", "code" : "rob" } ,
//  "place-wrnst" : { "id" : "place-wrnst", "name" : "Warren St. Station", "lat" : "42.348343", "lon" : "-71.140457", "code" : "rob" } ,
//  "place-bucen" : { "id" : "place-bucen", "name" : "Boston Univ. Central Station", "lat" : "42.350082", "lon" : "-71.106865", "code" : "rob" } ,
//  "place-buest" : { "id" : "place-buest", "name" : "Boston Univ. East Station", "lat" : "42.349735", "lon" : "-71.103889", "code" : "rob" } ,
//  "place-buwst" : { "id" : "place-buwst", "name" : "Boston Univ. West Station", "lat" : "42.350941", "lon" : "-71.113876", "code" : "rob" } ,
//  "place-chill" : { "id" : "place-chill", "name" : "Chestnut Hill Ave. Station", "lat" : "42.338169", "lon" : "-71.15316", "code" : "rob" } ,
//  "place-chswk" : { "id" : "place-chswk", "name" : "Chiswick Rd. Station", "lat" : "42.340805", "lon" : "-71.150711", "code" : "rob" } ,
//  "place-grigg" : { "id" : "place-grigg", "name" : "Griggs St. Station", "lat" : "42.348545", "lon" : "-71.134949", "code" : "rob" } ,
//  "place-harvd" : { "id" : "place-harvd", "name" : "Harvard Ave. Station", "lat" : "42.350243", "lon" : "-71.131355", "code" : "r" } ,
//  "place-wascm" : { "id" : "place-wascm", "name" : "Washington St. Station", "lat" : "42.343864", "lon" : "-71.142853", "code" : "rob" } ,
//  "place-sthld" : { "id" : "place-sthld", "name" : "Sutherland Rd. Station", "lat" : "42.341614", "lon" : "-71.146202", "code" : "rob" } ,
//  "place-stplb" : { "id" : "place-stplb", "name" : "Saint Paul St. Station", "lat" : "42.3512", "lon" : "-71.116104", "code" : "rob" } ,
//  "place-plsgr" : { "id" : "place-plsgr", "name" : "Pleasant St. Station", "lat" : "42.351521", "lon" : "-71.118889", "code" : "rob" } ,
//  "place-sougr" : { "id" : "place-sougr", "name" : "South St. Station", "lat" : "42.3396", "lon" : "-71.157661", "code" : "rob" } ,

//Cleveland Circle (Green)
//  "place-clmnl" : { "id" : "place-clmnl", "name" : "Cleveland Circle Station", "lat" : "42.336142", "lon" : "-71.149326", "code" : "rob" } ,
//  "place-engav" : { "id" : "place-engav", "name" : "Englewood Ave. Station", "lat" : "42.336971", "lon" : "-71.14566", "code" : "rob" } ,
//  "place-denrd" : { "id" : "place-denrd", "name" : "Dean Rd. Station", "lat" : "42.337807", "lon" : "-71.141853", "code" : "rob" } ,
//  "place-tapst" : { "id" : "place-tapst", "name" : "Tappan St. Station", "lat" : "42.338459", "lon" : "-71.138702", "code" : "rob" } ,
//  "place-bcnwa" : { "id" : "place-bcnwa", "name" : "Washington Sq. Station", "lat" : "42.339394", "lon" : "-71.13533", "code" : "rob" } ,
//  "place-fbkst" : { "id" : "place-fbkst", "name" : "Fairbanks St. Station", "lat" : "42.339725", "lon" : "-71.131073", "code" : "rob" } ,
//  "place-bndhl" : { "id" : "place-bndhl", "name" : "Brandon Hall Station", "lat" : "42.340023", "lon" : "-71.129082", "code" : "rob" } ,
//  "place-sumav" : { "id" : "place-sumav", "name" : "Summit Ave. Station", "lat" : "42.34111", "lon" : "-71.12561", "code" : "rob" } ,
//  "place-cool" : { "id" : "place-cool", "name" : "Coolidge Corner Station", "lat" : "42.342213", "lon" : "-71.121201", "code" : "rob" } ,
//  "place-stpul" : { "id" : "place-stpul", "name" : "Saint Paul St. Station", "lat" : "42.343327", "lon" : "-71.116997", "code" : "rob" } ,
//  "place-kntst" : { "id" : "place-kntst", "name" : "Kent St. Station", "lat" : "42.344074", "lon" : "-71.114197", "code" : "rob" } ,
//  "place-hwsst" : { "id" : "place-hwsst", "name" : "Hawes St. Station", "lat" : "42.344906", "lon" : "-71.111145", "code" : "rob" } ,
//  "place-smary" : { "id" : "place-smary", "name" : "Saint Mary St. Station", "lat" : "42.345974", "lon" : "-71.107353", "code" : "rob" } ,

//Riverside  (Green)
//  "place-river" : { "id" : "place-river", "name" : "Riverside Station", "lat" : "42.337059", "lon" : "-71.251742", "code" : "rob" } ,
//  "place-woodl" : { "id" : "place-woodl", "name" : "Woodland Station", "lat" : "42.333374", "lon" : "-71.244301", "code" : "rob" } ,
//  "place-waban" : { "id" : "place-waban", "name" : "Waban Station", "lat" : "42.325943", "lon" : "-71.230728", "code" : "rob" } ,
//  "place-eliot" : { "id" : "place-eliot", "name" : "Eliot Station", "lat" : "42.319023", "lon" : "-71.216713", "code" : "rob" } ,
//  "place-newtn" : { "id" : "place-newtn", "name" : "Newton Highlands Station", "lat" : "42.321735", "lon" : "-71.206116", "code" : "rob" } ,
//  "place-chhil" : { "id" : "place-chhil", "name" : "Chestnut Hill Station", "lat" : "42.326653", "lon" : "-71.165314", "code" : "rob" } ,
//  "place-rsmnl" : { "id" : "place-rsmnl", "name" : "Reservoir Station", "lat" : "42.335027", "lon" : "-71.148952", "code" : "rob" } ,
//  "place-bcnfd" : { "id" : "place-bcnfd", "name" : "Beaconsfield Station", "lat" : "42.335846", "lon" : "-71.140823", "code" : "rob" } ,
//  "place-bvmnl" : { "id" : "place-bvmnl", "name" : "Brookline Village Station", "lat" : "42.332774", "lon" : "-71.116296", "code" : "rob" } ,
//  "place-brkhl" : { "id" : "place-brkhl", "name" : "Brookline Hills Station", "lat" : "42.331333", "lon" : "-71.126999", "code" : "rob" } ,
//  "place-longw" : { "id" : "place-longw", "name" : "Longwood Station", "lat" : "42.341145", "lon" : "-71.110451", "code" : "rob" } ,
//  "place-fenwy" : { "id" : "place-fenwy", "name" : "Fenway Station", "lat" : "42.345394", "lon" : "-71.104187", "code" : "rob" } ,
//  "place-kencl" : { "id" : "place-kencl", "name" : "Kenmore Station", "lat" : "42.348949", "lon" : "-71.095169", "code" : "rob" } ,
//  "place-newto" : { "id" : "place-newto", "name" : "Newton Centre Station", "lat" : "42.329391", "lon" : "-71.192429", "code" : "rob" } ,

//Heath (Green)
//  "place-bckhl" : { "id" : "place-bckhl", "name" : "Back of the Hill Station", "lat" : "42.330139", "lon" : "-71.111313", "code" : "rob" } ,
//  "place-rvrwy" : { "id" : "place-rvrwy", "name" : "Riverway Station", "lat" : "42.331684", "lon" : "-71.111931", "code" : "rob" } ,
//  "place-mispk" : { "id" : "place-mispk", "name" : "Mission Park Station", "lat" : "42.333195", "lon" : "-71.109756", "code" : "rob" } ,
//  "place-fenwd" : { "id" : "place-fenwd", "name" : "Fenwood Rd. Station", "lat" : "42.333706", "lon" : "-71.105728", "code" : "rob" } ,
//  "place-brmnl" : { "id" : "place-brmnl", "name" : "Brigham Circle Station", "lat" : "42.334229", "lon" : "-71.104609", "code" : "rob" } ,
//  "place-lngmd" : { "id" : "place-lngmd", "name" : "Longwood Medical Area Station", "lat" : "42.33596", "lon" : "-71.100052", "code" : "rob" } ,
//  "place-mfa" : { "id" : "place-mfa", "name" : "Museum of Fine Arts Station", "lat" : "42.337711", "lon" : "-71.095512", "code" : "rob" } ,
//  "place-nuniv" : { "id" : "place-nuniv", "name" : "Northeastern University Station", "lat" : "42.340401", "lon" : "-71.088806", "code" : "rob" } ,
//  "place-symcl" : { "id" : "place-symcl", "name" : "Symphony Station", "lat" : "42.342687", "lon" : "-71.085056", "code" : "rob" } ,
//  "place-prmnl" : { "id" : "place-prmnl", "name" : "Prudential Station", "lat" : "42.34557", "lon" : "-71.081696", "code" : "rob" } ,

//(Green)
//  "place-bland" : { "id" : "place-bland", "name" : "Blandford St. Station", "lat" : "42.349293", "lon" : "-71.100258", "code" : "rob" } ,
//  "place-hymnl" : { "id" : "place-hymnl", "name" : "Hynes Convention Center Station", "lat" : "42.347888", "lon" : "-71.087903", "code" : "rob" } ,
//  "place-coecl" : { "id" : "place-coecl", "name" : "Copley Station", "lat" : "42.349974", "lon" : "-71.077447", "code" : "rob" } ,
//  "place-armnl" : { "id" : "place-armnl", "name" : "Arlington Station", "lat" : "42.351902", "lon" : "-71.070893", "code" : "rob" } ,
//  "place-boyls" : { "id" : "place-boyls", "name" : "Boylston Station", "lat" : "42.35302", "lon" : "-71.06459", "code" : "rob" } ,
//  "place-lech" : { "id" : "place-lech", "name" : "Lechmere Station", "lat" : "42.370772", "lon" : "-71.076536", "code" : "rob" } ,
//  "place-spmnl" : { "id" : "place-spmnl", "name" : "Science Park Station", "lat" : "42.366664", "lon" : "-71.067666", "code" : "rob" } ,
//  "place-hsmnl" : { "id" : "place-hsmnl", "name" : "Heath St. Station", "lat" : "42.328681", "lon" : "-71.110559", "code" : "rob" } ,

//(Red)
  "place-alfcl" : { "id" : "place-alfcl", "name" : "Alewife Station", "lat" : "42.395428", "lon" : "-71.142483", "code" : "r" } ,
  "place-davis" : { "id" : "place-davis", "name" : "Davis Station", "lat" : "42.39674", "lon" : "-71.121815", "code" : "r" } ,
  "place-portr" : { "id" : "place-portr", "name" : "Porter Square Station", "lat" : "42.3884", "lon" : "-71.119149", "code" : "r" } ,
  "place-harsq" : { "id" : "place-harsq", "name" : "Harvard Square Station", "lat" : "42.373362", "lon" : "-71.118956", "code" : "r" } ,
  "place-cntsq" : { "id" : "place-cntsq", "name" : "Central Square Station", "lat" : "42.365486", "lon" : "-71.103802", "code" : "r" } ,
  "place-knncl" : { "id" : "place-knncl", "name" : "Kendall/MIT Station", "lat" : "42.36249079", "lon" : "-71.08617653", "code" : "r" } ,
  "place-chmnl" : { "id" : "place-chmnl", "name" : "Charles/MGH Station", "lat" : "42.361166", "lon" : "-71.070628", "code" : "r" } ,
  "place-pktrm" : { "id" : "place-pktrm", "name" : "Park St. Station", "lat" : "42.35639457", "lon" : "-71.0624242", "code" : "rg" } ,
  "place-dwnxg" : { "id" : "place-dwnxg", "name" : "Downtown Crossing Station", "lat" : "42.355518", "lon" : "-71.060225", "code" : "ros" } ,
  "place-sstat" : { "id" : "place-sstat", "name" : "South Station", "lat" : "42.352271", "lon" : "-71.055242", "code" : "rs" } ,
  "place-brdwy" : { "id" : "place-brdwy", "name" : "Broadway Station", "lat" : "42.342622", "lon" : "-71.056967", "code" : "r" } ,
  "place-andrw" : { "id" : "place-andrw", "name" : "Andrew Station", "lat" : "42.330154", "lon" : "-71.057655", "code" : "r" } ,
  "place-jfk" : { "id" : "place-jfk", "name" : "JFK/UMass Station", "lat" : "42.320685", "lon" : "-71.052391", "code" : "r" } ,

//Ashmont (Red)
  "place-shmnl" : { "id" : "place-shmnl", "name" : "Savin Hill Station", "lat" : "42.31129", "lon" : "-71.053331", "code" : "r" } ,
  "place-fldcr" : { "id" : "place-fldcr", "name" : "Fields Corner Station", "lat" : "42.300093", "lon" : "-71.061667", "code" : "r" } ,
  "place-smmnl" : { "id" : "place-smmnl", "name" : "Shawmut Station", "lat" : "42.29312583", "lon" : "-71.06573796", "code" : "r" } ,
  "place-asmnl" : { "id" : "place-asmnl", "name" : "Ashmont Station", "lat" : "42.284652", "lon" : "-71.064489", "code" : "r" } ,

//Mattapan (Red)
  "place-cedgr" : { "id" : "place-cedgr", "name" : "Cedar Grove Station", "lat" : "42.279682", "lon" : "-71.060432", "code" : "r" } ,
  "place-butlr" : { "id" : "place-butlr", "name" : "Butler Station", "lat" : "42.272343", "lon" : "-71.062584", "code" : "r" } ,
  "place-miltt" : { "id" : "place-miltt", "name" : "Milton Station", "lat" : "42.270306", "lon" : "-71.067673", "code" : "r" } ,
  "place-cenav" : { "id" : "place-cenav", "name" : "Central Ave. Station", "lat" : "42.270027", "lon" : "-71.073334", "code" : "r" } ,
  "place-valrd" : { "id" : "place-valrd", "name" : "Valley Rd. Station", "lat" : "42.268322", "lon" : "-71.081566", "code" : "r" } ,
  "place-capst" : { "id" : "place-capst", "name" : "Capen St. Station", "lat" : "42.267712", "lon" : "-71.087753", "code" : "r" } ,
  "place-matt" : { "id" : "place-matt", "name" : "Mattapan Station", "lat" : "42.267762", "lon" : "-71.092241", "code" : "r" } ,

//Braintree (Red)
  "place-nqncy" : { "id" : "place-nqncy", "name" : "North Quincy Station", "lat" : "42.275275", "lon" : "-71.029583", "code" : "r" } ,
  "place-wlsta" : { "id" : "place-wlsta", "name" : "Wollaston Station", "lat" : "42.2665139", "lon" : "-71.0203369", "code" : "r" } ,
  "place-qnctr" : { "id" : "place-qnctr", "name" : "Quincy Center Station", "lat" : "42.251809", "lon" : "-71.005409", "code" : "r" } ,
  "place-qamnl" : { "id" : "place-qamnl", "name" : "Quincy Adams Station", "lat" : "42.233391", "lon" : "-71.007153", "code" : "r" } ,
  "place-brntn" : { "id" : "place-brntn", "name" : "Braintree Station", "lat" : "42.2078543", "lon" : "-71.0011385", "code" : "r" } ,

//(Orange)
  "place-ogmnl" : { "id" : "place-ogmnl", "name" : "Oak Grove Station", "lat" : "42.43668", "lon" : "-71.071097", "code" : "o" } ,
  "place-mlmnl" : { "id" : "place-mlmnl", "name" : "Malden Center Station", "lat" : "42.426632", "lon" : "-71.07411", "code" : "o" } ,
  "place-welln" : { "id" : "place-welln", "name" : "Wellington Station", "lat" : "42.40237", "lon" : "-71.077082", "code" : "o" } ,
  "place-sull" : { "id" : "place-sull", "name" : "Sullivan Station", "lat" : "42.383975", "lon" : "-71.076994", "code" : "o" } ,
  "place-ccmnl" : { "id" : "place-ccmnl", "name" : "Community College Station", "lat" : "42.373622", "lon" : "-71.069533", "code" : "o" } ,
  "place-north" : { "id" : "place-north", "name" : "North Station", "lat" : "42.365577", "lon" : "-71.06129", "code" : "og" } ,
  "place-haecl" : { "id" : "place-haecl", "name" : "Haymarket Station", "lat" : "42.363021", "lon" : "-71.05829", "code" : "og" } ,
  "place-state" : { "id" : "place-state", "name" : "State St. Station", "lat" : "42.358978", "lon" : "-71.057598", "code" : "ob" } ,
  "place-chncl" : { "id" : "place-chncl", "name" : "Chinatown Station", "lat" : "42.352547", "lon" : "-71.062752", "code" : "os" } ,
  "place-tumnl" : { "id" : "place-tumnl", "name" : "Tufts Medical Center Station", "lat" : "42.349662", "lon" : "-71.063917", "code" : "os" } ,
  "place-bbsta" : { "id" : "place-bbsta", "name" : "Back Bay Station", "lat" : "42.34735", "lon" : "-71.075727", "code" : "o" } ,
  "place-masta" : { "id" : "place-masta", "name" : "Massachusetts Ave. Station", "lat" : "42.341512", "lon" : "-71.083423", "code" : "o" } ,
  "place-rugg" : { "id" : "place-rugg", "name" : "Ruggles Station", "lat" : "42.336377", "lon" : "-71.088961", "code" : "o" } ,
  "place-rcmnl" : { "id" : "place-rcmnl", "name" : "Roxbury Crossing Station", "lat" : "42.331397", "lon" : "-71.095451", "code" : "o" } ,
  "place-jaksn" : { "id" : "place-jaksn", "name" : "Jackson Square Station", "lat" : "42.323132", "lon" : "-71.099592", "code" : "o" } ,
  "place-sbmnl" : { "id" : "place-sbmnl", "name" : "Stony Brook Station", "lat" : "42.317062", "lon" : "-71.104248", "code" : "o" } ,
  "place-grnst" : { "id" : "place-grnst", "name" : "Green St. Station", "lat" : "42.310525", "lon" : "-71.107414", "code" : "o" } ,
  "place-forhl" : { "id" : "place-forhl", "name" : "Forest Hills Station", "lat" : "42.300523", "lon" : "-71.113686", "code" : "o" } ,

  //Blue
  "place-aport" : { "id" : "place-aport", "name" : "Airport Station", "lat" : "42.374262", "lon" : "-71.030395", "code" : "b" } ,
  "place-aqucl" : { "id" : "place-aqucl", "name" : "Aquarium Station", "lat" : "42.359784", "lon" : "-71.051652", "code" : "b" } ,
  "place-bmmnl" : { "id" : "place-bmmnl", "name" : "Beachmont Station", "lat" : "42.39754234", "lon" : "-70.99231944", "code" : "b" } ,
  "place-bomnl" : { "id" : "place-bomnl", "name" : "Bowdoin Station", "lat" : "42.361365", "lon" : "-71.062037", "code" : "b" } ,
  "place-crtst" : { "id" : "place-crtst", "name" : "Court House Station", "lat" : "42.35245", "lon" : "-71.04685", "code" : "b" } ,
  "place-gover" : { "id" : "place-gover", "name" : "Government Center Station", "lat" : "42.359705", "lon" : "-71.059215", "code" : "b" } ,
  "place-mvbcl" : { "id" : "place-mvbcl", "name" : "Maverick Station", "lat" : "42.36911856", "lon" : "-71.03952958", "code" : "b" } ,
  "place-orhte" : { "id" : "place-orhte", "name" : "Orient Heights Station", "lat" : "42.386867", "lon" : "-71.004736", "code" : "b" } ,
  "place-rbmnl" : { "id" : "place-rbmnl", "name" : "Revere Beach Station", "lat" : "42.40784254", "lon" : "-70.99253321", "code" : "b" } ,
  "place-sdmnl" : { "id" : "place-sdmnl", "name" : "Suffolk Downs Station", "lat" : "42.39050067", "lon" : "-70.99712259", "code" : "b" } ,
  "place-wimnl" : { "id" : "place-wimnl", "name" : "Wood Island Station", "lat" : "42.3796403", "lon" : "-71.02286539", "code" : "b" } ,
  "place-wondl" : { "id" : "place-wondl", "name" : "Wonderland Station", "lat" : "42.41342", "lon" : "-70.991648", "code" : "b" } ,
  "place-wtcst" : { "id" : "place-wtcst", "name" : "World Trade Center Station", "lat" : "42.34863", "lon" : "-71.04246", "code" : "b" } 
};

/*
        "place-davis" : 
          { stop_id : "place-davis", name : "Davis Station", latitude : 42.39674, longitude: -71.121815 },
        "place-portr" : 
          { stop_id : "place-portr", name : "Porter Square Station", latitude : 42.3884, longitude: -71.119149 }
      };
*/

//--------------------------
// client socket maintenance

function printdata(data, color) {
  var trips = data[color].TripList.Trips;

  for (x in trips) {
    //console.log(trips[x]);
    if ("Position" in trips[x]) {
      console.log("TripID: " + trips[x].TripID + " ");
      //process.stdout.write("TripID: " + trips[x].TripID + " ");
      console.log("Position (" +
          trips[x].Position.Timestamp + ") " +
          "lat: " + trips[x].Position.Lat + ", long: " + trips[x].Position.Long +
          ", heading: " + trips[x].Position.Heading );
    } else { }
  }
}

function handlePopup(tripid) {
  console.log("handlePopup>>", tripid);
}

function drawMarker(tripid, color) {
  headingLookup = [ "0", "45", "90", "135", "180", "225", "270", "315" ];

  var dat = g_marker[tripid];

  // Remove it
  //
  if ( "osm_marker" in dat ) {
    var m = dat["osm_marker"];
    g_marker_layer.removeMarker(m);
    delete g_marker[tripid].osm_marker;
    delete g_marker[tripid].icon;
    delete g_marker[tripid].size;
    delete g_marker[tripid].offset;
  }

  var lonlat =  new OpenLayers.LonLat( dat.Long, dat.Lat )
      .transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        g_map.getProjectionObject() // to Spherical Mercator Projection
      );

  var scale_factor = 1.0;
  var bus_w = g_param.bus_w;
  var bus_h = g_param.bus_h;

  if ( g_map.zoom < 8 ) { return; }

  if ( ( g_map.zoom <= 13 ) && ( g_map.zoom >= 8) )
  {
    scale_factor = Math.exp( Math.log(2) * (g_map.zoom-14) );
    bus_w *= scale_factor;
    bus_h *= scale_factor;
  }


  //var size = new OpenLayers.Size(36,45);
  var size = new OpenLayers.Size(bus_w,bus_h);
  var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);

  var icon ;
  if ( (color == "red") || (color == "blue") || (color == "orange") ) {

    iheading = Math.floor( (parseInt( dat.Heading ) + 23) / 45 );
    if (iheading > 7) { iheading = 0; }
    icon = new OpenLayers.Icon("img/metro_" + color + "_" + headingLookup[iheading] + "_fade.png", size, offset);
  } else {
    icon = new OpenLayers.Icon("img/underground_" + color + ".png", size, offset);
  }
  dat["osm_marker"] = new OpenLayers.Marker( lonlat, icon );
  dat["osm_marker"].events.register('mousedown', 
                                    dat["osm_marker"], 
                                    (function(xx) { return function() { handlePopup(xx); }; })(tripid) );
  dat["icon"] = icon;
  dat["size"] = size;
  dat["offset"] = offset;

  g_marker_layer.addMarker( dat["osm_marker"] );

}


function updateMarker(data, color) {
  var dirty = 0;
  var trips = data[color].TripList.Trips;

  for (x in trips) {
    if ("Position" in trips[x]) {
      var tripid = trips[x].TripID;
      if ( !( tripid in g_marker )) {
        //console.log("allocating");
        g_marker[ tripid ] = { Lat : 0, Long : 0, Color : color };
      }
      g_marker[ tripid ].Dirty = 0;
    }
  }

  for (x in trips) {
    if ("Position" in trips[x]) {

      var tripid = trips[x].TripID;

      g_marker[ tripid ].Timestamp = trips[x].Position.Timestamp;
      g_marker[ tripid ].Heading = trips[x].Position.Heading;
      g_marker[ tripid ].Dirty = 1;

      lat = trips[x].Position.Lat;
      lon = trips[x].Position.Long;


      if ( ( Math.abs(lat - g_marker[tripid].Lat) > 0.001 ) ||
           ( Math.abs(lon - g_marker[tripid].Long) > 0.001 ) ) {

        g_marker[ tripid ].Lat     = trips[x].Position.Lat;
        g_marker[ tripid ].Long    = trips[x].Position.Long;

        drawMarker( tripid, color );
      }


      dirty=1;

    } else { }
  }

  for (x in trips) {
    if ("Position" in trips[x]) {
      if (g_marker[ tripid ].Dirty == 0) {
        console.log("REMOVING")
        g_marker_layer.removeMarker( trips[x]["osm_marker"] );

        delete g_marker[ tripid ];
      }
    }
  }

  g_marker_layer.redraw();
}

function rtupdate(data) {

  //if (g_verbose) { console.log("++"); }

  if ("red" in data)    { updateMarker(data, "red"); }
  if ("blue" in data)   { updateMarker(data, "blue"); }
  if ("orange" in data) { updateMarker(data, "orange"); }

  // no green :(
  if ("green" in data) { updateMarker(data, "green"); }

}

var g_SERVER_ADDR = "bostontraintrack.com";

function setupRTStreams() {
  //g_socket = io('http://localhost:8181');
  g_socket = io('http://' + g_SERVER_ADDR + ':8181');
  g_socket.on('connect', function() {
    if (g_verbose) { console.log("connected!"); }
    g_socket.on('update', rtupdate );
    g_socket.on('disconnect', function() { console.log("disconnected"); });
  });
}

//
//--------------------------

function mapEvent(ev) {
  if (ev.type == "zoomend") {
    //console.log("zoomend! " + g_map.zoom);

    if ( g_map.zoom <= 12 )
    {
      //console.log("bonk");

      for (var bus_id in g_marker) {
        drawMarker( bus_id, g_marker[bus_id].Color );
      }

      drawStops();

      return;

      var dz = g_map.zoom - 12;

      scale_factor = Math.exp( Math.log(2) * (g_map.zoom-12) );
      console.log(">>> " , scale_factor);

      if (dz < -3) { return; }

      var count=0;
      for (var track_id in g_marker) {
        console.log("track_id: ", track_id);
        count++;

        var ico = g_marker[track_id].icon;
        var sz = g_marker[track_id].size;
        var ofst = new OpenLayers.Pixel(-(sz.w/2), -sz.h);

        sz = new OpenLayers.Size(scale_factor*sz.w, scale_factor*sz.h);
        ico.setSize(sz);
        ico.setOffset(ofst);

        g_marker[track_id].size = sz;
        g_marker[track_id].icon = ico;

        console.log(ico);
      }

      console.log("count:", count);

    } 
    else 
    {

      for (var bus_id in g_marker) {
        drawMarker( bus_id, g_marker[bus_id].Color );
      }
      drawStops();

      return;


      var count=0;
      for (var track_id in g_marker) {
        //console.log("track_id: ", track_id);
        count++;

        var ico = g_marker[track_id].icon;
        var sz = g_marker[track_id].size;
        var ofst = new OpenLayers.Pixel(-(sz.w/2), -sz.h);


        sz = new OpenLayers.Size( 36, 45 );
        ico.setSize(sz);
        ico.setOffset(ofst);

        g_marker[track_id].size = sz;
        g_marker[track_id].icon = ico;

        //console.log(ico);
      }


    }

  } 
  else if (ev.type == "move" ) {
    //console.log("move!");
  }
  else if (ev.type == "moveend" ) {
    //console.log("moveend!");
  }
  else if (ev.type == "movestart" ) {
    //console.log("movestart!");
  }

}

function drawStops( force ) {

  //console.log("??", g_map.zoom, g_stops);

  if (!force) {
    if ( g_map.zoom < 8 ) { return; }
  }


  for (var ind in g_stops) {
    var st = g_stops[ind];
    //var lonlat =  new OpenLayers.LonLat( st.longitude, st.latitude )
    var lonlat =  new OpenLayers.LonLat( st.lon, st.lat)
      .transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        g_map.getProjectionObject() // to Spherical Mercator Projection
      );

    //console.log("???");

    var scale_factor = 1.0;
    var stop_w = g_param.stop_w;
    var stop_h = g_param.stop_h;

    //console.log("stop>>>", stop_w, stop_h);

    if ( ( g_map.zoom <= 13 ) && ( g_map.zoom >= 8) )
    {
      scale_factor = Math.exp( Math.log(2) * (g_map.zoom-14) );
      stop_w *= scale_factor;
      stop_h *= scale_factor;
    }



    var size = new OpenLayers.Size(stop_w, stop_h);
    var offset = new OpenLayers.Pixel( -(size.w/2), -(size.h/2) );


    code = st.code;
    var icon = new OpenLayers.Icon("img/metro_T_fade.png", size, offset);
    if (/r/.test( code )) {
      icon = new OpenLayers.Icon("img/metro_T_red_fade.png", size, offset);
    } else if (/o/.test(code)) {
      icon = new OpenLayers.Icon("img/metro_T_orange_fade.png", size, offset);
    } else if (/b/.test(code)) {
      icon = new OpenLayers.Icon("img/metro_T_blue_fade.png", size, offset);
    }

    var stopMarker = new OpenLayers.Marker( lonlat, icon );

    if ("marker" in g_stops[ind]) {
      g_stop_layer.removeMarker( g_stops[ind].marker );
    }

    g_stops[ind].marker = stopMarker;
    g_stop_layer.addMarker( stopMarker );

  }

}

function initMap() {
  g_map = new OpenLayers.Map("mapdiv");
  //g_map = new OpenLayers.Map("mapdiv", { eventListeners: { "zoomend" : mapZoomEvent } } );

  g_map.events.register( "zoomend", g_map, mapEvent );
  g_map.events.register( "movestart", g_map, mapEvent );
  g_map.events.register( "move", g_map, mapEvent );
  g_map.events.register( "moveend", g_map, mapEvent );

  var transportattrib = '<b>Thunderforest Transport Map</b><br />A global public transport map<br /><br />'
                      + '<a href="http://www.thunderforest.com">Developer Information</a><img class="tf-logo" src="/images/tf-logo-36-inv.png"/>';

  var transport = new OpenLayers.Layer.OSM("Transport",
                                           ["http://a.tile.thunderforest.com/transport/${z}/${x}/${y}.png",
                                            "http://b.tile.thunderforest.com/transport/${z}/${x}/${y}.png",
                                            "http://c.tile.thunderforest.com/transport/${z}/${x}/${y}.png"],
                                           { displayOutsideMaxExtent: true, transitionEffect: 'resize'});

  g_map.addLayer(transport);

  //var lonLat = new OpenLayers.LonLat( -71.0636, 42.3581  )
  var lonLat = new OpenLayers.LonLat( -71.1136, 42.3981  )
        .transform(
          new OpenLayers.Projection("EPSG:4326"),
          g_map.getProjectionObject()
        );

  //var zoom=14;

  g_marker_layer = new OpenLayers.Layer.Markers( "Metro" );
  g_map.addLayer(g_marker_layer);
  g_map.setLayerIndex(g_marker_layer, 99);

  g_stop_layer = new OpenLayers.Layer.Markers( "Stops" );

  /*
  for (var ind in g_stops) {
    var st = g_stops[ind];
    //var lonlat =  new OpenLayers.LonLat( st.longitude, st.latitude )
    var lonlat =  new OpenLayers.LonLat( st.lon, st.lat)
      .transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        g_map.getProjectionObject() // to Spherical Mercator Projection
      );


    //var size = new OpenLayers.Size(32,37);
    var size = new OpenLayers.Size(15,18);
    //var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var offset = new OpenLayers.Pixel( -(size.w/2), -(size.h/2) );

    code = st.code;
    var icon = new OpenLayers.Icon("img/metro_T_fade.png", size, offset);
    if (/r/.test( code )) {
      icon = new OpenLayers.Icon("img/metro_T_red_fade.png", size, offset);
    } else if (/o/.test(code)) {
      icon = new OpenLayers.Icon("img/metro_T_orange_fade.png", size, offset);
    } else if (/b/.test(code)) {
      icon = new OpenLayers.Icon("img/metro_T_blue_fade.png", size, offset);
    }

    var stopMarker = new OpenLayers.Marker( lonlat, icon );

    g_stop_layer.addMarker( stopMarker );

  }
  */

  drawStops( true );
  g_map.addLayer(g_stop_layer);
  g_map.setLayerIndex( g_stop_layer, 0 )

  g_map.setCenter (lonLat, g_zoom);

}


$(document).ready( function() {
  initMap();
  setupRTStreams();
});

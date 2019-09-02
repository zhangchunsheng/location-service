var db = openDatabase('location', '1.0', 'location service', 2 * 1024 * 1024);

var banks = [
    ['分行营业部','浦东新区陆家嘴东路161号',121.515482,31.243189],
    ['外滩支行','黄浦区中山东一路16号',121.496408,31.243731],
    ['天山支行','长宁区天山路762号',121.408509,31.217524],
    ['张江支行','浦东新区科苑路88号',121.593255,31.217624],
    ['张杨支行','浦东新区张杨路810号',121.528149,31.234389],
    ['川北支行','虹口区四川北路1689号',121.489209,31.264056],
    ['徐家汇支行','徐汇区漕溪北路18号',121.44436,31.19892],
    ['松江支行','松江区人民路92号',121.234394,31.012407],
    ['四平支行','杨浦区四平路1396号',121.51346,31.287554],
    ['闵行支行','闵行区莘松路365号',121.378814,31.11107],
    ['南西支行','黄浦区南京西路128号',121.47881,31.239921],
    ['东方支行','浦东新区东方路902号',121.533696,31.229979],
    ['静安寺支行','静安区北京西路1700号',121.449961,31.232145],
    ['金桥支行','浦东新区金桥路1398号',121.594468,31.258351],
    ['新客站支行','闸北区天目西路455号',121.458628,31.252276],
    ['浦东大道支行','浦东新区浦东大道535号',121.526793,31.247327],
    ['外高桥支行','浦东新区外高桥富特西一路333号',121.59927,31.345112],
    ['江湾支行','虹口区丰镇路1号',121.487507,31.310418],
    ['淮中支行','黄浦区淮海中路398号18楼',121.478608,31.228465],
    ['大木桥支行','徐汇区肇嘉浜路333号',121.466978,31.208484],
    ['曹家渡支行','普陀区长寿路1118号',121.433815,31.236842],
    ['高安支行','徐汇区肇嘉浜路680号',121.455486,31.205864],
    ['田林支行','徐汇区田林路140号',121.41861,31.176826],
    ['宝山支行','宝山区牡丹江路1248号',121.494644,31.399331],
    ['长阳支行','杨浦区长阳路1441号',121.536463,31.273627],
    ['民生支行','浦东新区民生路600号',121.54896,31.245066],
    ['五角场支行','杨浦区黄兴路2000号',121.525253,31.300082],
    ['淮海支行','徐汇区淮海中路1155号',121.460544,31.220783],
    ['古北支行','长宁区水城南路75号',121.399182,31.203562],
    ['天钥桥支行','徐家汇区天钥桥路86号',121.44772,31.199242],
    ['大宁支行','闸北区广中路957号',121.460173,31.286119],
    ['延东支行','黄浦区延安东路700号',121.485823,31.235595],
    ['虹桥支行','长宁区遵义南路88号',121.412613,31.210287],
    ['虹口体育场支行','虹口区花园路32号',121.48492,31.275522],
    ['曹杨支行','普陀区曹杨路188号',121.428763,31.238934],
    ['金沙江路支行','普陀区金沙江路1759号',121.382501,31.237579],
    ['嘉定支行','嘉定区塔城路399号',121.254266,31.384779],
    ['华灵支行','宝山区华灵路1号',121.431264,31.276736],
    ['世纪大道支行','浦东新区世纪大道1589号',121.541684,31.231073],
    ['创智天地支行','杨浦区淞沪路333号',121.518792,31.311024],
    ['长乐支行','徐汇区长乐路801号',121.454036,31.222087],
    ['东大名支行','虹口区东大名路700号',121.509332,31.255632],
    ['豫园支行','黄浦区河南南路374号',121.495176,31.229553],
    ['杨思支行','浦东新区上南路3061号',121.504625,31.167233],
    ['奉贤支行','奉贤区南桥镇南奉公路9777号',121.464475,30.916492],
    ['福州路支行','黄浦区福州路646号',121.484999,31.238409],
    ['长宁支行','长宁区长宁路1268号',121.419521,31.223821],
    ['联洋支行','浦东新区芳甸路268-286号',121.564602,31.232504],
    ['延西支行','长宁区法华镇路555号',121.430453,31.212375],
    ['九亭支行','松江区九亭镇沪亭北路645号',121.321221,31.155558],
    ['宜山支行','徐汇区虹桥路355号',121.43755,31.199704],
    ['中山支行','黄浦区中山南路1867号',121.498327,31.208],
    ['吴中路支行','闵行区吴中路1169号',121.391222,31.181972],
    ['丽园支行','黄浦区丽园路1015号',121.478817,31.212028],
    ['常德支行','静安区常德路1227号',121.444194,31.246346],
    ['天目支行','闸北区天目东路258号',121.480956,31.254994],
    ['共和新路支行','宝山区共和新路5001号',121.451974,31.33001],
    ['七宝支行','闵行区七莘路2891号',121.357424,31.157049],
    ['龙茗路支行','闵行区龙茗路2209号',121.388408,31.163373],
    ['源深支行','浦东新区羽山路108号',121.54471,31.236057],
    ['金陵支行','黄浦区金陵东路569号',121.4876,31.232806],
    ['安亭支行','嘉定区曹安公路5598号',121.168579,31.295338],
    ['泰兴支行','静安区新闸路847号',121.465789,31.240618],
    ['人民广场支行','黄浦区南京西路456号',121.474861,31.237146],
    ['瑞虹支行','虹口区天宝路123号',121.50358,31.267749],
    ['中远两湾城支行','普陀区中潭路91弄3号',121.448225,31.259477],
    ['金钟路支行','长宁区金钟路999号',121.357632,31.226403]
];

var LocationService = {};

LocationService.getBankPOI = function(address, callback, city) {
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(address, callback, city);
};

LocationService.searchAddress = function(address, callback, city) {
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(address, callback, city);
};

LocationService.initBanks = function(callback) {
    for(var i = 0 ; i < banks.length ; i++) {
        (function(index) {
            LocationService.getBankPOI(banks[i][1], function(location, detail) {
                banks[index].push(location.lng);
                banks[index].push(location.lat);
                if(index == (banks.length - 1)) {
                    for(var i in banks) {
                        console.log("['"+banks[i][0]+"','"+banks[i][1]+"',"+banks[i][2]+","+banks[i][3]+"]");
                    }
                    callback();
                }
            }, '上海市');
        })(i);
    }
};

LocationService.isInit = function() {
    return localStorage.isInitData;
};

LocationService.initTable = function() {
    db.transaction(function(tx) {
        sql = "drop table if exists places";
        tx.executeSql(sql);

        var sql = "create table if not exists places(\
            place_id INTEGER RIMARY KEY,\
            city varchar(60) not null default '',\
            place_type INTEGER not null default 1,\
            place_name varchar(60) not null default '',\
            place_address varchar(255) not null default '',\
            latitude decimal(12,6) not null default 0,\
            longitude decimal(12,6) not null default 0,\
            create_time int(11) not null default 0,\
            update_time int(11) not null default 0,\
            status int(11) not null default 0\
        );";
        tx.executeSql(sql);

        sql = "delete from places";
        tx.executeSql(sql);

        var date = new Date();
        var time = parseInt(date.getTime() / 1000);
        var bank;
        for(var i in banks) {
            sql = "insert into places(city,place_type,place_name,place_address,longitude,latitude,create_time,status) values ('上海',1,?,?,?,?,?,1)";
            bank = banks[i];
            tx.executeSql(sql,[bank[0],bank[1],bank[2],bank[3],time]);
        }

        localStorage.isInitData = 1;
    });
};

LocationService.fixedData = function() {

};

// http://api.map.baidu.com/geocoder?address=%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E6%B5%A6%E4%B8%9C%E5%A4%A7%E9%81%93535%E5%8F%B7&output=json
LocationService.initMap = function() {
    LocationService.map = new BMap.Map("allmap");
    var point = new BMap.Point(121.487899, 31.249162);
    LocationService.map.centerAndZoom(point, 12);

    var marker, opts, infoWindow;
    for(var i in banks) {
        point = new BMap.Point(banks[i][2], banks[i][3]);
        marker = new BMap.Marker(point);
        LocationService.map.addOverlay(marker);

        opts = {
            width : 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title : banks[i][0], // 信息窗口标题
            enableMessage: true,// 设置允许信息窗发送短息
            message: ""
        };
        infoWindow = new BMap.InfoWindow(banks[i][1], opts);  // 创建信息窗口对象
        (function(marker, infoWindow, point) {
            marker.addEventListener("click", function() {
                LocationService.map.openInfoWindow(infoWindow, point); //开启信息窗口
            });
        })(marker, infoWindow, point);
    }

    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    /*
     缩放控件type有四种类型:
     BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；
     BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；
     BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮
     */

    LocationService.map.addControl(top_left_control);
    LocationService.map.addControl(top_left_navigation);
    LocationService.map.addControl(top_right_navigation);
};

LocationService.minDistancePoint = {
    distance: -1,
    place: {}
};

LocationService.reloadMap = function(location) {
    var walking = new BMap.WalkingRoute(LocationService.map, {renderOptions:{map: LocationService.map, autoViewport: true}});

    var startPoint = new BMap.Point(location.lng, location.lat);
    var endPoint = new BMap.Point(LocationService.minDistancePoint.place.longitude, LocationService.minDistancePoint.place.latitude);

    walking.search(startPoint, endPoint);

    $("#result").html("检索结果" + "<p/>名字：" + LocationService.minDistancePoint.place.place_name + "<p/>地点：" + LocationService.minDistancePoint.place.place_address);
};

LocationService.init = function() {
    if(!LocationService.isInit()) {
        console.log("init");
        LocationService.initTable();
    }
    LocationService.initMap();
};

LocationService.init();

$(document).ready(function() {
    $("#find").click(function() {
        var city = $("#city").val();
        var place_type = $("#place_type").val();
        var address = $("#address").val();

        LocationService.getBankPOI(address, function(location, detail) {
            if(typeof location == "undefined") {
                alert("没有该地址信息");
                return;
            }
            if(location == null) {
                alert("没有该地址信息");
                return;
            }
            if(!location.hasOwnProperty("lng")) {
                alert("没有该地址信息");
                return;
            }

            console.log(location);
            var distance = 0;
            var latitude = 0;
            var longitude = 0;
            var minDistance = 0;
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM places', [], function (tx, results) {
                    var len = results.rows.length, i;
                    for (i = 0; i < len; i++) {
                        latitude = results.rows[i].latitude;
                        longitude = results.rows[i].longitude;
                        distance = Math.round(6378.138*2*Math.asin(Math.sqrt(Math.pow(Math.sin((location.lat*Math.PI/180-latitude*Math.PI/180)/2),2)+Math.cos(location.lat*Math.PI/180)*Math.cos(latitude*Math.PI/180)*Math.pow(Math.sin((location.lng*Math.PI/180-longitude*Math.PI/180)/2),2)))*1000);
                        if(LocationService.minDistancePoint.distance == -1) {
                            LocationService.minDistancePoint = {
                                distance: distance,
                                place: results.rows[i]
                            }
                        }
                        if(distance < LocationService.minDistancePoint.distance) {
                            LocationService.minDistancePoint = {
                                distance: distance,
                                place: results.rows[i]
                            }
                        }
                    }
                    LocationService.reloadMap(location);
                });
            });
        }, city);
    });

    $("#findAll").click(function() {
        LocationService.initMap();
    });
});
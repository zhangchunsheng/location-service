var db = openDatabase('location', '1.0', 'location service', 2 * 1024 * 1024);

var banks = [
    ['虹桥天地支行','虹路29号'],
    ['青浦支行','城中西路1号'],
    ['周浦支行','年家浜路329号'],
    ['分行锦康路支行','锦康路258号'],
    ['黄金城道支行','黄金城道925号'],
    ['江湾支行','水电路1689号'],
    ['东安路支行','东安路599号'],
    ['浦江镇支行','江月路1800号'],
    ['宝地广场支行','荆州路419号'],
    ['金钟路支行','金钟路999号'],
    ['陆家嘴支行','陆家嘴东路161号'],
    ['塘桥支行','浦建路76号'],
    ['南方商城支行','沪闵路7876号'],
    ['紫竹高新开发区支行','东川路555号'],
    ['晨晖支行','碧波路889号'],
    ['七宝支行','七莘路2891号'],
    ['民生支行','民生路628号'],
    ['奉贤支行','南奉公路9777弄'],
    ['安亭支行','曹安公路5598号'],
    ['共和新路支行','共和新路5001号'],
    ['龙茗路支行','龙茗路2209号'],
    ['九亭支行','沪亭北路645号'],
    ['吴中路支行','虹井路120弄2号（虹井路先锋街路口）'],
    ['创智天地支行','淞沪路333号'],
    ['瑞虹支行','天宝路123号'],
    ['金沙江路支行','金沙江路1759号'],
    ['杨思支行','上南路3063号'],
    ['宝山支行','牡丹江路1248号'],
    ['曹家渡支行','长寿路1118号'],
    ['曹杨支行','曹杨路188号'],
    ['长乐支行','长乐路801号'],
    ['长宁支行','长宁路1302号'],
    ['长阳支行','长阳路1441号'],
    ['常德支行','常德路1227号'],
    ['川北支行','四川北路1689弄'],
    ['大连路支行','大连路1546号'],
    ['大木桥支行','肇家浜路333号'],
    ['大宁支行','广中路957号'],
    ['东大名支行','东大名路912号'],
    ['东方支行','世纪大道1192号'],
    ['福州路支行','福州路650号'],
    ['高安支行','肇嘉浜路680号'],
    ['古北支行','长宁区水城南路75号'],
    ['虹口体育场支行','虹口区花园路32号'],
    ['虹桥支行','长宁区威宁路375号'],
    ['花木支行','梅花路1067号'],
    ['华灵支行','华灵路1号'],
    ['淮海支行','汾阳路1号甲101-1'],
    ['淮中支行','淮海中路398号'],
    ['嘉定支行','塔城路399号'],
    ['江苏路支行','江苏路458号1楼'],
    ['金陵支行','金陵东路569号'],
    ['金桥支行','张杨路3583号'],
    ['静安寺支行','北京西路1465号国立大厦1楼'],
    ['丽园支行','丽园路1015号'],
    ['联洋支行','芳甸路300号'],
    ['闵行支行','莘松路365号'],
    ['南西支行','南京西路338号天安中心1楼'],
    ['浦东大道支行','浦东大道535号'],
    ['马当路支行','黄陂南路828号'],
    ['世纪大道支行','世纪大道1589号'],
    ['四平支行','四平路1396号'],
    ['松江支行','松江区新松江路1060号'],
    ['泰兴支行','新闸路847号'],
    ['天山支行','天山路762号'],
    ['天钥桥支行','天钥桥路86号'],
    ['田林支行','田林路140号'],
    ['外滩支行','中山东一路16号'],
    ['五角场支行','黄兴路2228号'],
    ['新客站支行','天目西路455号'],
    ['徐家汇支行','漕溪北路18号'],
    ['延西支行','法华镇路555号'],
    ['宜山支行','虹桥路355号'],
    ['豫园支行','河南南路378号'],
    ['源深支行','羽山路108号'],
    ['张江支行','张江高科技园区科苑路88号'],
    ['张杨支行','张杨路810号'],
    ['中山支行','中山南路1857-1877号'],
    ['中远两湾城支行','普陀区中潭路91弄3号'],
    ['分行营业部','陆家嘴环路1088号'],
    ['成山路支行','浦东新区锦绣路3088弄21-22号'],
    ['南翔支行','南翔镇真南路4368弄中冶祥腾城市广场1楼'],
    ['金山支行','金山区龙皓路1058号万达广场一楼'],
    ['协信星光广场支行','江场路1228弄22号，NL136'],
    ['唐镇支行（原世博园支行更名）','高科东路500弄8号'],
    ['自贸试验区分行','外高桥基隆路6号9F外高桥大厦'],
    ['顾村支行','宝山区陆翔路123号']
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

/*LocationService.initBanks(function () {

});*/

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
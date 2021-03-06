var db = openDatabase('location', '1.0', 'location service', 2 * 1024 * 1024);

var version = 2;

var banks = [
    ['虹桥天地支行','上海市闵行区苏虹路29号',121.32193210797796,31.201804631499215],
    ['青浦支行','城中西路1号',121.1179438705005,31.15232442617563],
    ['周浦支行','年家浜路329号',121.58466396799179,31.121212683297614],
    ['分行锦康路支行','锦康路258号',121.54274076758723,31.218452027029436],
    ['黄金城道支行','黄金城道925号',121.40103125431955,31.19999581354652],
    ['江湾支行','水电路1689号',121.48306617355932,31.309953515151193],
    ['东安路支行','东安路599号',121.46336909781155,31.192470735854055],
    ['浦江镇支行','江月路1800号',121.51321845825628,31.088789922507317],
    ['宝地广场支行','荆州路419号',121.51760930402105,31.26820526164143],
    ['金钟路支行','金钟路999号',121.35811643602183,31.226206704616796],
    ['陆家嘴支行','陆家嘴东路161号',121.51547167706865,31.243224688578135],
    ['塘桥支行','浦建路76号',121.52590566534678,31.214493718608264],
    ['南方商城支行','沪闵路7876号',121.41016554454175,31.139642228140925],
    ['紫竹高新开发区支行','东川路555号',121.45933462810514,31.02896722807549],
    ['晨晖支行','碧波路889号',121.59122030375639,31.202215768299787],
    ['七宝支行','七莘路2891号',121.35744412621207,31.156943056031785],
    ['民生支行','民生路628号',121.54956842844635,31.243875551792975],
    ['奉贤支行','南奉公路9777弄',121.46456635939525,30.91652950553775],
    ['安亭支行','曹安公路5598号',121.16838060686733,31.295446131168436],
    ['共和新路支行','共和新路5001号',121.45213573261265,31.32999612679525],
    ['龙茗路支行','龙茗路2209号',121.38839054711546,31.163355372356015],
    ['九亭支行','沪亭北路645号',121.32117104827871,31.15552111940754],
    ['吴中路支行','虹井路120弄2号（虹井路先锋街路口）',121.3734931823855,31.19604597648919],
    ['创智天地支行','淞沪路333号',121.5186331959381,31.311022473153812],
    ['瑞虹支行','天宝路123号',121.50349622528117,31.26763170313906],
    ['金沙江路支行','金沙江路1759号',121.38286383026198,31.23817294150704],
    ['杨思支行','上南路3063号',121.50464676689359,31.167235101699557],
    ['宝山支行','牡丹江路1248号',121.49464305527677,31.399487732287497],
    ['曹家渡支行','长寿路1118号',121.4337480413491,31.236904128200703],
    ['曹杨支行','曹杨路188号',121.42874029355485,31.23894234998676],
    ['长乐支行','长乐路801号',121.45407901895626,31.22211300754176],
    ['长宁支行','长宁路1302号',121.41954328723516,31.22380396927098],
    ['长阳支行','长阳路1441号',121.53650257749865,31.273679353801764],
    ['常德支行','常德路1227号',121.44424311350362,31.24632141251237],
    ['川北支行','四川北路1689弄',121.48858822304194,31.26444706305146],
    ['大连路支行','大连路1546号',121.51096309788356,31.27832766476215],
    ['大木桥支行','肇家浜路333号',121.46696839868484,31.208361889151735],
    ['大宁支行','广中路957号',121.4602740957702,31.28614911064031],
    ['东大名支行','东大名路912号',121.51179131759766,31.256412058019876],
    ['东方支行','世纪大道1192号',121.53320380999779,31.233271971760757],
    ['福州路支行','福州路650号',121.48490386049701,31.238306587809326],
    ['高安支行','肇嘉浜路680号',121.45541128777337,31.20580194304412],
    ['古北支行','长宁区水城南路75号',121.39922466492199,31.203609179348998],
    ['虹口体育场支行','虹口区花园路32号',121.4848261903077,31.275588801400925],
    ['虹桥支行','长宁区威宁路375号',121.39162354415433,31.219861590421147],
    ['花木支行','梅花路1067号',121.5675298557793,31.21710758085382],
    ['华灵支行','华灵路1号',121.43127857345131,31.27684449286979],
    ['淮海支行','汾阳路1号甲101-1',121.46261751523544,31.221066799848778],
    ['淮中支行','淮海中路398号',121.4784947049038,31.22833162011591],
    ['嘉定支行','塔城路399号',121.25426905013465,31.384801126868624],
    ['江苏路支行','江苏路458号1楼',121.4375341906668,31.224638434731652],
    ['金陵支行','金陵东路569号',121.48752157485481,31.232894747102574],
    ['金桥支行','张杨路3583号',121.58535356928432,31.26116541728963],
    ['静安寺支行','北京西路1465号国立大厦1楼',121.45444246168763,31.233540341968478],
    ['丽园支行','丽园路1015号',121.4785959843585,31.211979324120513],
    ['联洋支行','芳甸路300号',121.5643813560516,31.232692016508086],
    ['闵行支行','莘松路365号',121.37882449173969,31.111060353295343],
    ['南西支行','南京西路338号天安中心1楼',121.4762410423285,31.237758572511364],
    ['浦东大道支行','浦东大道535号',121.52686135281611,31.24677227855104],
    ['马当路支行','黄陂南路828号',121.48416139147285,31.217725535697785],
    ['世纪大道支行','世纪大道1589号',121.54162590846626,31.23102894025778],
    ['四平支行','四平路1396号',121.51346831474743,31.287536263020495],
    ['松江支行','松江区新松江路1060号',121.22352507225928,31.045341156954848],
    ['泰兴支行','新闸路847号',121.46583934364192,31.240647211697723],
    ['天山支行','天山路762号',121.40872608541969,31.21757594262978],
    ['天钥桥支行','天钥桥路86号',121.44767958841848,31.19925555942948],
    ['田林支行','田林路140号',121.4189190250922,31.17570430559478],
    ['外滩支行','中山东一路16号',121.49645336096422,31.243705578350575],
    ['五角场支行','黄兴路2228号',121.52412530826672,31.305664328269224],
    ['新客站支行','天目西路455号',121.4586758225221,31.252288284205164],
    ['徐家汇支行','漕溪北路18号',121.44447499400322,31.199023223752917],
    ['延西支行','法华镇路555号',121.43040291242663,31.211967163219768],
    ['宜山支行','虹桥路355号',121.437749133616,31.1995356113082],
    ['豫园支行','河南南路378号',121.49520122908336,31.229405061344828],
    ['源深支行','羽山路108号',121.54473371136113,31.23606044233102],
    ['张江支行','张江高科技园区科苑路88号',121.59391649677845,31.21666686927558],
    ['张杨支行','张杨路810号',121.52812094602255,31.23439013365203],
    ['中山支行','中山南路1857-1877号',121.49848507470564,31.208162109434813],
    ['中远两湾城支行','普陀区中潭路91弄3号',121.44813839436448,31.259542453280748],
    ['分行营业部','陆家嘴环路1088号',121.5123197143732,31.24828820125807],
    ['成山路支行','浦东新区锦绣路3088弄21号',121.54606076371815,31.186239146700757],
    ['南翔支行','南翔镇真南路4368弄中冶祥腾城市广场1楼',121.32852845516828,31.30289185443578],
    ['金山支行','金山区龙皓路1058号万达广场一楼',121.34202868444027,30.760255232630673],
    ['协信星光广场支行','江场路1228弄22号，NL136',121.46512414693048,31.304976079849613],
    ['唐镇支行（原世博园支行更名）','浦东新区高科东路500弄8号',121.65989103490723,31.21719182777655],
    ['自贸试验区分行','外高桥基隆路6号9F外高桥大厦',121.5938161578496,31.356506083866265],
    ['顾村支行','宝山区陆翔路123号',121.37811383910669,31.35167605003296]
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
    return localStorage.isInitData == version;
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

        localStorage.isInitData = version;
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
import React, { Component } from 'react';

import { Text, PropTypes } from 'react-native';

const FontMap = {
    favorfill: "\ue67d",
    goumai1: "\ue75c",
    buttonAdd: "\ue604",
    seckillIng: "\ue608",
    seckillForthcoming: "\ue609",
    productdetRight: "\ue60b",
    round2: "\ue677",
    round1: "\ue678",
    categoryBag: "\ue60c",
    categoryCosmetics: "\ue60d",
    categoryAppliances: "\ue60e",
    categoryBaby: "\ue60f",
    categoryFood: "\ue610",
    categoryHome: "\ue611",
    categoryFurniture: "\ue612",
    categoryFruit: "\ue613",
    categoryOverseas: "\ue614",
    meAddressLine: "\ue615",
    arrowsDown: "\ue616",
    arrowsRight: "\ue617",
    search: "\ue618",
    productdetCollect: "\ue619",
    arrowsUp: "\ue61a",
    topnavBack: "\ue61b",
    topnavShare: "\ue61c",
    close: "\ue61d",
    exceedChatting: "\ue61e",
    addressEdit: "\ue61f",
    groupPrompt: "\ue620",
    addressDelete: "\ue621",
    groupInfo: "\ue622",
    orderChoose: "\ue623",
    labelPostage: "\ue624",
    labelTopspeed: "\ue625",
    orderdetConnect: "\ue626",
    labelQuality: "\ue627",
    orderdetTel: "\ue628",
    productdetService: "\ue629",
    tagHot: "\ue62a",
    productdetStore: "\ue62b",
    columnFire1: "\ue62c",
    columnChoice1: "\ue62d",
    columnInform1: "\ue62e",
    columnRecommend: "\ue62f",
    columnCommend1: "\ue630",
    columnClock1: "\ue631",
    columnSeckill1: "\ue632",
    meAddress1: "\ue633",
    columnTag1: "\ue634",
    meLuckydraw1: "\ue635",
    meSet1: "\ue636",
    newSpec: "\ue637",
    newSpecial: "\ue638",
    newCountry: "\ue639",
    setOpinion: "\ue63a",
    setDeal: "\ue63b",
    setQA: "\ue63c",
    meFree: "\ue63d",
    orderDelivery: "\ue63e",
    meMessage: "\ue63f",
    meGroups: "\ue640",
    meCoupon: "\ue641",
    meTicket: "\ue642",
    orderGroups: "\ue643",
    orderPay: "\ue644",
    orderRated: "\ue645",
    orderTakedelivery: "\ue646",
    navHomeColour: "\ue647",
    navCategoryLine: "\ue648",
    navHomeLine: "\ue649",
    navMeLine: "\ue64a",
    navOverseashopColour: "\ue64b",
    navOverseashopLine: "\ue64d",
    navNewLine: "\ue64e",
    navCategoryColour: "\ue64f",
    navMeColour: "\ue650",
    columnTime: "\ue651",
    meHeart: "\ue652",
    addresschoose: "\ue653",
    refresh: "\ue654",
    dailyBerserk: "\ue655",
    columnHeart: "\ue601",
    navNewColourCopy: "\ue679",
    evaluationStar: "\ue602",
    evaluationCamera: "\ue603",
    evaluationStarLine: "\ue605",
    iconfontmobanFuzhi: "\ue600",
    setClean: "\ue60a",
    couponIllustration: "\ue64c",
    magnify: "\ue607",
    pending: "\ue656",
    refundonly: "\ue657",
    finish: "\ue658",
    salesreturn: "\ue659",
    success: "\ue65a",
    remind: "\ue65b",
    uploadimage: "\ue65c",
    refunds: "\ue65d",
    more: "\ue65f",
    officialcustomerservice: "\ue660",
    seckillTimeFrame: "\ue606",
    seckillClock: "\ue65e",
    storeRemind: "\ue661",
    countDown: "\ue662",
    sweep: "\ue663",
    recorded: "\ue665",
    majorsuitClearance: "\ue666",
    qq: "\ue667",
    circleoffriends: "\ue668",
    microblog: "\ue669",
    scan: "\ue66a",
    wechat: "\ue66b",
    zone: "\ue66c",
    appraise: "\ue66d",
    svgFoot: "\ue66f",
    contacts: "\ue670",
    friends: "\ue66e",
    chat: "\ue671",
    chatN: "\ue672",
    microphone: "\ue673",
    speedgroup: "\ue664",
    meCustomsevice: "\ue6ac",
    meGroupsNew: "\ue6ad",
    broadcast: "\ue674",
    Categories: "\ue675",
    groupShare: "\ue6ae",
    markDiamond: "\ue676",
    markAlarmclock: "\ue67a",
    markFruit: "\ue67b",
    markSkirt: "\ue67c",
    myfriendsShare: "\ue6af",
    markFruit_: "\ue67e",
    markSkirt_: "\ue67f",
    markDiamond_: "\ue680",
    markAlarmclock_: "\ue681",
    seeAll: "\ue6b0",
    fire: "\ue684",
    set: "\ue6df",
    chatFeedback: "\ue6b1",
    lotteryWinner: "\ue682",
    recentlyGroup: "\ue683",
    playingicon: "\ue685",
    categoryMan: "\ue686",
    categoryUnderwear: "\ue687",
    categoryHot: "\ue688",
    categoryShoes: "\ue689",
    categoryRecharge: "\ue68a",
    markZhe_: "\ue68b",
    markZhe: "\ue68c",
    markBag: "\ue68d",
    markBag_: "\ue68e",
    gexingqianming: "\ue68f",
    xingbienv: "\ue690",
    xingbienan: "\ue691",
    markAddress1: "\ue695",
    markFree1: "\ue697",
    play: "\ue692",
    stop: "\ue693",
    replay_: "\ue694",
    groupsMark: "\ue696",
    couponMark: "\ue698",
    driftbottle_: "\ue699",
    refundMark: "\ue69a",
    btnCancel: "\ue69b",
    edit: "\ue69d",
    iconPayForAnother: "\ue69c",
    iconSendForFriend: "\ue69e",
    iconRefreshFailed: "\ue69f",
    couponPop: "\ue6a0",
    navigationFoot: "\ue6a1",
    sendMessageMail: "\ue6a2",
    sendMessageMicroph: "\ue6a3",
    sendMessageBack: "\ue6a4",
    wechatMarkIconSea: "\ue6a5",
    btnQuestion: "\ue6a6",
    bubble: "\ue6a7",
    sendMessageTimeout: "\ue6a8",
    cardsMuseum: "\ue6a9",
    cardsMuseumCancel: "\ue6aa",
    jiazai: "\ue791",
    seckillTitleIconF: "\ue6ab",
    intimeTryNew: "\ue6b2",
    loginPhoneNumber: "\ue6b3",
    cardsBuyArrow: "\ue6b4",
    allGoods: "\ue6b5",
    informationLine: "\ue6b6",
    priceUpDown: "\ue6b7",
    fireBackground_: "\ue6b8",
    spreadSocialcircle: "\ue6b9",
    pddfriendsSocialci: "\ue6ba",
    mallShare: "\ue6bc",
    mallShareBold: "\ue6bb",
    myRating: "\ue6bd",
    sort: "\ue6be",
    hot: "\ue6bf",
    recent: "\ue6c0",
    recommendTemplate: "\ue6c1",
    iconfontNumber_: "\ue6c2",
    iconfontNumber1: "\ue6c3",
    iconfontNumber2: "\ue6c4",
    iconfontNumber3: "\ue6c5",
    iconfontNumber4: "\ue6c6",
    iconfontNumber5: "\ue6c7",
    iconfontNumberRmb: "\ue6c8",
    iconfontNumber6: "\ue6c9",
    iconfontNumber7: "\ue6ca",
    iconfontNumber8: "\ue6cb",
    iconfontNumber9: "\ue6cc",
    good: "\ue6cd",
    kanjiatuan: "\ue6ce",
    kanjia: "\ue6cf",
    Nosound: "\ue6d0",
    volume: "\ue6d1",
    Mute: "\ue6d2",
    chatContactAvatar: "\ue6d3",
    goodLine: "\ue6d4",
    comment: "\ue6d5",
    iconSuccessLine: "\ue6d6",
    iconBusiness: "\ue6d8",
    tupianiconCopy: "\ue6d9",
    navbarBell: "\ue6d7",
    Template: "\ue6da",
    key: "\ue6db",
    volumeN_: "\ue6dc",
    iconFilter: "\ue6dd",
    iconSearch: "\ue6de",
    shishangchuanda: "\ue6e0",
    shishangchuanda_: "\ue6e1",
    newproducts: "\ue6e4",
    daifenxiang: "\ue6e5",
    star: "\ue6e6",
    daifahuo: "\ue6e7",
    daifukuan: "\ue6e8",
    wodeyouhuiquan: "\ue6e9",
    shouhuodizhi: "\ue6ea",
    xinrenlibao: "\ue6eb",
    tuikuanshouhou: "\ue6ec",
    daishouhuo: "\ue6ed",
    daipingjia: "\ue6ee",
    wodehaoyou: "\ue6ef",
    lishiliulan: "\ue6f0",
    guanfangkefu: "\ue6f1",
    wodepingjia: "\ue6f2",
    wodeshoucang: "\ue6f3",
    yaoqinghaoyou: "\ue6f4",
    kanjia1: "\ue6f5",
    shezhi: "\ue6f6",
    pindanqia: "\ue6f7",
    jinrimanfan: "\ue6f8",
    hongbao: "\ue6f9",
    shenqingbuchang: "\ue6fa",
    _: "\ue6e2",
    jiantou: "\ue6e3",
    setMessage: "\ue6fb",
    gengduo: "\ue6fc",
    anquanzhifu1: "\ue6fe",
    pinglun: "\ue6fd",
    youtu: "\ue6ff",
    tabNewActive: "\ue701",
    tabChat: "\ue702",
    tabHome: "\ue703",
    tabMine: "\ue704",
    tabSearch: "\ue705",
    tabNew: "\ue706",
    tabHomeActive: "\ue707",
    tabChatActive: "\ue708",
    tabMineActive: "\ue709",
    tabSearchActive: "\ue70a",
    huitouke1: "\ue70b",
    liulan: "\ue70c",
    sousuo: "\ue70d",
    goumai: "\ue70e",
    tixianmingxi: "\ue700",
    manfanyouhuiquanicon: "\ue70f",
    friendsSocialciLar: "\ue710",
    pricelow: "\ue711",
    pricehigh: "\ue712",
    shopping: "\ue713",
    tubiaozhizuomoban_: "\ue714",
    tubiaozhizuomobanyihuifu_: "\ue715",
    qiandaolingxianjin_: "\ue716",
    chaoguo: "\ue717",
    wodedaoju: "\ue718",
    jiagegengyou: "\ue719",
    shangxin: "\ue71a",
    zhengpinbaozhang: "\ue71b",
    dailyTaskMusic: "\ue71c",
    dailyTaskVideo: "\ue71d",
    dailyTaskPause: "\ue71e",
    loveShoppingFlash: "\ue71f",
    friendStar: "\ue720",
    friendStarLine: "\ue721",
    weixinFanhuishangye: "\ue723",
    huidaodingbu: "\ue722",
    quanchangbaoyouicon: "\ue724",
    baoxiandanbao: "\ue725",
    xiaoshifahuo: "\ue726",
    huaban: "\ue728",
    friendsContactsBoo: "\ue727",
    myfriendsTagFemale: "\ue729",
    myfriendsTagMale: "\ue72a",
    jinrituijian_: "\ue72b",
    nv: "\ue72c",
    nan: "\ue72d",
    icon_: "\ue72f",
    butieshixiao_: "\ue730",
    baozhangneirong: "\ue731",
    yibutie_: "\ue732",
    quxiaobutie_: "\ue733",
    liuchengicon_: "\ue72e",
    orderSuccessMp: "\ue734",
    xuanzhong: "\ue735",
    Template1: "\ue736",
    dianpushoucang: "\ue737",
    dianpukefu: "\ue738",
    dianpuyouhuiquan: "\ue739",
    shangpinshoucang: "\ue73a",
    dianpushoucangGerenzhongxin: "\ue73b",
    shouhuodizhiGerenzhongxin: "\ue73c",
    shezhiGerenzhongxin: "\ue73d",
    guanfangkefuGerenzhongxin: "\ue73e",
    wodepingjiaGerenzhongxin: "\ue73f",
    wodehaoyouGerenzhongxin: "\ue740",
    shuoming: "\ue741",
    youhuiquanweikong: "\ue742",
    weinitiaoxuanTuijian: "\ue743",
    iconpinxiaoquanXianxing: "\ue744",
    jingxuan: "\ue745",
    shipin: "\ue746",
    jiafang: "\ue747",
    riyong: "\ue748",
    muying: "\ue749",
    gengduo_: "\ue74b",
    jubaogaishangpin_: "\ue74c",
    yijianfankui_: "\ue74d",
    changjianwenti_: "\ue74a",
    xinrenlibaoxianGerenzhongxin: "\ue74e",
    dianpuyouhuiquan1: "\ue74f",
    dianpuweishoucang: "\ue751",
    kefuxiaoxi: "\ue752",
    dianpuyishoucang: "\ue753",
    kefuxiaoxiFanbai: "\ue750",
    shangxiangKefu_: "\ue754",
    shaixuanduihao: "\ue755",
    shangxiangShoucangYishoucang: "\ue756",
    shangxiangShoucangWeishoucang_: "\ue757",
    tihuan_: "\ue758",
    youhuiquanlideicon_: "\ue759",
    meiyong: "\ue767",
    dingbutuijianzengjiahaoyou: "\ue75a",
    shouciliuchenghaoyouicon: "\ue75b",
    liuliang_: "\ue75d",
    jiayouqia_: "\ue75e",
    shipin_: "\ue75f",
    shouji_: "\ue760",
    youxi_: "\ue761",
    qita_: "\ue762",
    QQ_: "\ue763",
    dingdan: "\ue764",
    chazhao: "\ue765",
    qita: "\ue766",
    touxiangdouditu: "\ue768",
    ruowangicon: "\ue769",
    youyong: "\ue76a",
    lingquanzhongxin: "\ue76b",
    selectSocial: "\ue76c",
    Slice: "\ue777",
    dianpuxiaodian: "\ue778",
    paishipin: "\ue77a",
    xiaoshexiangji: "\ue77b",
    bofangicon: "\ue77c",
    fasongzanting: "\ue77d",
    xiangji: "\ue77e",
    shandian: "\ue780",
    shanguandengguan: "\ue781",
    zanwusousuojieguoKongtai: "\ue771",
    weijinsousuoshangpintishiKongtai: "\ue783",
    zanwutuikuanshouhoudingdanKongtai: "\ue76d",
    meiyoushoucangguodeshangpinKongtai: "\ue76e",
    sousuoWushaixuanjieguoKongtai: "\ue76f",
    huanmeiyoudengluKongtai: "\ue770",
    huanmeiyouliaotianjiluKongtai: "\ue772",
    zanwuyouhuiquanzanKongtai: "\ue774",
    meiyouxiangguandingdanKongtai: "\ue775",
    zanwushoucangdizhiKongtai: "\ue776",
    meiyouliulanguodeshangpinKongtai: "\ue77f",
    pinxiaoquanMeiyoudongtaiKongtai: "\ue773",
    lishiliulanGerenzhongxin: "\ue782",
    meiyouhaoyouKongtai: "\ue784",
    meiyoushoucanggengxinKongtai: "\ue785",
    flowWidgetCoupon: "\ue786",
    flowWidgetRecommen: "\ue787",
    flowWidgetBrand: "\ue788",
    phone: "\ue78c",
    shoucang: "\ue789",
    shangxiang: "\ue78d",
    flowWidgetPullRef: "\ue78e",
    mangguoTV_: "\ue78f",
    pinxiaoquanMeiyoudongtaiH: "\ue790",
    shoujiwangluoyouwentiKongtai: "\ue779",
    packageRedpacketEm: "\ue792",
    Bduanshuzi: "\ue793",
    Bduanshuzi1: "\ue794",
    Bduanshuzi2: "\ue795",
    Bduanshuzi3: "\ue796",
    guanbi1: "\ue797",
    tousu: "\ue798",
    Bduanminus: "\ue78a",
    Bduanplus: "\ue78b",
    bianjigerenxinxi: "\ue799",
    1: "\ue79a",
    openLike: "\ue79b",
    2: "\ue79c",
    gouxuan: "\ue79d",
    tubiaozhizuomoban1: "\ue79e",
    tubiaozhizuomoban2: "\ue79f",
    gerenzhongxinShoujidenglu: "\ue7a0"
};

class Icon extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['small', 'normal', 'large']),
        color: PropTypes.string,
        name: PropTypes.string.isRequired,
	};
    static defaultProps = {
        size: 'normal',  // 'small'、'large' number
        color: '#707070',
        name: '',
    };

    returnFontSize = (size) => {
        if (typeof(size) === Number) {
            return size;
        }
        const index = ['normal', 'small', 'large'].indexOf(size) || 0;
        const numArr = [20, 15, 30];
        return numArr[index]; 
    }

    render() {
        const { name, size, color, style={} } = this.props;
        const IconFontStyle = {
            fontSize: this.returnFontSize(size),
            color: color,
            fontFamily: 'Iconfont'
        };
        return (
            <Text
                style={[IconFontStyle, style]}
            >{FontMap[name]}</Text>
        );
    }
}

export default Icon;
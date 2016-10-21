
var Util = require('../Util/Util');

//静态参数
const Static = function () { }
Static.prototype = {
    Summary: {
        BusinessCard: {
            companyName: "杭州某某环保设备有限公司",
            items: [{ name: '地 址：', detail: '杭州市莫干山路2168号', key: Util.getGuid() },
            { name: '电 话：', detail: '0571-88888888', key: Util.getGuid() },
            { name: '传 真：', detail: '0571-88888888', key: Util.getGuid() },
            { name: '联系人：', detail: '杨军(经理)', key: Util.getGuid() },
            { name: '手 机：', detail: '15888888888', key: Util.getGuid() },
            { name: '网 址：', detail: 'www.aaaa.com', key: Util.getGuid() },
            { name: '邮 箱：', detail: 'bos@mail.com', key: Util.getGuid() },
            ],
            title_cn: '联系我们',
            title_en: 'Contact Us',
        },
        NewsCard: {
            items: [{
                key: Util.getGuid(),
                time: Date.now(),
                link: '/a.html',
                title: 'title1'
            }, {
                key: Util.getGuid(),
                time: Date.now(),
                link: '/b.html',
                title: 'title2'
            }, {
                key: Util.getGuid(),
                time: Date.now(),
                link: '/c.html',
                title: 'title3'
            }, {
                key: Util.getGuid(),
                time: Date.now(),
                link: '/d.html',
                title: 'title4'
            }, {
                key: Util.getGuid(),
                time: Date.now(),
                link: '/e.html',
                title: 'title5'
            },
            ],
            title_cn: '新闻动态',
            title_en: 'News',
        },
        IntroduceCard: {
            title_cn: '公司简介',
            title_en: 'About Us',
            companyName: "杭州某某环保设备有限公司",
            text: "是一家专业生产各类环保设备的企业。是集环保工程技术研发、产品制造、销售和技术服务于一体的科技生产型企业。发展至今，公司贯彻以诚信为本、以高新技术为支点、以市场需求为导向的经营方针，以市场需求为导向的经营方针，研发了数项具有较高技术水平和推广应用价值的" +
            "高新技术产品，获得多项国实用专利，产品行销全国，品种配套齐全，技术服务到位，司贯彻以诚信为本、以高新技术为支点、以市场需求为导向的经营方针有较完善的市场..."
        },
        Product: {
            title_cn: '产品展示',
            title_en: 'Product',
            items: [{
                key: Util.getGuid(),
                link: 'tab-chrome',
                title: 'Chrome',
                heading: 'Google Chrome',
                inc: '使用最广的浏览器',
                detail: 'Google Chrome，又称Google浏览器，是一个由Google（谷歌）公司开发的网页浏览器。 该浏览器是基于其他开源软件所撰写，包括WebKit，目标是提升稳定性、速度和安全性，并创造出简单且有效率的使用者界面。',
                imgPath: "images/chrome-logo.jpg",
                alt: "Chrome"
            }, {
                key: Util.getGuid(),
                link: 'tab-firefox',
                title: 'Firefox',
                heading: 'Mozilla Firefox',
                inc: '美丽的狐狸',
                detail: 'Mozilla Firefox，中文名通常称为“火狐”或“火狐浏览器”，是一个开源网页浏览器， 使用Gecko引擎（非ie内核），支持多种操作系统如Windows、Mac和linux。',
                imgPath: "images/firefox-logo.jpg",
                alt: "Firefox"
            }, {
                key: Util.getGuid(),
                link: 'tab-chrome',
                title: 'Chrome',
                heading: 'Google Chrome',
                inc: '使用最广的浏览器',
                detail: 'Google Chrome，又称Google浏览器，是一个由Google（谷歌）公司开发的网页浏览器。 该浏览器是基于其他开源软件所撰写，包括WebKit，目标是提升稳定性、速度和安全性，并创造出简单且有效率的使用者界面。',
                imgPath: "images/chrome-logo.jpg",
                alt: "Chrome"
            }, {
                key: Util.getGuid(),
                link: 'tab-firefox',
                title: 'Firefox',
                heading: 'Mozilla Firefox',
                inc: '美丽的狐狸',
                detail: 'Mozilla Firefox，中文名通常称为“火狐”或“火狐浏览器”，是一个开源网页浏览器， 使用Gecko引擎（非ie内核），支持多种操作系统如Windows、Mac和linux。',
                imgPath: "images/firefox-logo.jpg",
                alt: "Firefox"
            }]
        },
    },
    Footer: {
        return: '回到顶部',
        copyRight: '© 2016 xxx公司'
    },
    Product1: {
        items: [{
            key: Util.getGuid(),
            title: 'Product1',
            article: '黄历天气支持20000多个国内外城市天气预报，为您提供精准实时的天气预报、24小时天气、15天气预报、空气质量，紫外线，穿衣等10大生活指数，让您时刻掌握天气变化，冷暖早知道。',
            img: "images/chrome-logo.jpg",
            alt: '',
        }, {
            key: Util.getGuid(),
            title: 'Product1',
            article: '黄历天气支持20000多个国内外城市天气预报，为您提供精准实时的天气预报、24小时天气、15天气预报、空气质量，紫外线，穿衣等10大生活指数，让您时刻掌握天气变化，冷暖早知道。',
            img: "images/chrome-logo.jpg",
            alt: '',
        }, {
            key: Util.getGuid(),
            title: 'Product1',
            article: '黄历天气支持20000多个国内外城市天气预报，为您提供精准实时的天气预报、24小时天气、15天气预报、空气质量，紫外线，穿衣等10大生活指数，让您时刻掌握天气变化，冷暖早知道。',
            img: "images/chrome-logo.jpg",
            alt: '',
        }, {
            key: Util.getGuid(),
            title: 'Product1',
            article: '黄历天气支持20000多个国内外城市天气预报，为您提供精准实时的天气预报、24小时天气、15天气预报、空气质量，紫外线，穿衣等10大生活指数，让您时刻掌握天气变化，冷暖早知道。',
            img: "images/chrome-logo.jpg",
            alt: '',
        }],
    },
    Product2: {

    },
    Joinus:
    [{
        job: '销售',
        responsibilitys: [
            '有较强的客户开拓能力，挖掘国内与海外合作伙伴，提升产品海外收入，完成业绩考核指标',
            '能不断收集与关注海外商业合作的模式，保持对业界的信息敏感度，并进行分析和判断，将有效的合作模式适用于公司产品',
            '能独立的项目运作能力，能独立完成一个新项目的商业化流程以及推进，并有效产出',
            '对内有较强的沟通判断能力，能及时协调内部资源与合作方的需求'
        ],
        needs: [
            '有出色的英文能力，英语要求六级或以上，口语流利',
            '有3-5年的互联网从业经验',
            '有从事知名海外互联网公司销售或者媒体岗位等工作资历者优先',
            '要求工作积极，学习能力强，适应性好，自我驱动型'
        ]
    },
    {
        job: '技术',
        responsibilitys: [
            '有较强的客户开拓能力，挖掘国内与海外合作伙伴，提升产品海外收入，完成业绩考核指标',
            '能不断收集与关注海外商业合作的模式，保持对业界的信息敏感度，并进行分析和判断，将有效的合作模式适用于公司产品',
            '能独立的项目运作能力，能独立完成一个新项目的商业化流程以及推进，并有效产出',
            '对内有较强的沟通判断能力，能及时协调内部资源与合作方的需求'
        ],
        needs: [
            '有出色的英文能力，英语要求六级或以上，口语流利',
            '有3-5年的互联网从业经验',
            '有从事知名海外互联网公司销售或者媒体岗位等工作资历者优先',
            '要求工作积极，学习能力强，适应性好，自我驱动型'
        ]
    }],
    Questions:
    [{
        question: '我有一个问题',
        answer:
        '有较强的客户开拓能力，挖掘国内与海外合作伙伴，提升产品海外收入，完成业绩考核指标' +
        '能不断收集与关注海外商业合作的模式，保持对业界的信息敏感度，并进行分析和判断，将有效的合作模式适用于公司产品' +
        '能独立的项目运作能力，能独立完成一个新项目的商业化流程以及推进，并有效产出' +
        '对内有较强的沟通判断能力，能及时协调内部资源与合作方的需求',
    },
    {
        question: '这是第二个问题',
        answer:
        '有较强的客户开拓能力，挖掘国内与海外合作伙伴，提升产品海外收入，完成业绩考核指标' +
        '能不断收集与关注海外商业合作的模式，保持对业界的信息敏感度，并进行分析和判断，将有效的合作模式适用于公司产品' +
        '能独立的项目运作能力，能独立完成一个新项目的商业化流程以及推进，并有效产出'
    }],
    About: {
        article: '慕课网隶属于北京慕课科技中心(有限合伙)，是一家从事互联网免费教学的网络教育公司。秉承“开拓、创新、公平、分享”的精神， 将互联网特性全面的应用在教育领域，致力于为教育机构及求学者打造一站式互动在线教育品牌。'
    },
     News: {
        items: [{
            id:'1',
            time: Date.now(),
            link: '/a.html',
            title: '污水处理的程度分级介绍',
            article:"是一家专业生产各类环保设备的企业。是集环保工程技术研发、产品制造、销售和技术服务于一体的科技生产型企业。发展至今，公司贯彻以诚信为本、以高新技术为支点、以市场需求为导向的经营方针，以市场需求为导向的经营方针，研发了数项具有较高技术水平和推广应用价值的" +
            "高新技术产品，获得多项国实用专利，产品行销全国，品种配套齐全，技术服务到位，司贯彻以诚信为本、以高新技术为支点、以市场需求为导向的经营方针有较完善的市场..."
        }, {
            id:'2',
            time: Date.now(),
            link: '/b.html',
            title: 'title2',
            article:'2'
        }, {
            id:'3',
            time: Date.now(),
            link: '/c.html',
            title: 'title3',
            article:'3'
        }, {
            id:'4',
            time: Date.now(),
            link: '/d.html',
            title: 'title4',
            article:'4'
        }, {
            id:'5',
            time: Date.now(),
            link: '/e.html',
            title: 'title5',
            article:'5'
        },
        ],
        title_cn: '新闻动态',
        title_en: 'News',
    },
}

module.exports = new Static();
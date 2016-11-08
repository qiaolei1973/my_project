import React from 'react';

//im1xx
class IM1xx extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <table className='table table-hover table-bordered table-striped'>
                        <thead>
                            <th></th>
                            <th>IM100便携式</th>
                            <th>IM110便携式</th>
                        </thead>
                        <tbody>
                            <tr><td>工作原理</td><td>单管电容</td><td>单管电容</td></tr>
                            <tr><td>测量要素</td><td>负氧离子，温度，湿度</td><td>负氧离子，正离子，温度，湿度</td></tr>
                            <tr><td>气流速度</td><td>2.60米/秒</td><td>2.60米/秒</td></tr>
                            <tr><td>离子分辨率</td><td>10个/cm3</td><td>5个/cm3</td></tr>
                            <tr><td>离子迁移率</td><td>1</td><td>1或0.4</td></tr>
                            <tr>
                                <td>数据精度</td>
                                <td><p>空气离子：±10%</p><p>温度：±0.5℃</p><p>湿度：3%</p><p>迁移率:±10%</p></td>
                                <td><p>空气离子：±8%</p><p>温度：±0.5℃</p><p>湿度：3%</p><p>迁移率:±5%</p></td>
                            </tr>
                            <tr><td>离子档位控制</td><td>自动档位</td><td>自动档位</td></tr>
                            <tr>
                                <td>离子测量范围</td>
                                <td><p>三档离子浓度检测范围：</p><p>0～3×10<sup>4</sup>(个/cm<sup>3</sup>)</p><p>0～3×10<sup>5</sup>(个/cm<sup>3</sup>)</p><p>0～3×10<sup>6</sup>(个/cm<sup>3</sup>)</p></td>
                                <td><p>三档离子浓度检测范围：</p><p>0～3×10<sup>4</sup>(个/cm<sup>3</sup>)</p><p>0～3×10<sup>5</sup>(个/cm<sup>3</sup>)</p><p>0～3×10<sup>6</sup>(个/cm<sup>3</sup>)</p></td>
                            </tr>
                            <tr><td>感应电极</td><td>能独立拆卸、清洁、更换</td><td>能独立拆卸、清洁、更换</td></tr>
                            <tr><td>进风口面积</td><td>587平方毫米，前进风，后出风</td><td>587平方毫米，前进风，后出风</td></tr>
                            <tr><td>数据有效性</td><td>污损分析</td><td>污损分析</td></tr>
                            <tr><td>取样方式</td><td>主动吸气</td><td>主动吸气</td></tr>
                            <tr><td>分析方式</td><td>间歇平均</td><td>间歇平均/连续平均</td></tr>
                            <tr><td>刷新频率</td><td>1分钟</td><td>连续/1分钟/10分钟</td></tr>
                            <tr><td>通信接口</td><td>RS232</td><td>RS232,GPRS</td></tr>
                            <tr><td>数据寿命</td><td>十年</td><td>十年</td></tr>
                            <tr><td>数据保存长度</td><td>连续1个月</td><td>连续3个月</td></tr>
                            <tr><td>实时时钟误差</td><td>5分钟/月</td><td>5分钟/月</td></tr>
                            <tr><td>报警功能</td><td>脏污报警</td><td>脏污报警</td></tr>
                            <tr><td>电源规格</td><td>交流220V</td><td>交流220V</td></tr>
                            <tr><td>电池容量</td><td>12.6V/2500mAH锂电池</td><td>12.6V/2500mAH锂电池</td></tr>
                            <tr><td>功耗</td><td>&lt;2W</td><td>&lt;2W</td></tr>
                            <tr><td>保护功能</td><td>电源防雷，结露保护</td></tr>
                            <tr><td>软件系统</td><td>RS232数据接收软件，CS架构远程观测软件，Web服务软件</td></tr>
                            <tr><td>数据接口</td><td>数据可以保存为数据库\EXCEL\TXT格式</td><td>数据可以保存为数据库\EXCEL\TXT格式</td></tr>
                            <tr>
                                <td>额定工作环境</td>
                                <td><p>温度： -20～+50℃</p><p>湿度： 0～90%RH</p></td>
                                <td><p>温度： －30～+60℃</p><p>湿度： 0～100%RH</p></td>
                            </tr>
                            <tr><td>其它工作环境</td><td>大气压：500hPa～1100hPa</td></tr>
                            <tr><td>尺寸</td><td>220*270*115（mm）</td><td>220*270*115（mm）</td></tr>
                            <tr><td>重量</td><td>4Kg</td><td>4Kg</td></tr>
                            <tr><td>安装方式</td><td>三角架</td></tr>
                            <tr><td>附件</td><td>软件，手册，数据线，托盘，三角架</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

module.exports = IM1xx;
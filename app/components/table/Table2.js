import React from 'react';

//im1xx
class IM1xx extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const { data } = this.props
        console.log('data: ', data);
        const columnNum = 2;
        //table宽度
        const columnWidth = 80 / (columnNum - 1) + '%'
        const createTH = (_th, index) => {
            const key = 'table_th_' + index;
            if (index === 0) return (<th style={{ width: '20%' }} key={key + Math.random()}>{_th}</th>)
            return (<th style={{ width: columnWidth }} key={key + Math.random()}>{_th} </th>)
        }
        const createTR = (_tr, index) => {
            const creatTD = (_td, td_index) => {
                const td_key = 'table_td_' + td_index;
                if (typeof _td === 'string')
                    return (<td key={td_key + Math.random()}>{_td}</td>)
            }
            return (
                <tr key={'table_tr' + index + Math.random()}>
                    {creatTD(_tr.key)}
                    {creatTD(_tr.value)}
                </tr>
            )
        }
        return (
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>参数</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(createTR)}
                </tbody>
            </table>
        )
    }
}

module.exports = IM1xx; 

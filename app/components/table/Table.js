import React from 'react';

//im1xx
class IM1xx extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const {data} = this.props
        const {head, body} = data
        const columnNum = head.length
        //table宽度
        const columnWidth = 80 / (columnNum - 1) + '%'
        const createTH = (_th, index) => {
            const key = 'table_th_' + index;
            if (index === 0) return (<th style={{ width: '20%' }} key={key+Math.random()}>{_th}</th>)
            return (<th style={{ width: columnWidth }} key={key+Math.random()}>{_th} </th>)
        }
        const createTR = (_tr, index) => {
            const creatTD = (_td, td_index) => {
                const td_key = 'table_td_' + td_index;
                if (typeof _td === 'string')
                    return (<td key={td_key+Math.random()}>{_td}</td>)
                else if (_td instanceof Array) {
                    return (
                        <td>
                            {_td.map((_p, p_index) => {
                                const p_key = 'table_p' + p_index;
                                return (<p key={p_key+Math.random()}>{_p}</p>)
                            })
                            }
                        </td>
                    )
                }
            }
            return (
                <tr key={'table_tr' + index+Math.random()}>
                    {_tr.map(creatTD)}
                </tr>
            )
        }
        return (
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    <tr>
                        {head.map(createTH)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(createTR)}
                </tbody>
            </table>
        )
    }
}

module.exports = IM1xx; 

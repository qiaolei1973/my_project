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
            if (index === 0) return (<th style={{ width: '20%' }}>{_th}</th>)
            return (<th style={{ width: columnWidth }}>{_th} </th>)
        }
        const createTR = (_tr, index) => {
            const creatTD = (_td) => {
                if (typeof _td === 'string')
                    return (<td>{_td}</td>)
                else if (_td instanceof Array) {
                    return (
                        <td>
                            {_td.map((_p) => {
                                return (<p>{_p}</p>)
                            })
                            }
                        </td>
                    )
                }
            }
            return (
                <tr>
                    {_tr.map(creatTD)}
                </tr>
            )
        }
        return (
            <table className='table table-hover table-bordered table-striped'>
                <thead>
                    {head.map(createTH)}
                </thead>
                <tbody>
                    {body.map(createTR)}
                </tbody>
            </table>
        )
    }
}

module.exports = IM1xx;
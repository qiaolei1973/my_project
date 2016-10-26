import React from 'react';
import axios from "axios";
//新闻动态
class AdminModal extends React.Component {
    constructor(prop) {
        super(prop);
        this.click = () => {
            let name = document.getElementsByName('user[name]')[0].value
            let password = document.getElementsByName('user[password]')[0].value
            axios.post('/login',{
                name:name,
                password:password
            })
                .then((response) => {
                    var status = response.data.status;
                    if (status === 0) {
                        sessionStorage.setItem('__user__', JSON.stringify(name))
                        return window.location.href = '/admin'
                    }
                    window.location.href = '/'

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    render() {
        const data = this.props.data;
        return (
            <div id='signinModal' className='modal fade' tabIndex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>登陆</div>
                        <div className='modal-body'>
                            <div className='form-group'>
                                <label htmlFor='signinName'>用户名</label>
                                <input id='signinName' className='form-control' name='user[name]' type='text' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='signinPasssword'>密码</label>
                                <input id='signinPasssword' className='form-control' name='user[password]' type='text' />
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-success' type='button' onClick={this.click}>确定</button>
                            <button className='btn btn-default' type='button' data-dismiss='modal'>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = AdminModal;
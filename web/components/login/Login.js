import React from 'react';
//新闻动态
class Login extends React.Component {
    constructor(prop) {
        super(prop);
    }
    render() {
        const data = this.props.data;
        return (
            <div id='signinModal' className='modal fade' >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <form method='POST' action='http://localhost:3000/login'>
                            <div className='modal-header'>登陆</div>
                            <div className='modal-body'>
                                <div className='form-group'>
                                    <label htmlFor='signinName'>用户名</label>
                                    <input id='signinName' className='form-control' name='user[name]' type='text'/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='signinPasssword'>密码</label>
                                    <input id='signinPasssword' className='form-control' name='user[password]' type='text'/>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-success' type='submit'>确定</button>
                                <button className='btn btn-default' type='button' data-dismiss='modal'>取消</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Login;
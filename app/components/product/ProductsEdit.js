import React from 'react';
import cssModules from 'react-css-modules';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { Modal as AntModal, Form, Table, Input, Button, Icon, Upload, Row, Col } from 'antd';
import DemoPic from './DemoPic';
import { fetchProducts, addProduct, updateProduct } from '../../actions/productAction';
import './style.scss';

const FormItem = Form.Item;
class EditForm extends React.Component {
  state = {
    imageUrl: null,
  };
  uuid = this.props.record ? this.props.record.params.length : 0;
  @autobind
  handleSubmit(e) {
    const { handleOk, form, record } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      } else {
        handleOk();
      }
      const newRecord = form.getFieldsValue();
      if (record) {
        this.props.dispatch(updateProduct(newRecord));
      } else {
        this.props.dispatch(updateProduct(newRecord));
      }
      handleOk();
    });
  }
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }
  @autobind
  add() {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(this.uuid);
    this.uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { record } = this.props;
    const { imageUrl } = this.state;
    let i = 0;
    const initialValue = record ? record.params.reduce((v, k) => {
      return v.concat(i++);
    }, []) : [];
    getFieldDecorator('keys', { initialValue });
    const keys = getFieldValue('keys');
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? '参数' : ''}
          required={false}
          key={k}
        >
          {getFieldDecorator(`params[${k}][key]`, {
            validateTrigger: ['onChange', 'onBlur'],
            initialValue: record && record.params[index] ? record.params[index].key : null,
            rules: [{
              required: true,
              whitespace: true,
              message: "请填入参数名称",
            }],
          })(
            <Input placeholder="参数名称" style={{ width: '40%', marginRight: 8 }} />
          )}
          {getFieldDecorator(`params[${k}][value]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "请填入具体参数",
            }],
            initialValue: record && record.params[index] ? record.params[index].value : null,
          })(
            <Input placeholder="具体参数" style={{ width: '40%', marginRight: 8 }} />
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="名称"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: '不能为空',
            }],
            initialValue: record ? record.name : '',
          })(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="内容"
        >
          {getFieldDecorator('content', {
            initialValue: record ? record.content : '',
          })(<Input type="textarea"
            autosize={{ minRows: 12 }}
            onChange={this.textareaChange} />)}
        </FormItem>
        {formItems}
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> 添加参数
          </Button>
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit" >
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

@connect((store) => {
  return {
    products: store.product.products
  }
})
export default class extends React.Component {

  state = {
    modalVis: false,
    record: null,
  };

  columns = [
    { title: '产品名称', dataIndex: 'name', key: 'name' },
    {
      title: '产品图片', dataIndex: 'pic', key: 'pic',
      render: (path, record, index) => (
        <DemoPic _id={record._id} url={record.pic} />
      )
    },
    { title: '介绍内容', dataIndex: 'content', key: 'content' },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <a href="" onClick={(e) => this.handleEdit(e, record)}>修改</a>
      ),
    },
  ];

  @autobind
  handleEdit(e, record) {
    e.preventDefault();
    console.log('record: ', record);
    this.setState({ modalVis: true, record });
  }
  @autobind
  handleCancel() {
    this.setState({ modalVis: false });
  }

  @autobind
  handleOk() {
    this.setState({ modalVis: false });
    fetchProducts();
  }

  @autobind
  handleModalCancel() {
    this.setState({ modalVis: false });
  }
  @autobind
  handleAddClick() {
    this.setState({
      record: null,
      modalVis: true,
    });
  }

  @autobind
  handleBack() {
    location.href = '/admin';
  }

  getDataSource() {
    const { products } = this.props;
    const dataSource = products;
    return dataSource;
  }

  componentWillMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { modalVis, record } = this.state;
    const dataSource = this.getDataSource();
    const isLoading = !dataSource.length;
    const WrappedEditForm = Form.create({})(EditForm);
    const ConnectEditForm = connect(() => ({ record, handleOk: this.handleOk }))(WrappedEditForm);

    return (
      <div className="container">
        <p className="btn-row">
          <Button onClick={this.handleBack}>返回</Button>
          <Button type="primary" onClick={this.handleAddClick}>新增</Button>
        </p>
        <div className="content">
          <AntModal
            visible={modalVis}
            record={record}
            onCancel={this.handleCancel}
            footer={null}
          >
            <div className="product-form">
              <ConnectEditForm />
            </div>
          </AntModal>
          <Table
            bordered
            size="small"
            rowKey="_id"
            columns={this.columns}
            dataSource={dataSource}
            loading={isLoading}
          >
          </Table>
        </div>
      </div>
    );
  }
}

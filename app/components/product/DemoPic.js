import React from 'react';
import { Upload, Icon, Modal } from 'antd';
import { BACK } from '../../../config/api'

export default class DemoPic extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: []
    };

    componentWillMount() {
        const { url } = this.props;
        url && this.setState({
            fileList: [{
                uid: -1,
                status: 'done',
                url
            }]
        })
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const { _id } = this.props;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    data={{ _id }}
                    action={`${BACK}/product/addImage`}
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length === 1 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}
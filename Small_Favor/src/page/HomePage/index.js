import { Statistic, Form, Icon, Input, Button, Card, Table, Alert, Typography, Row, Col, Avatar, Tag, Modal, InputNumber, Upload } from "antd";
const { Text } = Typography;
import Style from "../style.less";
const { TextArea } = Input;

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}
@Form.create()
export default class index extends React.Component {
	state = {
		visible: false,
		title: "",
		previewVisible: false,
		previewImage: "",
		fileList: [
			{
				uid: "-1",
				name: "image.png",
				status: "done",
				url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
			},
			{
				uid: "-2",
				name: "image.png",
				status: "done",
				url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
			},
		],
	};
	componentDidMount() {}

	showModal = (e) => {
		console.log(e);
		this.setState({
			visible: true,
			title: `Add ${e}`,
		});
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	UploadhandleCancel = () => this.setState({ previewVisible: false });

	handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		this.setState({
			previewImage: file.url || file.preview,
			previewVisible: true,
		});
	};

	handleChange = ({ fileList }) => this.setState({ fileList });

	render() {
		const { getFieldDecorator } = this.props.form;
		const { previewVisible, previewImage, fileList } = this.state;
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		return (
			<div>
				<Row>
					<Row>
						<Col span={5} offset={1}>
							<Card title="Send Request">
								<div style={{ textAlign: "center" }}>
									<div>
										<Avatar
											size={64}
											shape="square"
											style={{ backgroundColor: "#7DCFB6" }}
											icon="sound"
											onClick={() => {
												this.showModal("owing");
											}}
										/>
										<div style={{ marginTop: "10px" }}>Add owing</div>
									</div>
									<div>
										<Avatar
											size={64}
											shape="square"
											style={{ backgroundColor: "#00B2CA", marginTop: "30px" }}
											icon="smile"
											onClick={() => {
												this.showModal("owed");
											}}
										/>
										<div style={{ marginTop: "10px" }}>Add owed</div>
									</div>
									<div>
										<Avatar
											size={64}
											shape="square"
											style={{ backgroundColor: "#1D4E89", marginTop: "30px" }}
											icon="message"
											onClick={() => {
												this.showModal("Request");
											}}
										/>
										<div style={{ marginTop: "10px" }}>Add Request</div>
									</div>
								</div>
							</Card>
						</Col>
						<Col span={17}>
							<Card title="Request">
								<Card title="Request" actions={[<Icon type="edit" key="edit" />, <a>I accept</a>]}>
									<div>
										<Avatar style={{ backgroundColor: "#FBD1A2" }} size="large">
											J
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
									</div>
									<p style={{ marginTop: "10px", fontSize: "18px", color: "#000000", marginLeft: "50px" }}>
										I need someone who can help me clean up my swimming pool,I will give you a chocolate😬
									</p>
									<p style={{ marginTop: "10px", fontSize: "18px", color: "#000000", marginLeft: "50px" }}>
										<Tag color="#87d068">Remuneration</Tag>
										<span>chocolate</span>
									</p>
									<p style={{ marginTop: "10px", fontSize: "18px", color: "#000000", marginLeft: "50px" }}>
										<Tag color="#87d068">Quantity</Tag>
										<span>chocolate</span>
									</p>
								</Card>
							</Card>
						</Col>
					</Row>
				</Row>
				<Modal title={this.state.title} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
					<Form labelCol={{ span: 6 }} wrapperCol={{ span: 17 }} onSubmit={this.handleSubmit}>
						<Form.Item label="Note">
							{getFieldDecorator("note", {
								rules: [{ required: true, message: "Please input your note!" }],
							})(<TextArea rows={4} />)}
						</Form.Item>
						<Form.Item label="Remuneration">
							{getFieldDecorator("Remuneration", {
								rules: [{ required: true, message: "Please input your note!" }],
							})(<Input />)}
						</Form.Item>
						<Form.Item label="Quantity">
							{getFieldDecorator("Quantity", {
								rules: [{ required: true, message: "Please input your note!" }],
							})(<InputNumber />)}
						</Form.Item>
						<div className="clearfix">
							<Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList} onPreview={this.handlePreview} onChange={this.handleChange}>
								{fileList.length >= 3 ? null : uploadButton}
							</Upload>
							<Modal visible={previewVisible} footer={null} onCancel={this.UploadhandleCancel}>
								<img alt="example" style={{ width: "100%" }} src={previewImage} />
							</Modal>
						</div>
					</Form>
				</Modal>
			</div>
		);
	}
}

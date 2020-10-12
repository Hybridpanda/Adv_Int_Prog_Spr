import { Statistic, Form, Icon, Input, Button, Card, Table, Alert, Typography, Row, Col, Avatar, Tag } from "antd";
const { Text } = Typography;
import Style from "../style.less";
@Form.create()
export default class index extends React.Component {
	state = {};
	componentDidMount() {}

	render() {
		return (
			<div>
				<Row>
					<Row>
						<Col span={22} offset={1}>
							<Card title="Request">
								<Card title="Request">
									<div>
										<Avatar style={{ backgroundColor: "#FBD1A2" }} size="large">
											J
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
									</div>
									<p style={{ marginTop: "10px", fontSize: "18px", color: "#000000", marginLeft: "50px" }}>I bought Kylie a coffee today😬</p>
									<div>
										<Row gutter={16}>
											<Col span={8}>
												<Card>
													<img alt="example" width="100%" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2302847556,1984576247&fm=26&gp=0.jpg" />
												</Card>
											</Col>
										</Row>
									</div>
								</Card>
								<Card title="Request">
									<div>
										<Avatar style={{ backgroundColor: "#00B2CA" }} size="large">
											K
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Kate</Text>
									</div>
									<p style={{ marginTop: "10px", fontSize: "18px", color: "#000000", marginLeft: "50px" }}>I bought Kylie a coffee today😬</p>
									<div>
										<Row gutter={16}>
											<Col span={8}>
												<Card>
													<img alt="example" width="100%" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
												</Card>
											</Col>
										</Row>
									</div>
								</Card>
								<Card title="Request">
									<div>
										<Avatar style={{ backgroundColor: "#F79256" }} size="large">
											J
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
									</div>
									<p style={{ marginTop: "10px", fontSize: "18px", color: "#000000", marginLeft: "50px" }}>I bought Kylie a coffee today😬</p>
									<div>
										<Row gutter={16}>
											<Col span={8}>
												<Card>
													<img alt="example" width="100%" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
												</Card>
											</Col>
										</Row>
									</div>
								</Card>
							</Card>
						</Col>
					</Row>
				</Row>
			</div>
		);
	}
}

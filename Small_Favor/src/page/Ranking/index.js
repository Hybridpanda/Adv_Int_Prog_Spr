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
							<Card title="Ranking">
								<Card>
									<div>
										<Avatar style={{ backgroundColor: "#FBD1A2" }} size="large">
											1
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
									</div>
								</Card>
								<Card>
									<div>
										<Avatar style={{ backgroundColor: "#1D4E89" }} size="large">
											2
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
									</div>
								</Card>
								<Card>
									<div>
										<Avatar style={{ backgroundColor: "#00B2CA" }} size="large">
											3
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
									</div>
								</Card>
								<Card>
									<div>
										<Avatar style={{ backgroundColor: "#7DCFB6" }} size="large">
											3
										</Avatar>
										<Text style={{ marginLeft: "10px", fontSize: "20px" }}>Jack</Text>
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

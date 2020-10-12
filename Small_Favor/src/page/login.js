import { Statistic, Form, Icon, Input, Button, Card, Table, Alert, Typography, Row, Col } from "antd";

@Form.create()
export default class index extends React.Component {
	state = {};
	componentDidMount() {
		this.props.history.push({ pathname: "/HomePage" });
	}
	getPage = () => {
		this.props.history.push({ pathname: "/HomePage" });
	};

	render() {
		return (
			<div>
				<Button onClick={this.getPage}>1111</Button>
			</div>
		);
	}
}

import { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer } = Layout;
import Link from "umi/link";
export default class BasicLayout extends Component {
	render() {
		return (
			<Layout>
				<Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor: "#ffffff" }}>
					<Menu theme="light" mode="horizontal" style={{ lineHeight: "64px", marginLeft: "300px", fontSize: "25px", fontWeight: "600", color: "#666666" }}>
						<Menu.Item key="1">
							<Link to="/HomePage">Home</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/Owing">Owing</Link>
						</Menu.Item>
						<Menu.Item key="3">
							<Link to="/Owed">Owed</Link>
						</Menu.Item>
						<Menu.Item key="4">
							<Link to="/Request">Request</Link>
						</Menu.Item>
						<Menu.Item key="5">
							<Link to="/Ranking">Ranking</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content style={{ padding: "0 50px", marginTop: 70, minHeight: document.documentElement.clientHeight - 110 }}>{this.props.children}</Content>
			</Layout>
		);
	}
}

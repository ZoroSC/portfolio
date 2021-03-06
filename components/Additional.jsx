import { Card, Text } from 'theme-ui';

import { Component } from "react";

export default class Additional extends Component {
	render() {
		return (
			<Card className={this.props.className || "item"} sx={{ px: 2, py: 2}}>
				<Text className="project-title" sx={{
					px: 2,
					py: 1,
					color: '#4CD936',
					textTransform: 'uppercase',
					letterSpacing: '0.1em',
				}}>{this.props.title}</Text>
				<a className="project-description" href={this.props.url} target="_blank">{this.props.description}</a>
			</Card>
		)
	}
}
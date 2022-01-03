import React, { Component } from "react";

export default class EmojiCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(evt) {
		navigator.clipboard.writeText(this.props.emoji);
		this.setState({ copied: true });
		setTimeout(() => this.setState({ copied: false }), 5000);
	}
	render() {
		const entity = this.props;
		return (
			<div className="Card">
				<div className="emoji">{entity.emoji}</div>
				<div className="name">
					<span id="first">Name</span>
					<span id="second">{entity.name}</span>
				</div>
				<div className="short-name">
					<span id="first">Short name</span>
					<span id="second">{entity.shortname}</span>
				</div>
				<div className="unicode">
					<span id="first">Unicode</span>
					<span id="second">{entity.unicode}</span>
				</div>
				<div className="html">
					<span id="first">HTML code</span>
					<span id="second">{entity.html}</span>
				</div>
				<div className="category">
					<span id="first">Categoty </span>
					<span id="second">{entity.category}</span>
				</div>
				<div className="copy" onClick={this.handleClick}>
					{this.state.copied ? "Copied!" : "Copy"}
				</div>
			</div>
		);
	}
}

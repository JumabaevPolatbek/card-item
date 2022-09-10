import React from 'react';
// import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: '',
			text: '',
			color: '',
		};
		this.getCard = this.getCard.bind(this);
		const cardStyle = {
			width: '400px',
			padding: '10px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-end',
			backgroundColor: '#fff',
			border: '1px solid #000',
		};
		this.cardStyle = cardStyle;
		this.styleDiv = this.styleDiv.bind(this);
		this.bgc = this.bgc.bind(this);
	}
	getCard() {
		var rndNum =
			Math.round(Math.random() * 10) === 0
				? 1
				: Math.round(Math.random() * 10);
		fetch(`https://jsonplaceholder.typicode.com/comments/${rndNum}`)
			.then((response) => response.json())
			.then((json) =>
				this.setState({
					author: json.name,
					text: json.body,
					color: this.bgc(),
				})
			);
		return rndNum;
	}
	bgc() {
		var rndNum =
			Math.round(Math.random() * 10) === 0
				? 1
				: Math.round(Math.random() * 10);
		var arrColor = [
			'yellow',
			'green',
			'blue',
			'red',
			'orange',
			'whiteblue',
			'aqua',
			'blueviolet',
			'burlywood',
			'darkkhaki',
		];
		return arrColor[rndNum];
	}
	componentDidMount() {
		this.getCard();
	}
	styleDiv() {
		const divStyle = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			backgroundColor: this.state.color,
		};
		return divStyle;
	}
	render() {
		return (
			<div style={this.styleDiv()}>
				<div style={this.cardStyle}>
					<p>{this.state.text}</p>
					<p>{this.state.author}</p>
					<button onClick={this.getCard}>Next Card</button>
				</div>
			</div>
		);
	}
}
export default App;

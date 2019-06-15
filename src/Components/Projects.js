import React from 'react'

class Projects extends React.Component {
	render() {
		return(
			<div>
				<h1>Click <a style={{ 'text-decoration': 'none', color: 'cornflowerblue' }} href="https://chelkuhs.github.io/guild_recruit"> here </a> to see my first project</h1>
				<h3>This is a website based on helping World of Warcraft players<br />find a guild for them. In a guild, players gather together to<br />raid the latest content, fight opposing faction players in PvP<br />combat, or just hangout and talk. </h3>
				<h1>Click <a style={{ 'text-decoration': 'none', color: 'cornflowerblue' }} href="https://chelkuhs.github.io/tweet_component"> here </a> to see my second project</h1>
				<h3>This is a website based on a Tweet on Twitter. I used React to<br />help me use different components and build a mock Tweet<br />component, similar to one you'd see on Twitter.</h3> 
			</div>
		)
	}
}

export default Projects
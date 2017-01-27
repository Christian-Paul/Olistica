import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { List, ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import React, { Component } from 'react';
import SocialMood from 'material-ui/svg-icons/social/mood';
import ActionAccessibility from 'material-ui/svg-icons/action/accessibility';
import { Link } from 'react-router'
import LocalLibrary from 'material-ui/svg-icons/maps/local-library';
import GoogleLogin from 'react-google-login';

const UserMenu = (props) => (
    <IconMenu
    	{...props}
		iconButtonElement={<IconButton iconStyle={{color: '#fff'}}><NavigationMoreVert /></IconButton>}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Settings" />
		<MenuItem primaryText="Help & feedback" />
		<Divider />
		<MenuItem primaryText="Sign out" onTouchTap={props.signOut} />
    </IconMenu>
)

const responseGoogle = (response) => {
  console.log(response);
}


class Navbar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			dockOpen: false
		}

		this.closeDock = this.closeDock.bind(this);
		this.toggleDock = this.toggleDock.bind(this);
	}
	closeDock() {
		this.setState({ dockOpen: false })
	}
	toggleDock() {
		this.setState({ dockOpen: !this.state.dockOpen })
	}
	render() {
		return (
			<div>
				<AppBar
					title='Olistica'
					style={{
						position: 'fixed',
						top: 0,
						backgroundColor: '#0097a7'
					}}
					titleStyle={{cursor: 'default'}}
					iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
					onLeftIconButtonTouchTap={this.toggleDock}
					showMenuIconButton={this.props.userIsAuthenticated}
					iconElementRight={
						this.props.userIsAuthenticated ? <UserMenu signOut={this.props.signOut} /> : <GoogleLogin clientId="696320046142-po33f20q5n669k31o48mr05kucs39p39.apps.googleusercontent.com" buttonText="SIGN IN" onSuccess={this.props.signIn} onFailure={responseGoogle} className='sign-in-button' />
					}
				/>
				<Drawer
					docked={false}
					open={this.state.dockOpen}
					onRequestChange={(open) => this.setState({dockOpen: open})}
				>
					<AppBar
						zDepth={0}
						title='Olistica'
						style={{backgroundColor: '#fff'}}
						titleStyle={{
							cursor: 'default',
							color: 'rgba(0, 0, 0, 0.870588)'
						}}
						iconElementLeft={<IconButton iconStyle={{fill: 'rgba(0, 0, 0, 0.870588)'}}><NavigationMenu /></IconButton>}
						onLeftIconButtonTouchTap={this.toggleDock}
					/>
					<List>
						<Link to='/weight'>
							<ListItem leftIcon={<ActionAccessibility />} primaryText='Weight Tracker' onTouchTap={this.closeDock}></ListItem>
						</Link>
						<ListItem leftIcon={<LocalLibrary />} primaryText='Book Collection' onTouchTap={this.closeDock}></ListItem>
						<ListItem leftIcon={<SocialMood />} primaryText='Guided Meditation' onTouchTap={this.closeDock}></ListItem>
					</List>
				</Drawer>
			</div>
		)
	}
};

export default Navbar

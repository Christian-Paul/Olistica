import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';
import SocialMood from 'material-ui/svg-icons/social/mood';
import ActionAccessibility from 'material-ui/svg-icons/action/accessibility';
import LocalLibrary from 'material-ui/svg-icons/maps/local-library';

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
		<MenuItem primaryText="Sign out" />
    </IconMenu>
)

const Navbar = React.createClass({
	getInitialState: function() {
		return ({
			signedIn: true,
			dockOpen: false
		})
	},
	signIn: function() {
		// send request to server
	},
	closeDock: function() {
		this.setState({ dockOpen: false })
	},
	toggleDock: function() {
		this.setState({ dockOpen: !this.state.dockOpen })
	},
	render: function() {
		return (
			<div>
				<AppBar
					title='Olistica'
					titleStyle={{cursor: 'default'}}
					iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
					onLeftIconButtonTouchTap={this.toggleDock}
					showMenuIconButton={this.state.signedIn}
					iconElementRight={this.state.signedIn ? <UserMenu /> : <FlatButton label="Sign in" secondary={true} onTouchTap={this.signIn} />}
				/>
				<Drawer
					docked={false}
					open={this.state.dockOpen}
					onRequestChange={(open) => this.setState({dockOpen: open})}
				>
					<AppBar
						title='Olistica'
						titleStyle={{cursor: 'default'}}
						iconStyleLeft={{color: '#000'}}
						iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
						onLeftIconButtonTouchTap={this.toggleDock}
					/>
					<List>
						<ListItem leftIcon={<ActionAccessibility />} primaryText='Weight Tracker' onTouchTap={this.closeDock}></ListItem>
						<ListItem leftIcon={<LocalLibrary />} primaryText='Book Collection' onTouchTap={this.closeDock}></ListItem>
						<ListItem leftIcon={<SocialMood />} primaryText='Guided Meditation' onTouchTap={this.closeDock}></ListItem>
					</List>
				</Drawer>
			</div>
		)
	}

});

export default Navbar
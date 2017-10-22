import React from 'react';
import {
	View,
} from 'react-native';
import WishList from '../components/WishList';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

function Ranking() {
	return (
		<View style={style.container}>
			<WishList />
		</View>
	);
}

export default Ranking;

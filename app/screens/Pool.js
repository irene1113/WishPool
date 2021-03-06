import React from 'react';
import { View } from 'react-native';
import MeTabs from './MeTabs';
import StatusBarBackground from '../components/common/StatusBarBackground/StatusBarBackground';

const style = {
	container: {
		flex: 1,
	},
	statusBarColor: {
		backgroundColor: '#AFBE31',
	},
};

function Pool() {
	return (
		<View style={style.container}>
			<StatusBarBackground style={style.statusBarColor} />
			<MeTabs />
		</View>
	);
}

export default Pool;

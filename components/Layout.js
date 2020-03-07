import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Layout() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<Text style={styles.text}>Header</Text>
				</View>

				<View style={{ flexDirection: 'row', height: 100 }}>
					<View style={[styles.bgRed, styles.button]}>
						<Text style={styles.text}>Button</Text>
					</View>

					<View style={[styles.bgBlue, styles.button]}>
						<Text style={styles.text}>Button</Text>
					</View>

					<View style={[styles.bgGreen, styles.button]}>
						<Text style={styles.text}>Button</Text>
					</View>
				</View>
			</View>

			<View style={styles.content}>
				<Text>Content</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		backgroundColor: 'grey',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		height: 100,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	bgRed: {
		backgroundColor: 'red',
	},
	bgBlue: {
		backgroundColor: 'blue',
	},
	bgGreen: {
		backgroundColor: 'green',
	},
	text: {
		color: 'white',
	},
	content: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

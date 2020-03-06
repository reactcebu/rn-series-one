import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
// import Counter from './components/Counter';
import Header from './components/Header';

ListItem = ({ record, deleteRow }) => {
	return (
		<View key={record.id} style={styles.record}>
			<Text style={styles.label}>{record.label}</Text>
			<Button color="orange" title={'Delete'} onPress={() => deleteRow(record.id)} />
		</View>
	);
};

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: [{ id: 1, label: 'Default' }],
			input: '',
		};
	}

	saveTodo = () => {
		let newTodo = {
			id: Date.now(),
			label: this.state.input,
		};

		this.setState(prevState => ({
			todo: [...prevState.todo, newTodo],
			input: '',
		}));
	};

	deleteTodo = id => {
		let filteredTodo = this.state.todo.filter(row => row.id !== id);
		this.setState({
			todo: filteredTodo,
		});
	};

	render() {
		return (
			<View style={{ flex: 1}}>
				<Header/>

				<View style={styles.inputContainer}>
					<TextInput
						value={this.state.input}
						style={styles.input}
						placeholder={'Enter goal here . . '}
						onChangeText={value => this.setState({input: value})}
					/>
					<Button title="ADD ITEM" onPress={()=>this.saveTodo()} />
				</View>

				<FlatList
					data={this.state.todo}
					renderItem={({ item }) => <ListItem record={item} deleteRow={() => this.deleteTodo(item.id)} />}
					keyExtractor={item => item.id.toString()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#cacaca',
		padding: 12,
		flexDirection: 'row',
	},
	input: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 4,
		fontSize: 16,
	},
	record: {
		backgroundColor: '#E9E9E9',
		marginHorizontal: 12,
		marginVertical: 4,
		padding: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
	},
});

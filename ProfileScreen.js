class ProfileScreen extends React.Component {

  static navigationOptions = {

    title: ({ state }) => `${state.params.name}'s Profile!`,

    header: ({ state, setParams }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
        <Button
          title={state.params.editing ? 'Done' : 'Edit'}
          onPress={() => setParams({editing: state.params.editing ? false : true})}
        />
      ),
    }),
  };
  render() {
    return(
      <Text style={ styles.buttonText }>GO GO GO</Text>
    );
  }
}

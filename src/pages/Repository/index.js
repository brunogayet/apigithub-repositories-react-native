import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

function Repository({ navigation }) {
  const repository = navigation.getParam('repository');

  return <Browser source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

export default Repository;

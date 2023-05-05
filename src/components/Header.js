import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack, children}) => {
  return (
    <Appbar.Header style={{ backgroundColor: '#5F4461' }}>
      {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content 
      titleStyle={{ alignSelf: 'center', backgroundColor: '#5F4461',}}
      title={title} />
      {children}
    </Appbar.Header>
  );
};

export default Header;

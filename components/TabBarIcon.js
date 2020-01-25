import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <FontAwesome
      name={props.name}
      size={26}
      color={props.focused ? Colors.tabIconSelected : props.button ? Colors.iconButton : Colors.tabIconDefault}
    />
  );
}

import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Drawer = createDrawerNavigator();

const NavContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ drawerItemStyle: { display: "none" } }} />
      <Drawer.Screen name="Register" component={RegistrationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default NavContainer;
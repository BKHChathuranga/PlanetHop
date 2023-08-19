import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookingConfirmed from './screens/BookingConfirmed';

const Drawer = createDrawerNavigator();

const NavContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Register" component={RegistrationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="BookingConfirmed" component={BookingConfirmed} />
    </Drawer.Navigator>
  );
}

export default NavContainer;
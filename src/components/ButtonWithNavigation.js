import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const normal = ({ to, navigation }) => (
    <Button title={'${to}'} onPress={() => navigation.navigate(to)} />
);

export default ButtonWithNavigation = withNavigation(normal);
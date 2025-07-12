import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  render,
  screen,
  fireEvent,
  waitFor,act
} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailScreen';

jest.mock('react-native-gesture-handler', () => {
  return {
    PanGestureHandler: 'PanGestureHandler',
    State: {},
  };
});

const Stack = createStackNavigator();
const TestNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe('navigation realted test cases', () => {
  it('navigate from home to detail screen', async () => {
    render(<TestNavigation />);

    const homeText = screen.getByTestId('home-screen');
    expect(homeText).toBeTruthy();

    const homeButton = screen.getByTestId('details-button');

    fireEvent.press(homeButton);

    const detailText = await screen.findByTestId('details-screen');

    expect(detailText).toBeTruthy();

    const text1 = await screen.findByTestId('item-id');
    const text2 = await screen.findByTestId('item-name');

    expect(text1).toHaveTextContent('Item ID: 86');
    expect(text2).toHaveTextContent('Item Name: BSB');
  });

  it('go back from detail to home screen', async () => {
    render(<TestNavigation />);
    const homeText = screen.getByTestId('home-screen');

    const homeButton = screen.getByTestId('details-button');

    fireEvent.press(homeButton);

    const detailText = await screen.findByTestId('details-screen');

    expect(detailText).toBeTruthy();
    const detailButton = screen.getByTestId('back-button');

    fireEvent.press(detailButton);

    await act(() => {
      expect(homeText).toBeTruthy();
    });
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { getDefaultDate } from './utils';
import { BookingForm } from './components/BookingForm';
import { Main } from './components/Main';

const initialFormState = {
  date: getDefaultDate(),
  time: "17:00",
  guestNo: "2",
  occassion: "Birthday"
}
test('renders the navigation menu items', () => {
  render(<App />);
  const homeLink = screen.getByTestId("link-home");
  expect(homeLink).toBeInTheDocument()
  const aboutLink = screen.getByTestId("link-about");
  expect(aboutLink).toBeInTheDocument()
  const menuLink = screen.getByTestId("link-menu");
  expect(menuLink).toBeInTheDocument()
  const reservationsLink = screen.getByTestId("link-reservations");
  expect(reservationsLink).toBeInTheDocument()
  const orderLink = screen.getByTestId("link-order");
  expect(orderLink).toBeInTheDocument()
  const loginLink = screen.getByTestId("link-login");
  expect(loginLink).toBeInTheDocument()
});

test('renders the table reservation form', () => {
  const handleChange = jest.fn();
  render(<BookingForm formState={initialFormState} availableTimes={[]} occassions={[]} handleChange={handleChange}/>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
  const submitBtn = screen.getByTestId("submitBtn")
  expect(submitBtn).toBeInTheDocument()
  fireEvent.click(submitBtn);
})


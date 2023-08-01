import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Counter increments and decrements correctly', () => {
    const { getByText } = render(<Counter />);
    
    //Check if count value is vissible in the screen
    const countElement = getByText('Count : 0');
    expect(countElement).toBeInTheDocument();
  
    //Test Increase Function
    const incrementButton = getByText('Increase');
    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe('Count : 1');
  
    //Test Decrease Function
    const decrementButton = getByText('Decrease');
    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe('Count : 0');
  });

  test('Counter resets correctly', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText('Count : 0');
    expect(countElement).toBeInTheDocument();

    // Test Reset function 
    const incrementButton = getByText('Reset');
    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe('Count : 0');
  })

  test('Limit onChange event updates the value correctly', () => {
    const { getByRole } = render(<Counter />);
    const limitInput = getByRole('spinbutton');
    fireEvent.change(limitInput, { target: { value: 123 } });
    expect(limitInput).toHaveValue(123);
  });
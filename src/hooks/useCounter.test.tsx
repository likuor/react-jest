import { act, renderHook } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('increment', () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
    // need act to update the state
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
});

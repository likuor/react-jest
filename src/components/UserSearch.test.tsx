import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { UserSearch } from './UserSearch';
import axios from 'axios';

jest.mock('axios');
const mockAxios = jest.mocked(axios);
const user = userEvent.setup();

describe('UserSearch', () => {
  // it('初期状態ではテキストが空欄', async () => {
  //   render(<UserSearch />);
  //   const input = screen.getByDisplayValue('');
  //   expect(input).toBeInTheDocument();
  //   expect(input).toHaveTextContent('');
  // });

  // interface User {
  //   id: number;
  //   name: string;
  // }

  // interface Res {
  //   data: {
  //     id: number;
  //     name: string;
  //   };
  // }
  // it('入力したテキストがサブミットされる', async () => {
  //   render(<UserSearch />);
  //   const input = screen.getByDisplayValue('');
  //   await user.type(input, 'Koki');
  //   expect(screen.getByDisplayValue('Koki')).toBeInTheDocument();

  //   const button = screen.getByRole('button');
  //   await user.click(button);

  //   const query = 'Koki';
  //   const resData: User = { id: 1, name: 'Koki' };
  //   const resp: Res = { data: resData };
  //   mockAxios.get.mockResolvedValue(resp);
  //   // const { data } = await axios.get(`/api/users?query=${query}`);
  //   const res = await axios.get<User>(`/api/users?query=${query}`);
  //   expect(res.data).toEqual(resData);
  //   expect(mockAxios.get).toHaveBeenCalledWith(`/api/users?query=${query}`);
  // });

  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  it('入力フィールドに値を入力し、検索ボタンをクリックすると適切なAPIリクエストが発生する', async () => {
    const userInfo = { id: 1, name: 'Koki' };
    const res = { data: userInfo };
    mockAxios.get.mockResolvedValue(res);

    render(<UserSearch />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'Koki');
    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it('APIから取得したユーザー情報が正しく画面に表示される', async () => {
    const userInfo = { id: 1, name: 'Koki' };
    const res = { data: userInfo };
    mockAxios.get.mockResolvedValue(res);

    render(<UserSearch />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'Koki');
    const button = screen.getByRole('button');
    await user.click(button);

    waitFor(() => {
      expect(screen.getByText(userInfo.name)).toBeInTheDocument();
    });
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { rest } from "msw"
import { setupServer } from "msw/node";
import mockUser from './mocks/resolver/user'
// mockサーバー
const mockServer = setupServer(
  rest.get('/users', mockUser.users)
)

describe("App", () => {
  beforeAll(() => {
    mockServer.listen()
  })
  afterAll(() => {
    mockServer.close()
  })

  test("テキスト表示", () => {
    render(<App />);

    const element = screen.getByText("React + TanStack Query Tips");

    expect(element).toBeDefined();
  });
  test("ユーザー一覧表示", async() => {
    render(<App />);

    await waitFor(() => screen.findByText("user01"))
  });
});
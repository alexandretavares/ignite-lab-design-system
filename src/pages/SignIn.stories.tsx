import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { SignIn } from './SignIn'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {
  },
  argTypes: {
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado com sucesso!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'teste.ds@example.com.br')
    userEvent.type(canvas.getByPlaceholderText('*******'), '123456')
    userEvent.click(canvas.getByTestId('remember'))

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByTestId('success-msg')).toBeInTheDocument()
    })

    expect(canvas.getByTestId('success-msg').textContent).toBe('Login realizado!')
  }
}

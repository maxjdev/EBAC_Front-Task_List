import styled from 'styled-components'
import { Link } from 'react-router-dom'
import vars from '../../styles/vars'

export const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${vars.green};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  text-decoration: none;
`

export default Circle

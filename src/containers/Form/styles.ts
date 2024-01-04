import styled from 'styled-components'

export const Forms = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input {
    cursor: pointer;
  }

  label {
    margin-right: 6px;
    margin-left: 3px;
  }
`

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`

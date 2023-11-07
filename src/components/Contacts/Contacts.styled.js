import styled from 'styled-components';

export const StyledContacts = styled.div`
  .item {
    margin-bottom: 15px;
  }

  .button {
    min-width: 50px;
    margin-left: 10px;

    border: 1px solid grey;
    border-radius: 4px;
    padding: 4px;
    font-weight: 500;
    font-size: 16px;

    background-color: white;
    color: black;
  }

  .button:hover,
  .button:focus {
    background-color: red;
    color: white;
  }
`;

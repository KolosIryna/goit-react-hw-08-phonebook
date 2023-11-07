import styled from 'styled-components';

export const StyledNavigation = styled.header`
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  background: linear-gradient(#e66465, #9198e5);

  .nav {
    display: flex;
    margin-right: auto;
    align-items: center;
  }

  .logo {
    padding-top: 24px;
    padding-bottom: 22px;
    margin-left: 26px;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
  }

  .logo_black {
    color: black;
    text-decoration: none;
  }

  .header {
    font-size: 22px;
    font-weight: 600;
    color: black;
    padding: 18px;
    margin-left: 60px;
    text-decoration: none;
    margin-right: auto;

    &.active {
      text-decoration: revert;
    }
  }

  .btn {
    display: block;
    cursor: pointer;
    margin: 0;
    padding: 12px 24px;
    min-width: 90px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    border: 1px solid rgb(31, 45, 201);
    border-radius: 10px;
    background-color: aliceblue;
    color: rgb(0, 0, 153);
    outline: 2px solid transparent;

    &:hover,
    &:focus {
      background-color: #27d26f;
    }
  }
`;

export const StyledNavigationLogin = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  .header_link {
    font-size: 22px;
    font-weight: 600;
    color: black;
    padding: 18px;
    margin-left: 24px;
    text-decoration: none;

    &.active {
      border: 1px solid #1f2dc9;
      border-radius: 10px;
      background-color: aliceblue;
      color: #000099;
    }
  }
`;

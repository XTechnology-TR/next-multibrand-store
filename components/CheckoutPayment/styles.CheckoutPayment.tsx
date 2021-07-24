import styled, { css } from 'styled-components';

const backgroundAndPadding = css`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.dashboardGrayBg};
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    margin: 0;
  }
`;
export const ShippingInfo = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${backgroundAndPadding};
`;

export const Header = styled.p`
  color: ${({ theme }) => theme.primaryGolden};
`;

export const Content = styled.p``;

export const RouterLink = styled.a`
  color: ${({ theme }) => theme.primaryGolden};
`;

export const ButtonWrap = styled.footer`
  display: flex;
  gap: 1rem;
  align-items: center;
  ${backgroundAndPadding}

  button {
    color: ${({ theme }) => theme.dashboardGrayBg};
  }
`;
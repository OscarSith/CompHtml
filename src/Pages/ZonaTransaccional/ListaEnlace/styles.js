import styled from "styled-components";

export const Enlace = styled.li`
  background-color: var(--color-white);
  margin-bottom: 12px;

  a {
    color: var(--color-semi-black);
  }

  &:hover,
  &.active {
    background-color: var(--color-darkgray);

    a {
      color: var(--color-white);
    }
  }
`;

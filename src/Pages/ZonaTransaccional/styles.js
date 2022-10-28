import styled from "styled-components";

export const CardTransaccional = styled.div`
  background-color: var(--color-gray);
`;

export const CardTransaccionalHeader = styled.div`
  background-color: var(--color-white);
`;

export const CardTransaccionalBody = styled.div``;

export const Avatar = styled.div`
  background-color: var(--color-orange);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 57px;
  height: 57px;
  font-size: 2.2em;
`;

export const EnlaceFinal = styled.div`
  .card-title {
    color: var(--color-semi-black);
    border-bottom-style: dashed !important;
    border-bottom-color: var(--color-darkgray) !important;
  }

  .card-text {
    color: var(--color-darkgray);
  }

  .btn {
    background-color: var(--color-orange);

    svg {
      margin-top: 2px;
    }
  }
`;

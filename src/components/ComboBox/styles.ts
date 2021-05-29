import styled from 'styled-components'

export const ComboBoxSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: relative;
    :after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 10%;
      cursor: pointer;
      width: 1.2rem;
      height: 0.7rem;
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.70703 6.29303C6.5195 6.4805 6.26519 6.58582 6.00003 6.58582C5.73486 6.58582 5.48056 6.4805 5.29303 6.29303L0.707028 1.70703C0.567219 1.56718 0.472013 1.38901 0.433445 1.19506C0.394877 1.00111 0.41468 0.800074 0.490351 0.617374C0.566021 0.434675 0.69416 0.278512 0.85857 0.168627C1.02298 0.058743 1.21628 7.15256e-05 1.41403 2.90871e-05L10.586 2.90871e-05C10.7838 7.15256e-05 10.9771 0.058743 11.1415 0.168627C11.3059 0.278512 11.434 0.434675 11.5097 0.617374C11.5854 0.800074 11.6052 1.00111 11.5666 1.19506C11.528 1.38901 11.4328 1.56718 11.293 1.70703L6.70703 6.29303Z' fill='%23848484'/%3E%3C/svg%3E%0A");
    }
  }
`
export const Select = styled.select`
  -webkit-appearance: none;
  background-color: var(--white);
  border-radius: 1.2rem;
  border: none;
  min-width: 25rem;
  height: 4.5rem;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--less-black);
  padding-left: 3rem;
`

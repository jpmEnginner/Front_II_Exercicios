import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const Modal = styled.div`
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 50rem;
  max-height: 90vh;
  overflow-y: auto;
  transform: translateY(-3rem);
  transition: transform 0.3s ease;

  ${Overlay}.active & {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    max-width: 55rem;
  }

  @media (max-width: 767px) {
    width: 95%;
    max-width: none;
    margin: 1rem;
    max-height: 95vh;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 0.1rem solid #e9ecef;
  background-color: #f8f9fa;
  border-radius: 1.2rem 1.2rem 0 0;

  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #212529;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 767px) {
    font-size: 1.8rem;
    order: 1;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.3s ease;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #dc3545;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    border-radius: 0.4rem;
  }

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }

  @media (max-width: 767px) {
    order: 2;
    font-size: 2.5rem;
    align-self: flex-end;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 8rem);
`;

export const Content = styled.div`
  padding: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 768px) {
    padding: 3rem;
    gap: 2.5rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem;
  border: 0.2rem solid #e9ecef;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  font-family: inherit;
  background-color: #fff;
  color: #495057;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    background-color: #fff;
  }

  &::placeholder {
    color: #adb5bd;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.8rem;
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 1.2rem;
    font-size: 1.4rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1.2rem 1.5rem;
  border: 0.2rem solid #e9ecef;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  font-family: inherit;
  background-color: #fff;
  color: #495057;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    background-color: #fff;
  }

  option {
    padding: 1rem;
    color: #495057;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 1.8rem;
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 1.2rem;
    font-size: 1.4rem;
  }
`;

export const Actions = styled.div`
  padding: 2rem 3rem;
  border-top: 0.1rem solid #e9ecef;
  background-color: #f8f9fa;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
  border-radius: 0 0 1.2rem 1.2rem;

  @media (min-width: 768px) {
    padding: 2.5rem 3rem;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (max-width: 767px) {
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  min-width: 12rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 1.3rem 2.8rem;
    font-size: 1.5rem;
    min-width: 14rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 1.5rem 2rem;
    font-size: 1.3rem;
    min-width: auto;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
  border: 0.2rem solid #6c757d;

  &:hover {
    background-color: #545b62;
    border-color: #545b62;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.4rem 1.2rem rgba(108, 117, 125, 0.3);
  }

  @media (max-width: 767px) {
    order: 2;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
  border: 0.2rem solid #28a745;

  &:hover:not(:disabled) {
    background-color: #1e7e34;
    border-color: #1e7e34;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.4rem 1.2rem rgba(40, 167, 69, 0.3);
  }

  &:disabled {
    background-color: #94d3a2;
    border-color: #94d3a2;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 767px) {
    order: 1;
  }
`;
import styled from "styled-components";

export const StyledForm = styled.form`
  font-family: Helvetica;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
`;

export const StyledInput = styled.input`
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  border: none;
  padding: 10px;
  width: 200px;
`;

export const StyledInputContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const StyledTextArea = styled.textarea`
  position: relative;
  padding: 10px;
  font-family: Helvetica;
  font-weight: 700;
  border: none;
  height: 100%;
  width: 400px;
`;

export const StyledButton = styled.button`
  position: relative;
  font-family: Helvetica;
  font-weight: 700;
  border: solid white;
  padding: 10px;
  width: 200px;
  background-color: #2422d5;
  color: white;
`;

export default function Form({ onAddFlat }) {
  return (
    <>
      <StyledForm onSubmit={onAddFlat}>
        <StyledInputContainer>
          <StyledInput
            type="text"
            id="street-input"
            name="street"
            placeholder="STREET AND NR."
          />
          <StyledInput
            type="text"
            id="zip-input"
            name="zip"
            placeholder="ZIP CODE"
          />
          <StyledInput
            type="text"
            id="apartment-input"
            name="apartment"
            placeholder="APARTMENT"
          />
          <StyledInput
            type="text"
            id="name-input"
            name="name"
            placeholder="NAME(S) ON DOORBELL"
          />
          <StyledButton type="submit">SUBMIT</StyledButton>
        </StyledInputContainer>
        <div>
          <StyledTextArea
            id="report-input"
            name="report"
            placeholder="Why do you think this flat is empty? Is there anything else we need to know?"
          />
        </div>
      </StyledForm>
    </>
  );
}

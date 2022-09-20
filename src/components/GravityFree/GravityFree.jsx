import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Box from 'components/Box';

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props => props.theme.palette.primary};
  font-size: 15px;
  text-align: center;
  border-radius: 0.25rem!important;
  --border-opacity: 1!important;
  color: ${props => props.theme.palette.secondary};
  font-weight: 500;
  padding-top: 0.5rem!important;
  padding-bottom: 0.5rem!important;
  border-color: #718096!important;
  cursor: pointer;
`;

const Subtitle = styled.span`
  box-sizing: border-box;
  border: 0 solid #e2e8f0;
  color: #718096!important;
  margin-top: 10px;
`

const Checkbox = styled.input`
  padding: 5px 5px 5px 5px;
`

export default () => {
  const [isInNewTab, updateIsInNewTab] = useState(true)

  const setIsInNewTab = (isInNewTab = true) => {
    chrome.storage.sync.set({isInNewTab}, () => updateIsInNewTab(isInNewTab));
  }

  useEffect(() => {
    chrome.storage.sync.get(['isInNewTab'], ({ isInNewTab }) => updateIsInNewTab(isInNewTab));
  }, [])

  const onRemovePaywallClicked = () => {
    chrome.runtime.sendMessage({ message: 'buttonClicked' })
  }

  const changeIsInNewTab = () => setIsInNewTab(!isInNewTab)

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={onRemovePaywallClicked}>Make your article gravity free</Button>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" margin={2}>
        <label for="in-a-new-tab">Open in a new tab?</label>
        <Checkbox onClick={changeIsInNewTab} type="checkbox" id="in-a-new-tab" name="in-a-new-tab" checked={isInNewTab} />
      </Box>
      <Box display="flex" alignItems="center">
        <Subtitle> Thanks to <a href="https://12ft.io/" target="_blank">12ft.io</a> ❤️ for making this happen. </Subtitle>
      </Box>
    </Container>
  );
};

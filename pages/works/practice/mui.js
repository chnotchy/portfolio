import * as React from 'react';

import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';

import { Box, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

import PropTypes from 'prop-types';
import Head from 'next/head'
import Layout from '../../../components/layout'
import Link from 'next/link'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Root = styled('div')(
  ({ theme }) => `
  color: ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
  };
  font-size: 14px;
`,
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    height: 36px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 36px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`,
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span> # {label} </span>
      <Box sx={{ background: '#777', width: '20px', height: '20px', marginLeft: '0.5em', marginRight: '4px', borderRadius: '10px' }}>
        <CloseIcon onClick={onDelete} />
      </Box>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 28px;
  margin: 3px;
  line-height: 28px;
  background-color: ${
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : '#fafafa'
  };
  border-radius: 20px;
  box-sizing: content-box;
  padding: 0 0 0 12px;
  outline: 0;
  overflow: hidden;

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
    padding: 3px;
  }
`,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`,
);

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [title10[1]],
    multiple: true,
    options: title10,
    getOptionLabel: (option) => option.title,
  });

  return (
    <Layout>
      <Head>
        <title>MUI</title>
      </Head>
      <Box>
        <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>Autocomplete</Box>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={list10}
          sx={{
            my: '20px',
            width: 300,
          }}
          renderInput={(params) => <TextField {...params} label="選択" />}
        />
        <Root>
          <div {...getRootProps()}>
            <Label {...getInputLabelProps()}>タグ選択</Label>
            <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
              {value.map((option, index) => (
                <StyledTag label={option.title} {...getTagProps({ index })} />
              ))}
              <input {...getInputProps()} />
            </InputWrapper>
          </div>
          {groupedOptions.length > 0 ? (
            <Listbox {...getListboxProps()}>
              {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <span>{option.title}</span>
                  <CheckIcon fontSize="small" />
                </li>
              ))}
            </Listbox>
          ) : null}
        </Root>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={title10}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 500 }}
          sx={{ my: '20px' }}
          renderInput={(params) => (
            <TextField {...params} label="Checkboxes" placeholder="Favorites" />
          )}
        />
      </Box>
      <Box>
        <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>Button</Box>
        <Stack sx={{ my: '20px' }} spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack sx={{ my: '20px' }} spacing={2} direction="row">
          <Button variant="text" startIcon={<OpenInNewRoundedIcon/>}>Text</Button>
          <Button variant="contained" startIcon={<OpenInNewRoundedIcon/>}>Contained</Button>
          <Button variant="outlined" startIcon={<OpenInNewRoundedIcon/>}>Outlined</Button>
        </Stack>
        <Stack sx={{ my: '20px' }} spacing={2} direction="row">
          <IconButton color="primary" aria-label="add to shopping cart">
            <OpenInNewRoundedIcon/>
          </IconButton>
        </Stack>
      </Box>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>
      <style jsx>{`
        .title {
          margin-top: 32px;
          margin-bottom: 12px;
        }
      `}</style>
    </Layout>
  );
}

const list10 = [
  {label: 'A'},
  {label: 'B'},
  {label: 'C'},
  {label: 'D'},
  {label: 'E'},
  {label: 'F'},
  {label: 'G'},
  {label: 'H'},
  {label: 'I'},
  {label: 'J'},
]

const title10 = [
  {title: 'A'},
  {title: 'BB'},
  {title: 'CCC'},
  {title: 'DDDD'},
  {title: 'EEEEE'},
  {title: 'FFFFFF'},
  {title: 'GGGGGGG'},
  {title: 'HHHHHHHH'},
  {title: 'IIIIIIIII'},
  {title: 'JJJJJJJJJJ'},
]

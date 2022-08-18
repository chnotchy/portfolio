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
import MenuItem from '@mui/material/MenuItem';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import PropTypes from 'prop-types';
import Head from 'next/head'
import Layout from '../../../components/layout'
import Link from 'next/link'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      // content: '`${<LightModeIcon />`}',
      left: 12,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    background: '#fff',
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const LanguageSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      fontSize: 8,
      color: '#fff',
    },
    '&:before': {
      content: '"EN"',
      left: '14px',
    },
    '&:after': {
      content: '"JP"',
      right: '14px',
    },
  },
  '& .MuiSwitch-thumb': {
    background: '#fff',
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

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

  const [choice, setChoice] = React.useState('A');

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChangeP = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

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
        <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>Switch</Box>
        <FormGroup>
          <FormControlLabel
            control={<Android12Switch defaultChecked />}
            label="Android 12"
          />
          <FormControlLabel
            control={<ThemeSwitch defaultChecked />}
            label="Theme"
          />
          <FormControlLabel
            control={<LanguageSwitch defaultChecked />}
            label="Language"
          />
        </FormGroup>
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
      <Box>
        <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>TextField</Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChangeP('password')}
            pattern="(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*[,.?/-])[a-zA-Z\d,.?/-]{8,}"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={choice}
            onChange={handleChange}
            helperText="Please select"
          >
            {list10.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={choice}
            onChange={handleChange}
            helperText="Please select"
            variant='filled'
          >
            {list10.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={choice}
            onChange={handleChange}
            helperText="Please select"
            variant='standard'
          >
            {list10.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box>
        <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>SpeedDial</Box>
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>      
      </Box>
      <Box>
        <Box sx={{ marginTop: '32px', fontWeight: 'bold', fontSize: '1.2em' }}>My SpeedDial</Box>
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <Stack spacing={2} direction="row"
            sx={{
              bgcolor: '#777',
              overflow: 'hidden',
              width: '48px',
              height: '48px',
              padding: 'auto',
              borderRadius: '24px',
              transition: '0.2s',
              ':hover': {
                bgcolor: '#999',
                width: '116px'
              }
            }}
          >
            <IconButton color="primary" aria-label="add to shopping cart"
              sx={{
                bgcolor: 'none',
              }}
            >
              <OpenInNewRoundedIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart"
              sx={{
                bgcolor: 'none',
              }}
            >
              <OpenInNewRoundedIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart"
              sx={{
                bgcolor: 'none',
              }}
            >
              <OpenInNewRoundedIcon/>
            </IconButton>
          </Stack>
        </Box>      
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


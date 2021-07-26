import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  labelText: {
    color: "#23282D",
    fontSize: 16
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    // margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    color: "#23282D",
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function InputSelectCustomized({data, selectedItems, setSelected}) {
  const classes = useStyles();
  // const theme = useTheme();

  const theme = createMuiTheme({
    palette:{
      primary: {
        main:"#23282D"
      },
    }
  })
  

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label" className={classes.labelText}>Modelos não personalizáveis</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectedItems}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.name} style={getStyles(item.name, selectedItems, theme)}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

import React, { useState, useEffect } from "react";
import BoxWrapper from "../Components/ReusableComponents/Container";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Switch,
  Box,
} from "@mui/material";
import { RadioProps } from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllThemes,
  updateTheme,
  State,
} from "../Features/Themes/ThemesSlice";

const Theming = () => {
  const dispatch = useDispatch();
  const themeState: State[] = useSelector(selectAllThemes);
  const [theme, setTheme] = useState<State>({
    id: themeState[0].id,
    skin: themeState[0].skin,
    primaryColor: themeState[0].primaryColor,
    appBar: themeState[0].appBar,
    footerType: themeState[0].footerType,
    collapsed: themeState[0].collapsed,
    hidden: themeState[0].hidden,
  });

  useEffect(() => {
    dispatch(updateTheme(theme));
  }, [theme]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    params: any
  ) => {
    setTheme((prevState: State) => ({ ...prevState, ...params }));
  };

  const styles = {
    normalStyles: {
      m: "16px",
      p: "20px",
    },
    title: {
      color: "#626477",
      fontWeight: 600,
      fontSize: "18px",
    },
    form: {
      marginBottom: 2.5,
      marginTop: 2.5,
      display: "block",
    },
    label: {
      color: "#626477",
      fontWeight: 500,
    },
    radio: {
      color: "#626477",
    },
  };

  const BpIconGreen = styled("span")(() => ({
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    backgroundColor: "#72E028",
  }));

  const BpCheckedIconGreen = styled(BpIconGreen)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "end",
    paddingLeft: "12px",
    paddingBottom: "14px",
    boxShadow: "0 2px 10px 0px rgb(16 22 26 / 40%)",
    "&:before": {
      display: "block",
      width: 2,
      height: 6,
      content: '""',
      backgroundColor: "white",
      rotate: "-42deg",
    },
    "&:after": {
      display: "block",
      width: 2,
      height: 20,
      content: '""',
      backgroundColor: "white",
      rotate: "50deg",
      transformOrigin: "bottom left",
    },
  });

  const BpIconOrange = styled("span")(() => ({
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    backgroundColor: "#F8C04B",
  }));

  const BpCheckedIconOrange = styled(BpIconOrange)({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "end",
    paddingLeft: "12px",
    paddingBottom: "14px",
    boxShadow: "0 2px 10px 0px rgb(16 22 26 / 40%)",
    "&:before": {
      display: "block",
      width: 2,
      height: 6,
      content: '""',
      backgroundColor: "white",
      rotate: "-42deg",
    },
    "&:after": {
      display: "block",
      width: 2,
      height: 20,
      content: '""',
      backgroundColor: "white",
      rotate: "50deg",
      transformOrigin: "bottom left",
    },
  });

  // Inspired by blueprintjs
  function BpRadioGreen(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="error"
        checkedIcon={<BpCheckedIconGreen />}
        icon={<BpIconGreen />}
        {...props}
        sx={{ color: "#72E028" }}
      />
    );
  }
  function BpRadioOrange(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="error"
        checkedIcon={<BpCheckedIconOrange />}
        icon={<BpIconOrange />}
        {...props}
        sx={{ color: "#72E028" }}
      />
    );
  }

  return (
    <div className="md:flex flex-wrap w-full pb-10 ">
      <div className="md:w-6/12 lg:w-6/12">
        <BoxWrapper styling={styles.normalStyles}>
          {" "}
          <Typography variant="h4" component="h5" sx={styles.title}>
            Theming
          </Typography>
          <FormControl sx={styles.form}>
            <Typography
              component="label"
              variant="subtitle1"
              id="demo-row-radio-buttons-group-label"
              sx={styles.label}
            >
              Skin
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={theme.skin}
              onChange={(e) => handleChange(e, { skin: e.target.value })}
            >
              <FormControlLabel
                value="default"
                control={<Radio />}
                label="Default"
                sx={styles.radio}
              />
              <FormControlLabel
                value="bordered"
                control={<Radio />}
                label="Bordered"
                sx={styles.radio}
              />
              <FormControlLabel
                value="semi dark"
                control={<Radio />}
                label="Semi Dark"
                sx={styles.radio}
              />
            </RadioGroup>
          </FormControl>
          <div>
            <Typography component="h6" variant="subtitle1" sx={styles.label}>
              Primary Color
            </Typography>
            <RadioGroup
              row
              value={theme.primaryColor}
              onChange={(e) =>
                handleChange(e, { primaryColor: e.target.value })
              }
            >
              <FormControlLabel
                value="#72E028"
                control={
                  <BpRadioGreen
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                }
                label=""
              />

              <FormControlLabel
                value="#F8C04B"
                control={
                  <BpRadioOrange
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </div>
        </BoxWrapper>
      </div>
      <div className="md:w-6/12 lg:w-6/12">
        <BoxWrapper styling={styles.normalStyles}>
          {" "}
          <Typography variant="h4" component="h5" sx={styles.title}>
            Layout
          </Typography>
          <FormControl sx={styles.form}>
            <Typography
              component="label"
              variant="subtitle1"
              id="demo-row-radio-buttons-group-label"
              sx={styles.label}
            >
              AppBar Type
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={theme.appBar}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, { appBar: e.target.value })
              }
            >
              <FormControlLabel
                value="fixed"
                control={<Radio />}
                label="Fixed"
                sx={styles.radio}
              />
              <FormControlLabel
                value="static"
                control={<Radio />}
                label="Static"
                sx={styles.radio}
              />
              <FormControlLabel
                value="hidden"
                control={<Radio />}
                label="Hidden"
                sx={styles.radio}
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ paddingBottom: 2.4 }}>
            <Typography
              component="label"
              variant="subtitle1"
              id="demo-row-radio-buttons-group-label"
              sx={styles.label}
            >
              Footer Type
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={theme.footerType}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, { footerType: e.target.value })
              }
            >
              <FormControlLabel
                value="fixed"
                control={<Radio />}
                label="Fixed"
                sx={styles.radio}
              />
              <FormControlLabel
                value="static"
                control={<Radio />}
                label="Static"
                sx={styles.radio}
              />
              <FormControlLabel
                value="hidden"
                control={<Radio />}
                label="Hidden"
                sx={styles.radio}
              />
            </RadioGroup>
          </FormControl>
        </BoxWrapper>
      </div>
      <div className="md:w-6/12 lg:w-6/12">
        {" "}
        <BoxWrapper styling={styles.normalStyles}>
          <Typography variant="h4" component="h5" sx={styles.title}>
            Menu Controls
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 2.5,
              marginBottom: 2.5,
            }}
          >
            <Typography component="label" variant="subtitle1" sx={styles.label}>
              Menu Collapsed
            </Typography>
            <Switch
              color="primary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, { collapsed: e.target.checked })
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography component="label" variant="subtitle1" sx={styles.label}>
              Menu Hidden
            </Typography>
            <Switch
              color="primary"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, { hidden: e.target.checked })
              }
              checked={theme.hidden}
            />
          </Box>
        </BoxWrapper>
      </div>
    </div>
  );
};

export default Theming;

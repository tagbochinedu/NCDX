import React, { useState, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Clickable from "./ReusableComponents/Clickable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch } from "react-redux";
import { updateUser, deleteUser } from "../Features/Users/UsersSlice";
import UserForm from "./UserForm";

interface Props {
  id: number;
}

const BasicMenu = ({ id }: Props) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<any>();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(false);
  }, []);

  const DeleteHandler = () => {
    handleClose();
    dispatch(deleteUser(id));
  };
  const EditHandler = () => {};

  const styles = {
    edit: {
      color: "#626477",
      fontWeight: 500,
      textTransform: "capitalize",
      fontSize: 15,
    },
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          {" "}
          <Clickable
            variant="text"
            disableElevation={true}
            startIcon={<VisibilityOutlinedIcon />}
            size="small"
            styling={styles.edit}
          >
            View
          </Clickable>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UserForm
            variant="text"
            disableElevation={true}
            startIcon={<ModeEditOutlineOutlinedIcon />}
            size="small"
            styling={styles.edit}
          >
            Edit
          </UserForm>
        </MenuItem>
        <MenuItem onClick={DeleteHandler}>
          <Clickable
            variant="text"
            disableElevation={true}
            startIcon={<DeleteOutlineOutlinedIcon />}
            size="small"
            styling={styles.edit}
          >
            Delete
          </Clickable>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default BasicMenu;

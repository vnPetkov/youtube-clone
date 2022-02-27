import * as React from "react";
import Typography from "@mui/material/Typography";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useSelector } from "react-redux";
import SignInButton from "./SignInButton";

export default function Like_dislikeBtn(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const logged = useSelector((state) => state.userData.logged);
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <span
            variant="contained"
            {...bindToggle(popupState)}
            onClick={handleClick("bottom-end")}
          >
            {props.btnType === "like" ? (
              props.likedState ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )
            ) : props.dislikedState ? (
              <ThumbDownIcon />
            ) : (
              <ThumbDownOutlinedIcon />
            )}
          </span>
          {!logged && (
            <Popper
              {...bindPopper(popupState)}
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography sx={{ p: 3 }}>
                      <h3>
                        {props.btnType === "like" ? "Like" : "Don't like"} this
                        video?
                      </h3>
                      <p>Sign in to make your opinion count.</p>
                      <div>
                        <SignInButton />
                      </div>
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
          )}
        </div>
      )}
    </PopupState>
  );
}

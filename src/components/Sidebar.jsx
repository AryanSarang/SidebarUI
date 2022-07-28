import { React } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import BallotIcon from '@mui/icons-material/Ballot';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShortcutIcon from '@mui/icons-material/Shortcut';

const Sidebar = () => {
  return (
    <div className="border-end collapse col-lg-2 col-4 bg-white " id="sidebar-wrapper">
      <div className="list-group list-group-flush sidebar-dashboard">
        <span className="sidebar-heading border-bottom bg-light fs-3">Welcome Jack</span>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"><DashboardIcon/> Dashboard</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3 btn btn-secondary"
          role="button" id="ShortcutLinks" data-bs-toggle="collapse" data-bs-target="#shortcutCollapse"
          aria-expanded="false" href="#!" aria-controls="shortcutCollapse"><ArrowDropDownIcon/><ShortcutIcon/> Shortcuts</a>
        <div className="list-group list-group-flush">

          <div className="collapse" id="shortcutCollapse">
            <a className="list-group-item list-group-item-action list-group-item-light p-2" href="#">Action</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-2" href="#">Another action</a>
            <a className="list-group-item list-group-item-action list-group-item-light p-2" href="#">Something else here</a>
            </div>

        </div>




        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"><BallotIcon/> Overview</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"><EventIcon/> Events</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"><AccountCircleIcon/> Profile</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"><DonutLargeIcon/> Status</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"><HelpOutlineIcon/> Help </a>
      </div>
    </div>
  );
}
export default Sidebar;
import { merge } from "lodash";
import Fab from "./Fab";
import Card from "./card";
import Chip from "./Chip";
import Tabs from "./Tabs";
import Menu from "./Menu";
import Grid from "./grid";
import Link from "./Link";
import Lists from "./Lists";
import Table from "./table";
import Alert from "./Alert";
import Badge from "./Badge";
import Paper from "./paper";
import Input from "./input";
import Radio from "./Radio";
import Drawer from "./Drawer";
import Dialog from "./Dialog";
import Avatar from "./Avatar";
import Rating from "./Rating";
import Slider from "./Slider";
import Button from "./button";
import Switch from "./Switch";
import Select from "./Select";
import SvgIcon from "./SvgIcon";
import Tooltip from "./Tooltip";
import Popover from "./popover";
import Stepper from "./Stepper";
import Pickers from "./Pickers";
import DataGrid from "./DataGrid";
import Skeleton from "./Skeleton";
import Backdrop from "./Backdrop";
import Snackbar from "./Snackbar";
import Progress from "./Progress";
import Timeline from "./Timeline";
import TreeView from "./TreeView";
import Checkbox from "./Checkbox";
import Container from "./container";
import Accordion from "./Accordion";
import Typography from "./typography";
import Pagination from "./Pagination";
import IconButton from "./iconButton";
import Breadcrumbs from "./Breadcrumbs";
import ButtonGroup from "./ButtonGroup";
import Autocomplete from "./Autocomplete";
import ToggleButton from "./ToggleButton";
import ControlLabel from "./controlLabel";
import LoadingButton from "./LoadingButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(
    Fab(theme),
    Tabs(theme),
    Chip(theme),
    Card(theme),
    Menu(theme),
    Grid(theme),
    Link(theme),
    Input(theme),
    Radio(theme),
    Badge(theme),
    Lists(theme),
    Table(theme),
    Paper(theme),
    Alert(theme),
    Switch(theme),
    Select(theme),
    Button(theme),
    Rating(theme),
    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Pickers(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),
    Checkbox(theme),
    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),
    TreeView(theme),
    Backdrop(theme),
    Snackbar(theme),
    Progress(theme),
    Container(theme),
    Accordion(theme),
    IconButton(theme),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}

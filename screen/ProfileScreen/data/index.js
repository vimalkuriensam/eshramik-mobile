import {
  getColleges,
  getDegrees,
  getInstitutions,
  getNonTechnicalCourses,
  getState,
  getTechnicalCourses,
} from "../../../store/actions/profile.action";

export const INFO_NAME_VALUES = [
  {
    variant: "secondary",
    id: "firstName",
    label: "First Name",
  },
  {
    variant: "secondary",
    id: "middleName",
    label: "Middle Name",
  },
  {
    variant: "secondary",
    id: "lastName",
    label: "Last Name",
  },
];

export const PROFILE_TAB_INFO = [
  {
    name: "Info",
    id: 1,
    title: "Profile Information",
  },
  {
    name: "Qualification",
    id: 2,
    title: "Qualification",
  },
  {
    name: "Profession",
    id: 3,
    title: "Profession",
  },
  {
    name: "Skill",
    id: 4,
    title: "Skills",
  },
  {
    name: "EmployeeDetails",
    id: 5,
    title: "Employement Details",
  },
  {
    name: "Overseas",
    id: 6,
    title: "Overseas oppurtunity",
  },
  {
    name: "Documents",
    id: 7,
    title: "Upload Photo",
  },
  {
    name: "Resume",
    id: 8,
    title: "Resume Builder",
  },
];

export const funcMap = {
  0: async (dispatch) => {
    await dispatch(getState());
    return true;
  },
  1: async (dispatch) => {
    await dispatch(getColleges());
    await dispatch(getDegrees());
    await dispatch(getInstitutions());
    return true;
  },
  2: async (dispatch) => {
    await dispatch(getTechnicalCourses());
    await dispatch(getNonTechnicalCourses());
    return true;
  },
  3: async (dispatch) => {
    return true;
  },
  4: async (dispatch) => {
    await dispatch(getTechnicalCourses());
    await dispatch(getNonTechnicalCourses());
    await dispatch(getState());
    return true;
  },
  5: async (dispatch) => {
    return true;
  },
  6: async (dispatch) => {
    return true;
  },
  7: async (dispatch) => {
    return true;
  },
};

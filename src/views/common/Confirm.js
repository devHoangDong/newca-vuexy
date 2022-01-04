import React from "react";
import { toast } from "react-toastify";

export const alert = (status, mess) => {
  status === "success" ? toast.success(mess, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
  }) : toast.error(mess, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1500,
  })
};

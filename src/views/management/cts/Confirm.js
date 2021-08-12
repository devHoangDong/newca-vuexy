import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const handleConfirm = (callback) => {
  const notifyBottomRight = () =>
    toast.success("Gửi yêu cầu thành công!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1500,
    });
  return Swal.fire({
    title: "Xác nhận gửi yêu cầu?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Xác nhận",
    cancelButtonText: "Hủy",
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-outline-danger ml-1",
    },
    buttonsStyling: false,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      notifyBottomRight();
    }
  });
};

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
    cancelButtonText: "Hủy",
    confirmButtonText: "Xác nhận",
    customClass: {
      confirmButton: "btn btn-primary ml-1",
      cancelButton: "btn btn-outline-danger",
    },
    buttonsStyling: false,
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
      notifyBottomRight();
    }
  });
};

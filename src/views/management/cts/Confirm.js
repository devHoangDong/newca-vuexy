import React from "react";
import Swal from "sweetalert2";

export const handleConfirm = (callback) => {
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
    }
  });
};

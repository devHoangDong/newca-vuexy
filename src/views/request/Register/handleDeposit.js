import React from "react";
import Swal from "sweetalert2";

export const handleDeposit = (callback) => {
  return Swal.fire({
    title: "Số dư không đủ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Nạp tiền",
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

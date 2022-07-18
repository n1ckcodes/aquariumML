import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { fetchPost } from "../../utils/fetch";

export default function ConfirmDelete(props) {
  return (
    <>
      {" "}
      <label for="deleteModal" class="btn btn-wide btn-outline">
        Delete
      </label>
      <br />
      <br />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="deleteModal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Are you sure you want to delete?</h3>
          <div class="divider" />
          yes or no
        </div>
      </div>
    </>
  );
}

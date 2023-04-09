import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SEND_COMMENT } from "../../graphql/mutitions";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const Clear = () => {
    setName("");
    setEmail("");
    setText("");
  };

  const [sendComment, { data, loading, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  console.log(data, loading, error);

  const sendHandler = () => {
    if (name && email && text) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      if (!isValidEmail) {
        toast.warn("لطفا ایمیل را بصورت صحیح وارد کنید");
      } else {
        if (text.length < 5) {
          toast.warn("متن کامنت نباید کمتر از 5 حرف باشد");
        } else {
          sendComment();
          setPressed(true);
        }
      }
    } else {
      toast.warn("لطفا تمام فیلدها را پر کنید");
    }
  };

  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید می باشد");
    setPressed(false);
    // Clear();
  }
  return (
    <Grid
      container
      sx={{
        borderRadius: 4,
        boxShadow: "rgba(0,0,0,0.1) 0px 12px 4px",
        mt: 5,
      }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%", marginTop: "20px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          multiline
          minRows={4}
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%", marginTop: "20px" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} padding={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال کامنت
          </Button>
        )}
      </Grid>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </Grid>
  );
}

export default CommentForm;

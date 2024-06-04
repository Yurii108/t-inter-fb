import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button, Paper, TextField, Typography } from "@mui/material";

const formDate = z.object({
  name: z.string().min(5, { message: "min length: 5" }),
  surname: z.string().min(5, { message: "min length: 5" }),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(9, { message: "min length: 9" })
    .max(11, { message: "max length: 11" }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formDate) });

  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(errors);

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography>Simple form</Typography>

      <form onSubmit={onSubmit}>
        <TextField
          sx={{ mt: 3 }}
          label="Name"
          {...register("name")}
          error={Boolean(errors.name?.message)}
          helperText={typeof errors.name?.message === "string" && errors.name?.message}
          fullWidth
        />
        <TextField
          sx={{ mt: 3 }}
          label="Surname"
          {...register("surname")}
          error={Boolean(errors.surname?.message)}
          helperText={typeof errors.surname?.message === "string" && errors.surname?.message}
          fullWidth
        />
        <TextField
          sx={{ mt: 3 }}
          label="Email"
          type="email"
          error={Boolean(errors.email?.message)}
          helperText={typeof errors.email?.message === "string" && errors.email?.message}
          {...register("email")}
          fullWidth
        />
        <TextField
          sx={{ mt: 3 }}
          label="Phone number"
          type="tel"
          error={Boolean(errors.phoneNumber?.message)}
          helperText={
            typeof errors.phoneNumber?.message === "string" && errors.phoneNumber?.message
          }
          {...register("phoneNumber")}
          fullWidth
        />
        <Button sx={{ mt: 3 }} type="submit" size="large" variant="contained" fullWidth>
          Confirm
        </Button>
      </form>
    </Paper>
  );
}

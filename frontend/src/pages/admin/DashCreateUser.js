import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { allUserAction } from '../../redux/actions/userAction';
import { userSignUpAction } from '../../redux/actions/userAction';

const validationSchema = yup.object({
    firstname: yup
        .string()
        .required('Enter a first name'),
    lastname: yup
        .string()
        .required('Enter a last name'),
    email: yup
        .string()
        .email('Please add a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be at least 8 characters long')
        .required('Password is required')
});


const DashCreateUser = () => {
    const dispatch = useDispatch();

    //job type
    useEffect(() => {
        dispatch(allUserAction());
    }, []);

    //const { jobType } = useSelector(state => state.jobTypeAll);

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
          //  jobType: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            dispatch(userSignUpAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });



    return (
        <>

            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Register an user
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="firstname"
                            label="firstname"
                            name='firstname'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="firstname"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstname && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="lastname"
                            name="lastname"
                            label="lastname"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="lastname"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            helperText={formik.touched.lastname && formik.errors.lastname}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="email"
                            name="email"
                            label="email"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="password"
                            name="password"
                            label="password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
{/*
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            className="px-2 my-2"
                            variant="outlined"
                            name="jobType"
                            id="jobType"
                            select
                            label="Category"
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                            helperText={formik.touched.jobType && formik.errors.jobType}
                        >
                            <MenuItem key={""} value={""}>

                            </MenuItem>

                            {jobType && jobType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.jobTypeName}
                                </MenuItem>
                            ))}
                        </TextField> */}

                        <Button fullWidth variant="contained" type='submit' >Create user</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default DashCreateUser
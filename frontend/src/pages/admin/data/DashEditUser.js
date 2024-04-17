import { Box, MenuItem, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
//import { allUserAction, userSingleAction } from '../../redux/actions/userAction';
import { allUserAction, userSingleAction,editSingleUserAction } from '../../../redux/actions/userAction';
import { useNavigate, useParams } from 'react-router-dom';
//import { EDIT_USER_RESET } from '../../redux/constants/userConstant';
import { EDIT_USER_RESET } from '../../../redux/constants/userConstant';



const validationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required('First name is required'),
    lastName: yup
        .string()
        .min(6, 'Last name should be at least 6 characters long')
        .required('Last name is required'),
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be at least 8 characters long')
        .required('Password is required'),
});


const DashEditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    //job type
    useEffect(() => {
        dispatch(allUserAction());
        if (id) {
            dispatch(userSingleAction(id));
        }
    }, [id]);


    //const { jobType } = useSelector(state => state.jobTypeAll);
    const { user, loading } = useSelector(state => state.singleUser);
    const { success } = useSelector(state => state.updateUser,
    );

    const formik = useFormik({
        initialValues: {
            _id: user?._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            password: user?.password,

        },
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values, actions) => {
            dispatch(editSingleUserAction(values))
            // alert(JSON.stringify(values, null, 2));
            actions.resetForm();
        },
    });


    //redirect after successfull update
    useEffect(() => {
        if (success && success === true) {
            setTimeout(() => {
                dispatch({ type: EDIT_USER_RESET })
                navigate('/admin/users');
            }, 800)
        }
    }, [success && success]);



    return (
        <>

            <Box sx={{ height: '100%', display: "flex", alignItems: "center", justifyContent: "center", pt: 4 }}>


                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Typography variant="h5" component="h2" sx={{ pb: 3 }}>
                            Edit User
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="firstName"
                            label="firstName"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="lastName"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="email"
                            name="email"
                            label="email"
                            type="email"
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

                       {/* <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="available"
                            name="available"
                            label="Available"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="password"
                            value={formik.values.available}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.available && Boolean(formik.errors.available)}
                            helperText={formik.touched.available && formik.errors.available}
                        />

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

                        <Button fullWidth variant="contained" type='submit' >Edit User</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default DashEditUser
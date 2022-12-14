import { Button,TextField,Box } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";

function Product(){
    
    const validateForm = (formData) => {
        var errors = {}
        if (formData.email === '') errors.email = 'Email is Required';

        return errors;
    }

    const handleSubmit = async (formData, { resetForm }) => {
        // delete (formData.userName);


        const response = await axios.post("https://bulk-email.onrender.com/product/singlecheck", { ...formData });
        if (response.data) {
            
            alert({msg:"response.data"})
        }
        resetForm();

    };
    return(
        <div className="container">
            <div className="row">
        <div className="col-sm-4 auth-container" style={{ margin:"auto", fontSize:"18px"}}>
            <p>Enter a single email to verify</p>
        <Formik initialValues={{
            email: "",
          
        }} validate={(formData) => validateForm(formData)}
            onSubmit={handleSubmit}>

            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,

            }) => (

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}

                    autoComplete="off"
                    onSubmit={handleSubmit}


                >
                    <TextField id="standard-basic"
                        label="Email"
                        variant="standard"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></TextField>
                    <br />
                    <span style={{ color: 'red' }}>{touched.email && errors.email}</span>
                    <br />
                    
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>)}
        </Formik>
        </div>
</div>
</div>
    )
}
export default Product;
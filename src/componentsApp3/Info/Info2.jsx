/* eslint-disable no-undef */
import React from "react";
import { Formik } from "formik";
import * as yup from 'yup';



import styles from "./Info.module.scss";

export default function Info() {
    const validationSchema = yup.object().shape({
        name: yup.string().typeError('должна быть строка').required('Обязательное поле'),
        secondName: yup.string().typeError('должна быть строка').required('Обязательное поле'),
        password: yup.string().typeError('должна быть строка').required('Обязательное поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
        email: yup.string().email('введите корректный еmail').required('Обязательное поле'),
        confirmEmail: yup.string().email('введите корректный еmail').oneOf([yup.ref('email')], 'Email не совпадает').required('Обязательное поле')
    })
    return(
        <form>  
        {/* <label htmlFor="">
            <input type="file" onChange={(e) => {
                // console.log(e.target.files[0]);
                const reader = new FileReader();
                reader.onload = (e) => {
                    console.log(e.target.result)
                }
                reader.readAsDataURL(e.target.files[0]);
                
                }}/>
        </label>  
        <button type="submit" ></button>    */}
         
        <Formik
            initialValues={
                {
                    name: "",
                    secondName: "",
                    password: "",
                    confirmPassword: "",
                    email: "",
                    confirmEmail: ""
                }
            }
            validateOnBlur
            onSubmit={(values) => {console.log(values)}}
            validationSchema={validationSchema}
        >
            {({values, errors, touched, handleChange, handleBlur,isValid, handleSubmit, dirty}) => (
            <div>
                <label className={styles.labelForm}>
                    <p>NAME</p>
                    <input 
                    type={`text`}
                    name={`name`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name} 
                    /> 
                    {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}                   
                </label>
                
                <label className={styles.labelForm}>
                    <p>SECOND NAME</p>
                    <input 
                    type={`text`}
                    name={`secondName`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName} 
                    />   
                     {touched.secondName && errors.secondName && <p className={styles.error}>{errors.secondName}</p>}                 
                </label>
               
                <label className={styles.labelForm}>
                    <p>password</p>
                    <input 
                    type={`password`}
                    name={`password`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password} 
                    /> 
                    {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}                   
                </label>
                
                <label className={styles.labelForm}>
                    <p>confirm Password</p>
                    <input 
                    type={`password`}
                    name={`confirmPassword`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword} 
                    /> 
                    {touched.confirmPassword && errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}                   
                </label>
               
                <label className={styles.labelForm}>
                    <p>Email</p>
                    <input 
                    type={`email`}
                    name={`email`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} 
                    />   
                    {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}                 
                </label>
                
                <label className={styles.labelForm}>
                    <p>confirm Email</p>
                    <input 
                    type={`email`}
                    name={`confirmEmail`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmEmail} 
                    />   
                    {touched.confirmEmail && errors.confirmEmail && <p className={styles.error}>{errors.confirmEmail}</p>}                 
                </label>
               
                <button
                type={`submit`}
                onClick={handleSubmit}
                disabled={!dirty && !isValid}
                >Submit</button>
            </div>)} 
            
        </Formik>
        </form>
    );
}
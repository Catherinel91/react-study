
import React, { useEffect, useRef, useState } from 'react';
import { Field, Formik, FieldArray, Form  } from "formik";
import * as yup from 'yup';
import axios from "axios";


import styles from "./Info.module.scss";
import BtnSubmit from './formComponents/btnSubmit';
import Area from './formComponents/textarea';
import SelectComponent from './formComponents/select';
import Input from './formComponents/input';
import File3 from './formComponents/file3';
import Preview from './formComponents/preview';

const validationSchema = yup.object().shape({
    name : yup.string().typeError('должна быть строка').trim().matches(/^[a-zа-яё]+$/i,"Введите корректные данные").when('secondName', {                                                    
        is: (secondName) => !secondName || secondName.length === 0,                      
        then: yup.string().required('Обязательное поле') }),
    secondName:  yup.string().typeError('должна быть строка').trim().matches(/^[a-zа-яё]+$/i,"Введите корректные данные").when('name', {                                                    
        is: (name) => !name || name.length === 0,                      
        then: yup.string().required('Обязательное поле') }),
    area: yup.string().typeError('должна быть строка').min(10, 'Введите минимум 10 символов').required('Обязательное поле'),
    email: yup.string().email('введите корректный еmail').required('Обязательное поле'),
    select:  yup.string().required('Обязательное поле'),
    file: yup.mixed().nullable()
          .test('fileSize', 'Размер файла больше 2 Mбайт', (value) => !(value) || (value && value.size < 2097152))
          .test("fileFormat", 'Добавьте файл с правильным форматом',
          (value) => !(value) || (value && [`image/jpeg`, `image/png`].includes(value?.type)))
    },   
    [["secondName", "name"]]
)

const options = [
    { value: 'Select', id: '1' },
    { value: 'Select2', id: '2' },
    { value: 'Select3', id: '3' },
];

const inputText = [
    { value: 'Name', type: 'text' },
    { value: 'Second Name', type: 'text' },
    { value: 'Email', type: 'email'},
];

const initialValues={
    name: "",
    secondName: "",
    email: "",
    select: "",
    area: "",
    file: null
}

var formData = new FormData();



const onSubmitForm = (values) => {
    // axios.post('http://localhost:3001/files/', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    // }).then(data => console.log(data))
    axios.post("http://localhost:3001/files/", values).then(values => console.log(values))
}

export default function Info5() { 
   

    return(
        <>       
         
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validateOnBlur
            onSubmit={(values) => {
                
                onSubmitForm(values);
                // console.log(values)
            }}
            validationSchema={validationSchema}
        >
            {({values, errors, touched, handleChange, handleBlur,isValid, handleSubmit, dirty, setFieldValue}) => (
                    
            <Form className={styles.form}>
                <p className={styles.titleForm}>Title</p>
                {Object.keys(values).map((value,i) =>
                    { 
                        if(i < 3) {
                            return <Field 
                                key={i}
                                text={inputText[i].value}
                                type={inputText[i].type}
                                component={Input} 
                                name={`${value}`} 
                                onChange={handleChange}  
                                onBlur={handleBlur} 
                                value={values.value}
                            />
                        }
                    }
                 )}

                <Field 
                    component={SelectComponent} 
                    name={`select`} 
                    options={options} 
                    onChange={handleChange}  
                    onBlur={handleBlur} 
                    value={values.select}
                />              
                
                <Field
                    component={Area}
                    name={`area`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.area} 
                />                    
               

                <Field component={File3}
                       name={`file`}
                       onChange={(e) => {
                           setFieldValue("file", e.target.files[0]);
                        //    formData.append("image", e.target.files[0]);
                        //    console.log(formData)
                       }}
                />
                {values.file && <Preview file={values.file}  setFieldValue={(e)=> setFieldValue("file", null)}/>}

                
                <Field
                    type={"submit"}
                    text={`Submit`}
                    component={BtnSubmit}
                    onClick={handleSubmit}
                    disabled={!dirty && !isValid}
                />
            </Form>)}             
            
        </Formik>

        </>
    );
}
import React from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik} from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'
//Fromik- it is a libarary which helps us to create form easily that form keep tracks of our our values instead of us passing those values using state
// yup is used here to tackle with invalidation in the input feilds
// here we will create a schema for the validation of the input parameters .It is just a set of rules that the input values must follow
const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    // there the yup.thing decides the datatype of the values to be entered and for most of the cases it is a string 
    // the .required feild contains the required parameter for the input object if the input value does not follow the mentioned parameters then required return false
    body: yup.string().required().min(8),
    // in rating schema the first partis the name of the test or the function and the second part is the error message in case test return false
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
        // since the input for the numbers is also a string so before putting conddition we have to convert it into a integer
    })
})

export default function ReviewForm({addReview}) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                // for validation we have used a prop here called validation schema and have passed our previously made function in it
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                     {/* onsubmit prop is going to be a function which will work when we submit the form all the values entered in the form will come to this onSubmit function as the value prop
          
          action provides us many methods one of which is form reset which resets the form to its original state*/}
                    addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            // the onblur feature enables the error to show up we move from one input feild to other 
                            // without it the error would be shown only when we submit the form
                            onBlur={props.handleBlur('title')}

                        />
                        {/* when yup encouters with errors the it passes those errors to the formik and it attaches those errors to the props thatg we get inside the render function inside formik so that we can access them */}
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        {/* we ave added touched so that the error is showed only for the parameter where the error has been done and not be shown when we are inputing something else */}

                        <TextInput 
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text='submit' onPress={props.handleSubmit} />
                         {/* on presssing this button it will call onSubmit function here  */}

                    </View>
                )}
            </Formik>
        </View>
    )
}
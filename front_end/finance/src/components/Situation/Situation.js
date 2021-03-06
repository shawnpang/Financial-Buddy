import React from 'react'
import {useFormik} from 'formik';
import {Link, Redirect} from 'react-router-dom';
import './Situation.css'

function Situation(props) {

    const formik = useFormik({
        initialValues: {
            credit: "",
            savings: "",
            loan: "",
        },
    })

    const onSubmit = async (values) => {

        values.preventDefault();
        console.log(values.target.savings.value);
        
        props.history.push("/preferences");
        
        // const response = await fetch("",
        //     {
        //         method: "GET", 
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: {
        //             situationCredit: values.target.credit.value,
        //             situationSavings: values.target.savings.value,
        //             situationLoan: values.target.loan.value,
        //         }
        //     }
        // );

        // if(!response.ok) {
        //     throw new Error(response.messages)
        // }
        
        // const user = await response.json();

        // do something with the data
    }

    return (
        <div className='situation'>
            <div className='situation-left'>
                <div className="situation-progress">
                    <div className="situation-now-future">
                        Now vs. the Future
                    </div>

                    <div className="situation-preferences">
                        Preferences 
                    </div>

                    <div className="situation-goals">
                        Goals
                    </div>
                </div>
            </div>
            <div className='situation-title-set'>
                <div className='step1'>
                    Step 1 of 3
                </div>
                <div className='situation-title'>
                    Tell us a bit about yourself
                </div>

                <div className='situation-question'>
                    How are you doing financially?
                </div>

                <div>
                    <form className="baseForm" onSubmit={onSubmit} noValidate>
                        <div>
                            <div className='situation-credit-title'>
                                Your Current Credit Score
                                <br/>
                                <input
                                type="text"
                                name="credit"
                                id="credit"
                                className="credit"
                                value={formik.values.credit} 
                                onChange={formik.handleChange} 
                                />
                                
                            </div>
                        </div>
                        <div>
                            <div className='situation-savings-title'>
                                Your Current Savings 
                                <br/>
                                <input
                                type="text"
                                name="savings"
                                id="savings"
                                className="savings"
                                placeholder="$"
                                value={formik.values.savings} 
                                onChange={formik.handleChange} 
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='situation-loan-title'>
                                Your Total Student Loan
                                <br/>
                                <input
                                type="text"
                                name="loan"
                                id="loan"
                                className="loan"
                                placeholder="$"
                                value={formik.values.loan} 
                                onChange={formik.handleChange} 
                                />
                                <br/>
                            </div>
                        </div>

                        <div className='situation-next'>
                            <input
                            type="submit"
                            value="Next step -> "
                            onChange={formik.handleChange} 
                            className='situation-next-button'
                            />
                        </div>
                    </form>

                    <div className='situation-skip'>
                            <Link to='/preferences'>
                                <input
                                type="button"
                                value="Skip for now"
                                className='situation-skip-button'
                                />
                            </Link>
                    </div>

                    <div className="situation-to-home">
                        <Link to='/'>
                            Back to the homepage
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Situation

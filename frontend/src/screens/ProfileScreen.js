import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

function ProfileScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { successUpdate, errorUpdate, loadingUpdate } = userUpdateProfile;
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;


    useEffect(() => {
        if(!user){
          dispatch({type: USER_UPDATE_PROFILE_RESET})
         dispatch(detailsUser(userInfo.id));

        }else{
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo.id, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and Confirm Password you entered, do not match!");
        } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }))
        }
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {
                    loading ? <LoadingBox></LoadingBox> :
                        error ? <MessageBox variant="danger">{error}</MessageBox> :

                            <>
                                {loadingUpdate && <LoadingBox></LoadingBox>}
                                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                                {successUpdate && <MessageBox variant="success">Profile Updated Successfully</MessageBox>}
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Enter your e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                    <input type="password" id="confirmpassword" placeholder="Enter confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                                </div>
                                <div>
                                    <label />
                                    <button className="primary" type="submit">Update</button>
                                </div>
                            </>
                }
            </form>
        </div>
    )
}

export default ProfileScreen

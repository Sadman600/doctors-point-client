import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInError;

    if (gError || error) {
        signInError = <p className='text-error text-sm font-bold'>{gError?.message || error?.message}</p>
    }
    if (gLoading || loading) {
        return <Loading></Loading>
    }
    if (gUser) {
        console.log(gUser);
    }

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white text-lg">Enter your email</span>
                            </label>
                            <input
                                type="email"
                                // name="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                                        message: 'Provide a valide email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-lg font-bold text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-lg font-bold text-error">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white text-lg">Enter your password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-lg font-bold text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-lg font-bold text-error">{errors.password.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mt-5">
                            {signInError}
                            <input type="submit" value='Login' className="btn btn-neutral w-full max-w-xs text-white capitalize text-lg font-bold " />
                        </div>

                    </form>

                    <div>
                        <div className="divider text-white">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn  btn-error w-full max-w-xs text-white  text-sm font-bold ">Continue with Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
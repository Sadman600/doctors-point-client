import React from 'react';

const OurGoal = ({ goal }) => {
    const { goalName, goalDis, image } = goal;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{goalName}</h2>
                <p>{goalDis}</p>
            </div>
        </div>
    );
};

export default OurGoal;
import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    const handleBooking = e => {
        e.preventDefault();
        const date = e.target.date.value;
        console.log(date);
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <input type="text" name='date' disabled readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs my-1" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mt-1">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs my-1" />
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs my-1" />
                        <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full max-w-xs my-1" />

                        <input type="submit" className="btn btn-primary w-full max-w-xs " />
                    </form>
                </div>
            </div>


        </div >
    );
};

export default BookingModal;
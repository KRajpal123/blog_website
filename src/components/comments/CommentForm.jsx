import React, { useState } from 'react'

const CommentForm = ({ btnLable,
    formSubmitHandler,
    formCancelBtn = null,
    initialText = '',
}) => {
    const [value, setValue] = useState(initialText);

    const submitHandle = (e) => {
        e.preventDefault();
        formSubmitHandler(value);
        setValue("")
    }
    return (
        <form onSubmit={submitHandle}>
            <div className="flex flex-col items-end border border-primary rounded-lg p-4">
                <textarea rows="5"
                    className="w-full focus:outline-none bg-transparent"
                    placeholder="Leave your comment here."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row">
                    {
                        formCancelBtn && (
                            <button className='px-6 py-2 rounded-lg
                            border border-red-500 text-red-500
                            '
                                onClick={formCancelBtn}
                            >
                                Cancel
                            </button>
                        )
                    }

                    <button type='submit'
                        className="px-6 py-2.5 rounded-lg bg-primary
                           text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {btnLable}
                    </button>
                </div>

            </div>
        </form>
    )
}

export default CommentForm
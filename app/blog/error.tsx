'use client'

const ErrorWrapper = ({ error }: { error: Error }) => {
    return (
        <>
            <h1>Oops!!! {error.message}</h1>
            <p>Please try reload page!</p>
        </>
    )
}

export default ErrorWrapper
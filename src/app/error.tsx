"use client" // Error boundaries must be Client Components
import {Button} from "@nextui-org/react";
import {useEffect} from "react"

export default function Error(
    {
        error,
        reset,
    }: {
        error: Error & { digest?: string }
        reset: () => void
    }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold text-center py-5">Something went wrong!</h2>
            <div className=" mx-auto max-w-72">
                <Button color="danger" fullWidth
                        onClick={
                            () => reset()
                        }
                >
                    Let&apos;s try again!
                </Button>
            </div>
        </div>
    )
}
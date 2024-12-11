import React from 'react';

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec))

const getTest = async () => {
    console.log("test")
    await sleep(100)
    console.log("test2")
    return "test"
}

export const Test = async () => {
    const test = await getTest()
    return (
        <div>
            {test}
        </div>
    )
}


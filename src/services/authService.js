import { BehaviorSubject } from "rxjs";

export const fakeLoginApi = (data) => {
    return new Promise((resolve, reject) => {
        console.log("Sucessfully Submitted DATA", data)

        if (!data) resolve({ error: true, message: "Please provide email and password" })
        if (data.email !== "example@gmail.com") resolve({ error: true, message: "Email does not exist" })

        resolve({
            success: true,
            token: "edfdcvxcvxcdgfklj"
        });
    })
}

export const getUserData = (token) => {
    return new Promise((resolve, reject) => {

        console.log("Sucessfully Submitted DATA", token)
        if (!token) resolve({ error: true, message: "Unauthorized" })
        if (token !== "edfdcvxcvxcdgfklj") resolve({ error: true, message: "Unauthorized" })

        resolve({
            success: true,
            user: "example@gmail.com"
        });
    })
}

export const authObserver = new BehaviorSubject({
    token: localStorage.getItem("token")
});


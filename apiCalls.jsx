export const loginCall = async (userCredential,dispatch)=>{
    dispatch({type: "LOGIN_START"});
    try{
        let response = await fetch("http://localhost:4444/api/auth/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCredential),
        })
        await dispatch({type: "LOGIN_SUCCESS", payload: await response.json()})
    }catch(err){
        dispatch({type: "LOGIN_FAILURE", payload: err})
    }
};
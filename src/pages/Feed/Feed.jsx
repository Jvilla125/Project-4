import React from "react";
import PageHeader from "../../components/Header/Header"

export default function Feed({loggedUser}){
    return (
        <PageHeader loggedUser={loggedUser}/>
    )
}
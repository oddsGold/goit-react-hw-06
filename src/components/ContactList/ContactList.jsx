import React, {useEffect, useState} from "react";
import contactList  from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx";
import {useSelector} from "react-redux";
import {selectContacts, selectNameFilter} from "../../redux/selectors.js";

const ContactList = () => {

    const name = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(name.toLowerCase())
        );
        setArrayFiltered(filteredContacts);
    }, [name, contacts]);

    const [arrayFiltered, setArrayFiltered] = React.useState([]);

    return (
        <div className={contactList["contact-list"]}>
            {
                arrayFiltered.map((item) => {
                    return(
                        <div key={item.id} className={contactList["contact-list-item"]}>
                            <Contact
                                id={item.id}
                                name={item.name}
                                number={item.number}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactList;
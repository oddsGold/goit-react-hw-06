import React from "react";
import contactList  from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx";
import {useSelector} from "react-redux";
import {selectContacts} from "../../redux/selectors.js";

const ContactList = () => {
    const contacts = useSelector(selectContacts);

    return (
        <div className={contactList["contact-list"]}>
            {
                contacts.map((item) => {
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
// import localforage from "localforage";
import { redirect } from "react-router-dom";
import { getContact, getContacts, updateContact } from "../contacts";

export async function getContactsLoader() {
    // localforage.clear();
    const contacts = await getContacts();
    return { contacts };
}

export async function getContactLoader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}

export async function editContactAction({ request, params }) {

    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}
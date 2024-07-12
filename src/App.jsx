import { useState } from "react"
import { initialContacts } from "./contacts.js"
import EditContact from "./EditContact.jsx";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContactId, setSelectedContactId] = useState(1);

  const selectedContact = contacts.find((contact) => contact.id === selectedContactId); 

  function handleUpdateContact(updatedContact) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return {
            ...contact,
            name: updatedContact.name,
            email: updatedContact.email
          };
        } else {
          return contact;
        }
      })
    )
  }
  
  return (
    <>
      { contacts.map((contact) => (
        <button 
          key={contact.id}
          onClick={() => setSelectedContactId(contact.id)}>
          { contact.id === selectedContactId ? 
            <b>{contact.name}</b> : 
            contact.name
          }
        </button>
      ))}
      <hr />

      <EditContact 
        selectedContact={selectedContact}
        onSave={(updatedContact) => handleUpdateContact(updatedContact)} 
      />
    </>
  )
}

export default App

import { useState } from 'react';

export default function EditContact({ selectedContact, onSave }) {
    return (
        <>
            <Contact 
                key={selectedContact.id}
                selectedContact={selectedContact}
                onSave={onSave}
            />
        </>
    )
}

function Contact({ selectedContact, onSave }) {
    const [name, setName] = useState(selectedContact.name);
    const [email, setEmail] = useState(selectedContact.email);

    function handleOnSave() {
        return {
            id: selectedContact.id,
            name: name,
            email: email,
        }
    }

    return (
        <>
            <div>
                <label>Nama:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <br />

            <div>
                <button
                    onClick={() => onSave(handleOnSave())}>
                    Simpan
                </button>

                <button
                    onClick={() => {
                        setName(selectedContact.name);
                        setEmail(selectedContact.email);
                    }}>
                Atur Ulang
                </button>
            </div>
        </>
    )
}
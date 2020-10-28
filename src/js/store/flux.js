const getState = ({ getStore, setStore }) => {
	return {
		store: {
            contacts:
            [
                {
                    id: "1473",
                    agenda_slug: "aospina001",
                    full_name: "Dave Bradley",
                    email: "dave@gmail.com",
                    phone: "7864445566",
                    address: "47568 NW 34ST, 33434 FL, USA",
                    created_at: "2020-10-26 23:55:03"
                }
            ]
		},
		actions: {
            createContact:  (full_name, email, address, phone) => {
                const dataToPost = {
                    full_name,
                    email,
                    address,
                    phone
                }

            },
            updateContact: (id, full_name, email, address, phone) => {
                const dataToPost = {
                    id,
                    full_name,
                    email,
                    address,
                    phone
                }
            },
            deleteContact: (id) => {
                const dataToPost = {
                    id
                }
            },
            getContacts: (id, full_name, email, address, phone) => {
                const dataToPost = {
                    id,
                    full_name,
                    email,
                    address,
                    phone
                }
            }
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;

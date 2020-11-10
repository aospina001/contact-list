const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			addContact: async (name, email, phone, address) => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: name,
							email: email,
							agenda_slug: "aospina001",
							address: address,
							phone: phone
						})
					});

					getActions().getContacts();
				} catch (error) {
					console.log(error);
				}
			},
			editContact: async (id, full_name, email, address, phone) => {
				try {
					const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: full_name,
							email: email,
							agenda_slug: "aospina001",
							address: address,
							phone: phone
						})
					});

					getActions().getContacts();
				} catch (error) {
					console.log(error);
				}
			},
			deleteContact: async id => {
				const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().getContacts();
			},
			getContacts: async () => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/aospina001");
					const contacts = await response.json();
					setStore({ contacts: contacts });
				} catch (error) {
					console.log(error);
				}
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;

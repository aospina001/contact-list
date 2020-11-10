import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const { id, index } = useParams();
	const [full_name, updateFullName] = useState(store.contacts[index].full_name);
	const [email, updateEmail] = useState(store.contacts[index].email);
	const [phone, updatePhone] = useState(store.contacts[index].phone);
	const [address, updateAddress] = useState(store.contacts[index].address);

	const history = useHistory();

	function handleClick() {
		history.push("/Contacts");
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={e => updateFullName(e.target.value)}
							value={full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={e => updateEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={e => updatePhone(e.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={e => updateAddress(e.target.value)}
							value={address}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.editContact(id, full_name, email, phone, address);
							history.push("/");
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

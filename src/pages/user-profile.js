import Head from 'next/head';
import styles from '../styles/UserProfile.css';
import { useState } from 'react';

export default function UserProfile() {
    const [editMode, setEditMode] = useState(false);
    const [userFields, setUserFields] = useState({
        npwp: "00.000.000.0-000.000",
        pkp: "Contoh Nama PKP",
        alamat: "Jl. Contoh Alamat, No.00, Jakarta",
        url: "http://example.com",
        name: "Username",
        password: "password123"
    });

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    return (
        <>
            <Head>
                <title>Faktur Pajak | User Profile</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            </Head>
            <div className={`container ${styles.profileContainer}`}>
                <div className="alert alert-info text-center">
                    <h4 style={{ marginBottom: "0px" }}><strong>Selamat datang</strong> di Faktur Pajak</h4>
                </div>
                <div className="h2">Profile User</div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">NPWP:</th>
                                <td><input type="text" className="form-control" value={userFields.npwp} onChange={e => setUserFields({...userFields, npwp: e.target.value})} disabled={!editMode} />                                <button className="btn btn-primary" onClick={handleEdit}>
                                    {editMode ? 'Save' : 'Edit'}
                                </button></td>
                            </tr>
                            <tr>
                                <th scope="row">Nama PKP:</th>
                                <td><input type="text" className="form-control" value={userFields.pkp} disabled /></td>
                            </tr>
                            <tr>
                                <th scope="row">Alamat:</th>
                                <td><input type="text" className="form-control" value={userFields.alamat} disabled /></td>
                            </tr>
                            {/* Continue for other fields */}
                        </tbody>
                    </table>
            </div>
        </>
    );
}

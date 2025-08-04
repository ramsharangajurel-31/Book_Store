import React, { useState } from 'react';

const CompanyForm = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
    <div className="company-body">
      <div className="row">
        <div className="col-md-6">
        <div className="company-form">
          <h4  style={{textAlign:'center', margin:"10px"}} >Company Info Form</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={companyData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={companyData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3"> 
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={companyData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={companyData.email}
                onChange={handleChange}
              />
            </div>
          </form>
          </div>
        </div>


        <div className="col-md-6">
          <div className="company-card ">
          <h4 style={{textAlign:'center', margin:"10px"}}>Live Preview</h4>
            <h5>{companyData.name || "Company Name"}</h5>
            <p><strong>Address:</strong> {companyData.address || "Your company address"}</p>
            <p><strong>Phone:</strong> {companyData.phone || "000-0000000"}</p>
            <p><strong>Email:</strong> {companyData.email || "example@company.com"}</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default CompanyForm;

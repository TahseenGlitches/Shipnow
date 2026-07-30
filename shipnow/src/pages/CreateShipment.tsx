import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function CreateShipment() {
  const navigate = useNavigate();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [errors, setErrors] = useState<{ address?: string; method?: string }>({});

  const validate = () => {
    let valid = true;
    const newErrors: { address?: string; method?: string } = {};
    if (!deliveryAddress.trim()) { newErrors.address = 'Address is required.'; valid = false; }
    if (!shippingMethod) { newErrors.method = 'Shipping method is required.'; valid = false; }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    navigate('/shipments');
  };

  const handleReset = () => {
    setDeliveryAddress('');
    setShippingMethod('');
    setErrors({});
  };

  return (
    <Layout title="Create New Shipment">
      <header className="page-header">
        <div>
          <h1 className="page-title">Create New Shipment</h1>
          <div className="breadcrumb">
            <Link to="/dashboard">Dashboard</Link> / <Link to="/shipments">Shipments</Link> / <span className="current">Create New Shipment</span>
          </div>
        </div>
      </header>

      <form className="form-section" onSubmit={handleSubmit} noValidate>
        <h2 className="form-title">Shipment Form</h2>

        <section className="fieldset">
          <h3 className="fieldset-title">Sender Info</h3>
          <div className="form-grid-2">
            <div className="field"><label>Company</label><input className="text-input" type="text" defaultValue="GreenHaven" /></div>
            <div className="field"><label>Email</label><input className="text-input" type="email" defaultValue="logistics@greenhaven.com" /></div>
            <div className="field"><label>Phone Number</label><input className="text-input" type="text" defaultValue="+1 408-555-7210" /></div>
            <div className="field"><label>Pickup Address</label><input className="text-input" type="text" defaultValue="1120 Birch Street, Portland, OR 97205, USA" /></div>
          </div>
        </section>

        <section className="fieldset" style={{ marginTop: 14 }}>
          <h3 className="fieldset-title">Recipient Info</h3>
          <div className="form-grid-2">
            <div className="field"><label>Company</label><input className="text-input" type="text" defaultValue="FreshNest" /></div>
            <div className="field"><label>Email</label><input className="text-input" type="email" defaultValue="warehouse@freshnest.com" /></div>
            <div className="field"><label>Phone Number</label><input className="text-input" type="text" defaultValue="+1 786-555-4432" /></div>
            <div className={`field ${errors.address ? 'invalid' : ''}`}>
              <label>Delivery Address</label>
              <input className="text-input" type="text" placeholder="Street address, city, state/province, ZIP code"
                value={deliveryAddress} onChange={(e) => { setDeliveryAddress(e.target.value); if (errors.address) setErrors((p) => ({ ...p, address: undefined })); }} />
              <div className="error" style={{ display: errors.address ? 'block' : 'none', fontSize: 11, color: '#F04A4A' }}>{errors.address}</div>
            </div>
          </div>
        </section>

        <section className="fieldset" style={{ marginTop: 14 }}>
          <h3 className="fieldset-title">Package Details</h3>
          <div className="form-grid-4">
            <div className="field" style={{ gridColumn: '1/-1' }}><label>Item Description</label><input className="text-input" type="text" defaultValue="Premium Garden Tool Set" /></div>
            <div className="field"><label>Quantity</label><input className="text-input" type="number" defaultValue={40} /></div>
            <div className="field"><label>Value</label><input className="text-input" type="text" defaultValue="$3,200" /></div>
            <div className="field"><label>Weight</label><input className="text-input" type="number" defaultValue={125} /></div>
            <div className="field"><label>Units</label><select className="select-input"><option>Kg</option><option>Lbs</option></select></div>
          </div>
          <div className="form-grid-3" style={{ marginTop: 14 }}>
            <div className="field"><label>Length</label><input className="text-input" type="text" defaultValue="80 cm" /></div>
            <div className="field"><label>Width</label><input className="text-input" type="text" defaultValue="60 cm" /></div>
            <div className="field"><label>Height</label><input className="text-input" type="text" placeholder="ex. 20 cm" /></div>
          </div>
        </section>

        <section className="fieldset" style={{ marginTop: 14 }}>
          <h3 className="fieldset-title">Shipping Details</h3>
          <div className="radio-row" style={{ marginBottom: 14 }}>
            <label><input type="radio" name="freight" defaultChecked /> Road Freight</label>
            <label><input type="radio" name="freight" /> Rail Freight</label>
            <label><input type="radio" name="freight" /> Ocean Freight</label>
            <label><input type="radio" name="freight" /> Air Freight</label>
          </div>
          <div className="form-grid-4">
            <div className="field"><label>Carrier</label><select className="select-input"><option>FedEx</option><option>DHL</option><option>UPS</option></select></div>
            <div className={`field ${errors.method ? 'invalid' : ''}`}>
              <label>Shipping Method</label>
              <select className="select-input" value={shippingMethod}
                onChange={(e) => { setShippingMethod(e.target.value); if (errors.method) setErrors((p) => ({ ...p, method: undefined })); }}>
                <option value="">Select Method</option>
                <option value="express">Express Delivery</option>
                <option value="standard">Standard Ground</option>
              </select>
              <div className="error" style={{ display: errors.method ? 'block' : 'none', fontSize: 11, color: '#F04A4A' }}>{errors.method}</div>
            </div>
            <div className="field"><label>Shipment ID</label><input className="text-input" type="text" defaultValue="#SH9583742" disabled /></div>
            <div className="field"><label>Shipment Date</label><input className="text-input" type="text" defaultValue="March 21, 2035" /></div>
          </div>
          <div className="field" style={{ marginTop: 14 }}><label>Notes</label><textarea className="textarea-input" placeholder="Add special delivery notes (optional)" /></div>
          <div className="form-grid-2" style={{ marginTop: 14 }}>
            <div>
              <h4 className="fieldset-title" style={{ marginBottom: 10 }}>Additional Services</h4>
              <div className="check-row">
                <label><input type="checkbox" defaultChecked /> Insurance Coverage</label>
                <label><input type="checkbox" defaultChecked /> Signature on Delivery</label>
                <label><input type="checkbox" defaultChecked /> Temperature Control</label>
                <label><input type="checkbox" /> Fragile Item Handling</label>
              </div>
            </div>
            <div>
              <h4 className="fieldset-title" style={{ marginBottom: 10 }}>Tracking & Status Updates</h4>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                <span className="switch" style={{ position: 'relative', width: 38, height: 22, display: 'inline-block' }}>
                  <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                  <span className="slider" style={{ position: 'absolute', inset: 0, borderRadius: 999, background: '#856DF3', transition: '.2s' }}>
                    <span style={{ content: '', width: 16, height: 16, borderRadius: '50%', background: 'white', position: 'absolute', left: 3, top: 3, transform: 'translateX(16px)', transition: '.2s' }} />
                  </span>
                </span>
                Notify Recipient via Email/SMS
              </label>
            </div>
          </div>
        </section>

        <div className="footer-actions">
          <button className="btn btn-light" type="button" onClick={handleReset}>Delete Form</button>
          <button className="btn btn-dark" type="submit">Submit Shipment</button>
        </div>
      </form>
    </Layout>
  );
}

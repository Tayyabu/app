

interface Service {
  id: number;
  name: string;
  description: string;
}
const services: Service[] = [
  { id: 1, name: "Custom Tailoring", description: "Providing personalized tailoring services for all types of garments." },
  { id: 2, name: "Alterations", description: "Offering alterations to ensure the perfect fit for your clothing." },
  { id: 3, name: "Dry Cleaning", description: "Professional dry cleaning services for delicate and everyday fabrics." },
  { id: 4, name: "Wardrobe Consultation", description: "Helping you organize and optimize your wardrobe for any occasion." },
  { id: 5, name: "Embroidery Services", description: "Custom embroidery to add unique designs to your clothing." },
];


function ServicesPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <ul className="list-none p-0">
        {services.map(service => (
          <li key={service.id} className="mb-5 border border-gray-300 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesPage;

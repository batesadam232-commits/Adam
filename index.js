export default function Home() {
  const products = [
    { id: 1, title: "Jordan 4 Retro", price: 320 },
    { id: 2, title: "Yeezy 350", price: 280 },
    { id: 3, title: "Nike Dunk Low", price: 190 }
  ];

  const demoBuy = () => {
    alert("Demo only — Apple Pay coming soon");
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Resell Marketplace (Demo)</h1>
      <p>This is a demo site. Payments are disabled.</p>

      {products.map(p => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ddd",
            padding: 20,
 marginBottom: 20,
            borderRadius: 8
          }}
        >
          <h2>{p.title}</h2>
          <p>${p.price}</p>
          <button
            onClick={demoBuy}
            style={{
              padding: "10px 16px",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Buy with Apple Pay
          </button>
        </div>
      ))}
    </div>
  );
}

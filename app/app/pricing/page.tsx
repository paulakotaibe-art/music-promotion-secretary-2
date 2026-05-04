export default function Pricing() {
  return (
    <div style={{padding:40}}>
      <h2>Pricing</h2>
      <button onClick={()=>alert("Stripe not connected yet")}>
        Subscribe £5
      </button>
    </div>
  )
}

export default function TankCard({ tank }) {
  return (
    <div style={{border:"thin solid black", width: "50%", textAlign:"center", margin:"0 auto"}}>
      <p>{tank.image}</p>
      <p>{tank.name}</p>
    </div>
  );
}

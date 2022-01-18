import "./style/Price.css";

export const Price = () => {
   return (
      <div className="main__price price">
         <span className="price__real">$32 <sup>80</sup> <span className="price__slash">/Cs</span> <span className="price__info">(SO.21/oz)</span></span>
         <span className="price__real">$730 <sup>40</sup> <span className="price__slash"></span></span>
         <span className="price__approx">Approx. Lead Time: <span>12 days</span></span>
         <p className="price__desc">Information about productwas provideed by manuchexr</p>
      </div>
   );
}
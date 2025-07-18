// About.jsx
const About = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-[#FF5722] mb-6 text-center">
          About QuickBite
        </h1>
        <p className="text-lg text-gray-700 mb-5">
          Welcome to <span className="font-semibold text-[#FF5722]">QuickBite</span> – your go-to destination for fast, fresh, and delicious food delivered right to your doorstep.
        </p>
        <p className="text-lg text-gray-700 mb-5">
          At QuickBite, we believe that great food should be just a click away. Whether you're craving spicy street food, gourmet burgers, or comforting home-style meals, we’ve got something for every mood and moment. With a wide range of local restaurants and cloud kitchens, QuickBite brings your favorite dishes from your neighborhood right to your home.
        </p>
        <p className="text-lg text-gray-700 mb-5">
          Our platform is designed to make ordering food simple, smooth, and enjoyable. Browse through menus, check restaurant ratings, track your order live, and enjoy contactless delivery — all from a clean and easy-to-use interface.
        </p>

        <h2 className="text-2xl font-bold text-[#FF5722] mb-3">Why QuickBite?</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-1 mb-5">
          <li>🕒 Fast delivery</li>
          <li>🍱 Curated restaurant selection</li>
          <li>📱 Seamless browsing experience</li>
          <li>⭐ Honest ratings & reviews</li>
          <li>💳 Secure online payments</li>
        </ul>

        <p className="text-lg text-gray-700 mb-5">
          We’re passionate about food and even more passionate about delivering happiness — one bite at a time. Whether you're working late, relaxing on a Sunday, or throwing a house party, QuickBite is here to serve you.
        </p>

        <p className="text-xl font-semibold text-center text-[#FF5722]">
          QuickBite — Because hunger can’t wait.
        </p>
      </div>
    </div>
  );
}


export default About;
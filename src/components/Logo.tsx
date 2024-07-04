export default function Logo() {
  return (
    <div className="w-48 md:mx-auto">
      <picture>
        <source srcSet="logo-full.avif" type="image/avif" />
        <img src="logo-full.png" alt="logo" />
      </picture>
    </div>
  );
}

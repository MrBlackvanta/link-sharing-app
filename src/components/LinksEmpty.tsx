export default function LinksEmpty() {
  return (
    <div className="grid justify-items-center gap-6 rounded-xl bg-neutral-50 px-5 py-[46.5px] text-center">
      <picture>
        <source srcSet="links-empty.avif" type="image/avif" />
        <img
          src="links-empty.png"
          alt="hand tapping a phone with 2 paper pages at the back"
          className="h-20 md:h-40"
        />
      </picture>
      <h2 className="heading-dark">Let’s get you started</h2>
      <p className="body-m text-neutral-500">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}

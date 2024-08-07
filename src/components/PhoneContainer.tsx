export default function PhoneContainer() {
  return (
    <div className="hidden basis-[560px] rounded-xl bg-white lg:grid lg:place-content-center">
      <div className="h-[631px] w-[307px] rounded-[50px] border border-neutral-500 px-[11px] py-[10px]">
        <div className="grid size-full content-start justify-center gap-14 border py-12 [border-image:url(phone-notch-border.svg)_1_fill]">
          <div className="grid content-start justify-items-center gap-3">
            <div className="mb-3 aspect-square w-24 rounded-full bg-light-grey"></div>
            <div className="h-4 w-40 rounded-full bg-light-grey"></div>
            <div className="h-2 w-[72px] rounded-full bg-light-grey"></div>
          </div>
          <div className="scrollbar-hide grid gap-5 overflow-y-auto overscroll-contain">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-11 w-[237px] rounded-lg bg-light-grey"
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

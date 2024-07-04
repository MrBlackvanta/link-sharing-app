export default function PhoneContainer() {
  return (
    <div className="hidden basis-[40.5%] rounded-xl bg-white lg:grid lg:place-content-center">
      <div className="h-[631px] w-[307px] rounded-[50px] border border-neutral-500 px-[11px] py-[10px]">
        <div className="grid size-full content-start justify-center gap-14 border py-12 [border-image:url(phone-notch-border.svg)_1_fill]">
          <div className="grid content-start justify-items-center gap-3">
            <div className="bg-light-grey mb-3 aspect-square w-24 rounded-full"></div>
            <div className="bg-light-grey h-4 w-40 rounded-full"></div>
            <div className="bg-light-grey h-2 w-[72px] rounded-full"></div>
          </div>
          <div className="scrollbar-hide grid gap-5 overflow-y-auto overscroll-contain">
            {Array(6).fill(
              <div className="bg-light-grey h-11 w-[237px] rounded-lg"></div>,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

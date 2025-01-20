export function TimelineSegment({ isActive }: { isActive: boolean }) {
  if (isActive) {
    // Active version
    return (
      <div className="w-8 h-[71px] relative bg-[#3181db] rounded-[9px] overflow-hidden">
        {/* Diagonal lines for active */}
        <div className="w-8 h-px left-[-2px] top-[14.63px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[41.44px] h-px left-[35.48px] top-[41.96px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[41.44px] h-px left-[44.18px] top-[54.96px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[45.62px] h-px left-[35.34px] top-[38.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-8 h-px left-[-2px] top-[17.63px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[45.62px] h-px left-[44.03px] top-[51.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[45.29px] h-px left-[34.34px] top-[36.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-8 h-px left-[-1px] top-[19.63px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[46.96px] h-px left-[34.55px] top-[33.73px] absolute origin-top-left rotate-[135.11deg] opacity-20 bg-black" />
        <div className="w-[47.17px] h-px left-[33.52px] top-[31.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[33.68px] h-px left-[-1.19px] top-[22.82px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[47.39px] h-px left-[33.52px] top-[28.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[45.29px] h-px left-[43.03px] top-[49.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[40.75px] h-px left-[-1px] top-[25.82px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[46.96px] h-px left-[43.25px] top-[46.73px] absolute origin-top-left rotate-[135.11deg] opacity-20 bg-black" />
        <div className="w-[47.17px] h-px left-[42.22px] top-[44.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[40.75px] h-px left-[-1px] top-[28.82px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[47.39px] h-px left-[42.22px] top-[41.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[45.86px] h-px left-[-2px] top-[32.90px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-[-2px] top-[35.90px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-[-1px] top-[38.20px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-[-1px] top-[41.20px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-[-1px] top-[44.20px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-[-1px] top-[47.20px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[41.17px] h-px left-[37.53px] top-[42.98px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-[-1px] top-[50.20px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[48.37px] h-px left-0 top-[52.20px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[50.77px] h-px left-[-0.69px] top-[55.90px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[51.91px] h-px left-[35.61px] top-[23.71px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
        <div className="w-8 h-px left-[-3px] top-[12.63px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-8 h-px left-[-5px] top-[11.63px] absolute origin-top-left -rotate-45 opacity-20 bg-black" />
        <div className="w-[41.17px] h-px left-[46.22px] top-[55.98px] absolute origin-top-left rotate-[135deg] opacity-20 bg-black" />
      </div>
    )
  }

  // Non-active version
  return (
    <div className="w-8 h-[71px] relative opacity-20 bg-[#3182db] rounded-[9px] overflow-hidden">
      <div className="w-8 h-[74px] left-0 top-0 absolute bg-[#1083ff] rounded-[7px]" />
      <div className="w-8 h-px left-[-2px] top-[14.63px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-8 h-px left-[35.48px] top-[41.96px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-8 h-px left-[-2px] top-[17.63px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-8 h-px left-[35.34px] top-[38.71px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-8 h-px left-[-1px] top-[19.63px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[33.68px] h-px left-[-1.19px] top-[22.82px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-8 h-px left-[34.34px] top-[36.71px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-[40.75px] h-px left-[-1px] top-[25.82px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[40.75px] h-px left-[34.52px] top-[33.71px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-[40.75px] h-px left-[33.52px] top-[31.71px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-[40.75px] h-px left-[-1px] top-[28.82px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[40.75px] h-px left-[33.52px] top-[28.71px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-[45.86px] h-px left-[-2px] top-[32.90px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[-2px] top-[35.90px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[-1px] top-[38.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[-1px] top-[41.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[-1px] top-[44.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[-1px] top-[47.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[-1px] top-[50.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-0 top-[52.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[48.37px] h-px left-[1px] top-[54.20px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-[43.70px] h-px left-[35.61px] top-[23.71px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
      <div className="w-8 h-px left-[-3px] top-[12.63px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-8 h-px left-[-5px] top-[11.63px] absolute origin-top-left -rotate-45 opacity-10 bg-black" />
      <div className="w-8 h-px left-[37.53px] top-[42.98px] absolute origin-top-left rotate-[135deg] opacity-10 bg-black" />
    </div>
  )
}

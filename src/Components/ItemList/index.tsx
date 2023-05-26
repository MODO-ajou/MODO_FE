import { ReactComponent as Arrow } from '@/assets/arrow.svg';

export default function ItemTitle() {
  return (
    <>
      <div className="flex my-12">
        <div className="text-[25px] font-semibold">수원시</div>
        <div className="flex my-[7px] text-[20px] gap-1 align-bottom ">
          의 매물
          <Arrow />
        </div>
      </div>
    </>
  );
}

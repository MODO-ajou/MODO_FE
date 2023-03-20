import Button from '@/Components/Button';

function App() {
  return (
    <>
      <div className="my-4 flex gap-2 flex-wrap justify-center">
        <span className="text-[20px] font-bold">디자인 시스템</span>
      </div>
      <div className="my-4 flex gap-2 flex-wrap justify-center">
        <Button content="Button" color="brown1" />
        <Button content="Button" color="brown2" />
        <Button content="Button" color="brown3" />
        <Button content="Button" color="red" />
        <Button content="Button" color="green" />
        <Button content="Button" color="gray" />

        <Button content="Button" isSecondary color="brown1" />
        <Button content="Button" isSecondary color="brown2" />
        <Button content="Button" isSecondary color="brown3" />
        <Button content="Button" isSecondary color="red" />
        <Button content="Button" isSecondary color="green" />
        <Button content="Button" isSecondary color="gray" />
      </div>
    </>
  );
}

export default App;

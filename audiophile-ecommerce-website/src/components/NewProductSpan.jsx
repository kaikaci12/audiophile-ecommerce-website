export default function NewProductSpan({ className, spanStyles }) {
  return (
    <div className={`${className}`}>
      <span
        className={`text-#D87D4A text-center text-[14px] font-normal tracking-[10px] opacity-50 ${spanStyles}`}
      >
        NEW PRODUCT
      </span>
    </div>
  );
}

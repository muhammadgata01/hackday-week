const Textarea = ({
  valueLabel,
  valueRow,
  valueTextarea,
  onTextareaChange,
}) => {
  return (
    <div className="grid gap-2 mb-4">
      <label htmlFor={valueLabel}>{valueLabel}</label>
      <textarea
        id={valueLabel}
        rows={valueRow}
        className="input-style"
        placeholder={`Insert ${valueLabel}`}
        value={valueTextarea}
        onChange={onTextareaChange}
        required></textarea>
    </div>
  );
};

export default Textarea;

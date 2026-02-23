export default function CardItem({ title, value, colorClass = "" }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded px-1">
      <dt className="text-[10px] font-medium text-gray-700">{title}</dt>
      <dd className={"text-xs font-bold " + colorClass}>
        {value}
      </dd>
    </div>
  );
}

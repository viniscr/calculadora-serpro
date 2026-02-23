export default function CardHeader({ title, subtitle, icon }) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-1.5 mb-1">
        {icon && (
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
            {icon}
          </div>
        )}
        <h3 className="text-xs font-bold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-[10px] text-gray-600">{subtitle}</p>
    </div>
  );
}

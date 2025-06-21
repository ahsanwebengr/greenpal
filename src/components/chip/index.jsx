const Chip = ({
  type = 'professional',
  image,
  initials,
  icon,
  text,
  bgColor = 'bg-gray-400',
}) => {
  if (type === 'action') {
    return (
      <button className='inline-flex items-center justify-center rounded-full border border-gray-400 bg-transparent px-5 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'>
        {text}
      </button>
    );
  }

  if (type === 'service') {
    return (
      <a
        href='#'
        className='inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-50'
      >
        <span className='text-gray-500'>{icon}</span>
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a
      href='#'
      className='inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-gray-300 bg-white py-1 pl-1 pr-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100'
    >
      {image && (
        <img className='h-7 w-7 rounded-full object-cover' src={image} alt={text} />
      )}
      {initials && !image && (
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${bgColor}`}
        >
          {initials}
        </span>
      )}
      <span>{text}</span>
    </a>
  );
};
export default Chip;

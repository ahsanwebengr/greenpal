const InfoRow = ({ icon, label, value }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='text-green-600'>{icon}</div>
      <p className='text-gray-700'>
        <span className='font-semibold'>{label}:</span> {value}
      </p>
    </div>
  );
};

export default InfoRow;

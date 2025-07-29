// import React from 'react';
// import { GraduationCap, Heart } from 'lucide-react';

// const ModeToggle = ({ mode, onModeChange }) => {
//   return (
//     <div className="mb-8">
//       <label className="block text-sm font-semibold text-gray-700 mb-3">
//         Choose Output Style
//       </label>
//       <div className="flex rounded-xl bg-gray-100 p-1">
//         <button
//           onClick={() => onModeChange('patient')}
//           className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
//             mode === 'patient'
//               ? 'bg-white text-blue-600 shadow-sm'
//               : 'text-gray-600 hover:text-gray-800'
//           }`}
//         >
//           <Heart className="w-4 h-4" />
//           <span>Patient Mode</span>
//         </button>
//         <button
//           onClick={() => onModeChange('doctor')}
//           className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
//             mode === 'doctor'
//               ? 'bg-white text-blue-600 shadow-sm'
//               : 'text-gray-600 hover:text-gray-800'
//           }`}
//         >
//           <GraduationCap className="w-4 h-4" />
//           <span>Doctor Mode</span>
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ModeToggle;

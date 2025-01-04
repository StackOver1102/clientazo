"use client";
import React from "react";

interface RatingProps {
  rating: number;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const Rating: React.FC<RatingProps> = ({ size = "small", rating = 4 }) => {
  // const fullStars = Math.floor(rating);
  // const halfStar = rating % 1 !== 0;
  // const emptyStars = 5 - Math.ceil(rating);
  const starSizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  const starClass =
    starSizeClasses[size as keyof typeof starSizeClasses] ||
    starSizeClasses.small;
  // return (
  //   <div className="text-center w-20">
  //     <div className="flex justify-center items-center space-x-1 text-center">
  //       {/* Render Full Stars */}
  //       {Array(fullStars)
  //         .fill(0)
  //         .map((_, index) => (
  //           <svg
  //             key={`full-${index}`}
  //             xmlns="http://www.w3.org/2000/svg"
  //             className={`h-${size} w-${size} text-yellow-500`}
  //             viewBox="0 0 20 20"
  //             fill="currentColor"
  //           >
  //             <path
  //               fill="currentColor"
  //               d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  //             />
  //           </svg>
  //         ))}

  //       {/* Render Half Star */}
  //       {halfStar && (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className={`h-${size} w-${size} text-gray-300`}
  //           viewBox="0 0 20 20"
  //         >
  //           {/* Full Star for Yellow */}
  //           <path
  //             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  //             fill="currentColor"
  //             className="text-yellow-500"
  //             style={{ clipPath: "inset(0 50% 0 0)" }}
  //           />
  //           {/* Empty Star for Gray */}
  //           <path
  //             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  //             fill="currentColor"
  //             className="text-gray-300"
  //           />
  //         </svg>
  //       )}

  //       {/* Render Empty Stars */}
  //       {Array(emptyStars)
  //         .fill(0)
  //         .map((_, index) => (
  //           <svg
  //             key={`empty-${index}`}
  //             xmlns="http://www.w3.org/2000/svg"
  //             className={`h-${size} w-${size} text-gray-300`}
  //             viewBox="0 0 20 20"
  //             fill="currentColor"
  //           >
  //             <path
  //               fill="currentColor"
  //               d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 13.011a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.85 9.394c-.784-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z"
  //             />
  //           </svg>
  //         ))}
  //     </div>
  //     {/* <button className="text-sm mt-1" onClick={onClick}>
  //       {reviewCount} {reviewCount === 1 ? "Review" : "Reviews"}
  //     </button> */}
  //   </div>
  // );
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`ms-1 ${starClass} ${
            index < rating
              ? "text-yellow-300"
              : "text-gray-300 dark:text-gray-500"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;

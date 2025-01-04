import React from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge/Badge";
import Rating from "../Rating/Rating";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  reviews: string;
  seller: string;
  product: string;
}

const CardComponents: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  price,
  reviews,
  seller,
  product,
}) => {
  return (
    <div className="flex flex-row bg-white border border-gray-200 rounded-lg shadow-md p-4 gap-6">
      <div className="flex flex-col justify-center mb-4 items-center w-1/3">
        <div>
          <Image src={imageSrc} alt={title} width={200} height={180} />
        </div>
        <div>
          <span className="text-sm   font-semibold text-center">{price}</span>
        </div>
      </div>
      <div className="flex flex-col w-2/3">
        <Link href="/your-link-path" className="mb-2">
          <Badge size="medium"  text="Dịch vụ" />
          <span className="ml-2 text-center">{title}</span>
        </Link>
        <div className="flex items-center mb-2">
          <Rating rating={4.5} />
          <span className="text-[12px] text-gray-500">
            308 Reviews | Đơn hoàn thành: 1944 | Khiếu nại: 0.0%
          </span>
        </div>
        <div className="text-sm text-[#6c757d]">
          <p className="mb-2">
            Người bán: <span className="text-[#21bf73]">{seller}</span>
          </p>
          <p className="mb-2">
            Sản phẩm: <span className="text-[#21bf73]">{product}</span>
          </p>
          <ul className="list-disc  pl-4 text-left" >
            <li>{description}</li>
            <li>Giảm giá mạnh tất cả các dịch vụ.</li>
            <li>
              Kinh doanh: [FB] COMMENT BÀI VIẾT - NHANH (KBH) (Min 10) | [FB]
              THÀNH VIÊN NHÓM - NHANH [BH 7 ngày] [Min 100] | [FB] FOLLOW ACC CÁ
              NHÂN - NHANH [BH 7 ngày] [Min 100] | [FB] LIKE + FOLLOW FANPAGE -
              ỔN ĐỊNH [BH 7 ngày] [Min 100] | [FB] LIKE BÀI VIẾT - ỔN ĐỊNH (BH 3
              ngày) (Min 50)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;

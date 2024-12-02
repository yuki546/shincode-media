import Image from "next/image";
import React from "react";

const ArticleCard = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="mx-auto text-center">
          <Image src={"./next.svg"} alt="thumbnail" width={100} height={100} />
        </div>
        <h3 className="text-left">Sample Title</h3>
        <div className="flex gap-3 items-center">
          <span>12/23</span>
          <span>ShinCode</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

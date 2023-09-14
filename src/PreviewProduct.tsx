import React from "react";

interface PreviewProductProps {
    onClick: () => void;
}

const PreviewProduct: React.FC<PreviewProductProps> = (onClick: any) => {
    return (
        <div className="preview-product" onClick={onClick}>
            <h2>THIS IS A PRODUCT PREVIEW</h2>
            <p>Product</p>
        </div>
    );
};

export default PreviewProduct;

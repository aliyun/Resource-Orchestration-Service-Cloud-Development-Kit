package alicloudroscdkservicecatalog


// Properties for defining a `ProductPortfolioAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
type ProductPortfolioAssociationProps struct {
	// Property portfolioId: The ID of the product portfolio.
	PortfolioId interface{} `field:"required" json:"portfolioId" yaml:"portfolioId"`
	// Property productId: The ID of the product.
	ProductId interface{} `field:"required" json:"productId" yaml:"productId"`
}


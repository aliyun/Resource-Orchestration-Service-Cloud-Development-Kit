package alicloudroscdkservicecatalog


// Properties for defining a `RosProductPortfolioAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
type RosProductPortfolioAssociationProps struct {
	PortfolioId interface{} `field:"required" json:"portfolioId" yaml:"portfolioId"`
	ProductId interface{} `field:"required" json:"productId" yaml:"productId"`
}


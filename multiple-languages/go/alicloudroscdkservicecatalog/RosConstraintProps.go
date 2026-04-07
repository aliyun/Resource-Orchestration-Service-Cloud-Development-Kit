package alicloudroscdkservicecatalog


// Properties for defining a `RosConstraint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
type RosConstraintProps struct {
	Config interface{} `field:"required" json:"config" yaml:"config"`
	ConstraintType interface{} `field:"required" json:"constraintType" yaml:"constraintType"`
	PortfolioId interface{} `field:"required" json:"portfolioId" yaml:"portfolioId"`
	ProductId interface{} `field:"required" json:"productId" yaml:"productId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}


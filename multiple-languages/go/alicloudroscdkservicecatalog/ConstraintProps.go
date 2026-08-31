package alicloudroscdkservicecatalog


// Properties for defining a `Constraint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
type ConstraintProps struct {
	// Property config: The configuration of the constraint.
	//
	// Format: { "LocalRoleName": "\<role_name>" }.
	Config interface{} `field:"required" json:"config" yaml:"config"`
	// Property constraintType: The type of the constraint.
	//
	// The value is fixed as Launch, which specifies the launch constraint.
	ConstraintType interface{} `field:"required" json:"constraintType" yaml:"constraintType"`
	// Property portfolioId: The ID of the portfolio.
	PortfolioId interface{} `field:"required" json:"portfolioId" yaml:"portfolioId"`
	// Property productId: The ID of the product.
	ProductId interface{} `field:"required" json:"productId" yaml:"productId"`
	// Property description: The description of the constraint.
	//
	// The value must be 1 to 128 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}


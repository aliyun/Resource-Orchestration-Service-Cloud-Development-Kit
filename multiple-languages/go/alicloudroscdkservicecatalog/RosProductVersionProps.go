package alicloudroscdkservicecatalog


// Properties for defining a `RosProductVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
type RosProductVersionProps struct {
	ProductId interface{} `field:"required" json:"productId" yaml:"productId"`
	ProductVersionName interface{} `field:"required" json:"productVersionName" yaml:"productVersionName"`
	TemplateType interface{} `field:"required" json:"templateType" yaml:"templateType"`
	TemplateUrl interface{} `field:"required" json:"templateUrl" yaml:"templateUrl"`
	Active interface{} `field:"optional" json:"active" yaml:"active"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Guidance interface{} `field:"optional" json:"guidance" yaml:"guidance"`
}


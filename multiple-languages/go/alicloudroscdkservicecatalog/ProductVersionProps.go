package alicloudroscdkservicecatalog


// Properties for defining a `ProductVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productversion
type ProductVersionProps struct {
	// Property productId: The ID of the product to which the product version belongs.
	ProductId interface{} `field:"required" json:"productId" yaml:"productId"`
	// Property productVersionName: The name of the product version.
	ProductVersionName interface{} `field:"required" json:"productVersionName" yaml:"productVersionName"`
	// Property templateType: The type of the product template.
	//
	// Valid values:
	// * RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
	// * RosStandardTemplate: the standard ROS template.
	TemplateType interface{} `field:"required" json:"templateType" yaml:"templateType"`
	// Property templateUrl: The URL of the template.
	TemplateUrl interface{} `field:"required" json:"templateUrl" yaml:"templateUrl"`
	// Property active: Specifies whether the product version is active.
	Active interface{} `field:"optional" json:"active" yaml:"active"`
	// Property description: The description of the product version.
	//
	// The value must be 1 to 128 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property guidance: The recommendation information.
	//
	// Valid values:
	// * Default: No recommendation information is provided. This is the default value.
	// * Recommended: the recommendation version.
	// * Latest: the latest version.
	// * Deprecated: the version that is about to be discontinued.
	Guidance interface{} `field:"optional" json:"guidance" yaml:"guidance"`
}


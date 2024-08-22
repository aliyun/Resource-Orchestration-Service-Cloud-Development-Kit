package alicloudroscdkcen


// Properties for defining a `CenInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
type CenInstanceProps struct {
	// Property description: The description of the instance.
	//
	// The name can be 2-256 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the instance.
	//
	// The name can be 2-128 characters in length. It can start with an uppercase letter, lowercase letter, or Chinese character. It can contain numbers, underscores (_), and hyphens (-), but cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property protectionLevel: The level of CIDR block overlapping.
	//
	// Set the value to REDUCED. REDUCED indicates that the
	// CIDR blocks can overlap with each other but must not be the same.
	ProtectionLevel interface{} `field:"optional" json:"protectionLevel" yaml:"protectionLevel"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCenInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}


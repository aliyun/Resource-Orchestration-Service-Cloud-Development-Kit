package alicloudroscdkcen


// Properties for defining a `CenInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
type CenInstanceProps struct {
	// Property description: The description of the CEN instance.
	//
	// The description can be empty or 1 to 256 characters in length. It cannot start
	// with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the CEN instance.
	//
	// The name can be empty or 1 to 128 characters in length. It cannot start with
	// http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property protectionLevel: The level of CIDR block overlap.
	//
	// Set the value to REDUCED. This is the default value. This value specifies that
	// CIDR blocks can overlap but cannot be identical.
	ProtectionLevel interface{} `field:"optional" json:"protectionLevel" yaml:"protectionLevel"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCenInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}


package alicloudroscdkoos


// Properties for defining a `Parameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
type ParameterProps struct {
	// Property name: The name of the parameter.
	//
	// The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
	// It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The data type of the common parameter.
	//
	// Valid values: String and StringList.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property value: The value of the parameter.
	//
	// The value must be 1 to 4096 characters in length.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property constraints: The constraints of the parameter.
	//
	// By default, this parameter is null. Valid values:
	// AllowedValues: The value that is allowed for the parameter. It must be an array string.
	// AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
	// MinLength: The minimum length of the parameter.
	// MaxLength: The maximum length of the parameter.
	Constraints interface{} `field:"optional" json:"constraints" yaml:"constraints"`
	// Property description: The description of the parameter.
	//
	// The description must be 1 to 200 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}


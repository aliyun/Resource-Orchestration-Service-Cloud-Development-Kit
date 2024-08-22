package alicloudroscdkoos


// Properties for defining a `SecretParameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
type SecretParameterProps struct {
	// Property secretParameterName: The name of the encryption parameter.
	//
	// The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
	SecretParameterName interface{} `field:"required" json:"secretParameterName" yaml:"secretParameterName"`
	// Property value: The value of the encryption parameter.
	//
	// The value must be 1 to 4096 characters in length.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property constraints: The constraints of the encryption parameter.
	Constraints interface{} `field:"optional" json:"constraints" yaml:"constraints"`
	// Property description: The description of the encryption parameter.
	//
	// The description must be 1 to 200 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
	KeyId interface{} `field:"optional" json:"keyId" yaml:"keyId"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of encryption parameter.
	Tags *[]*RosSecretParameter_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}


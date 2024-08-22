package alicloudroscdkoos


// Properties for defining a `RosSecretParameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
type RosSecretParameterProps struct {
	SecretParameterName interface{} `field:"required" json:"secretParameterName" yaml:"secretParameterName"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	Constraints interface{} `field:"optional" json:"constraints" yaml:"constraints"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	KeyId interface{} `field:"optional" json:"keyId" yaml:"keyId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosSecretParameter_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}


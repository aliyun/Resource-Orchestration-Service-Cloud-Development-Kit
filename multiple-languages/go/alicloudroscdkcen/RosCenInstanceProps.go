package alicloudroscdkcen


// Properties for defining a `RosCenInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-ceninstance
type RosCenInstanceProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ProtectionLevel interface{} `field:"optional" json:"protectionLevel" yaml:"protectionLevel"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCenInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}


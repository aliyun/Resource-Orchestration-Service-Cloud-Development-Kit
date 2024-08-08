package alicloudroscdkkms


// Properties for defining a `RosAlias`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
type RosAliasProps struct {
	AliasName interface{} `field:"required" json:"aliasName" yaml:"aliasName"`
	KeyId interface{} `field:"required" json:"keyId" yaml:"keyId"`
}


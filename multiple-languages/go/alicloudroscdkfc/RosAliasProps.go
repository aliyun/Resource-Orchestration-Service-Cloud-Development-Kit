package alicloudroscdkfc


// Properties for defining a `RosAlias`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
type RosAliasProps struct {
	AliasName interface{} `field:"required" json:"aliasName" yaml:"aliasName"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	AdditionalVersion interface{} `field:"optional" json:"additionalVersion" yaml:"additionalVersion"`
	AdditionalWeight interface{} `field:"optional" json:"additionalWeight" yaml:"additionalWeight"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	VersionId interface{} `field:"optional" json:"versionId" yaml:"versionId"`
}


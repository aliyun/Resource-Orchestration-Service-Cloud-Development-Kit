package alicloudroscdkfc


// Properties for defining a `Alias`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-alias
type AliasProps struct {
	// Property aliasName: Alias name.
	AliasName interface{} `field:"required" json:"aliasName" yaml:"aliasName"`
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property additionalVersion: Additional version.
	AdditionalVersion interface{} `field:"optional" json:"additionalVersion" yaml:"additionalVersion"`
	// Property additionalWeight: Traffic weight of additional version.
	//
	// From 0 to 100.
	AdditionalWeight interface{} `field:"optional" json:"additionalWeight" yaml:"additionalWeight"`
	// Property description: Version description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property versionId: Version ID.
	VersionId interface{} `field:"optional" json:"versionId" yaml:"versionId"`
}


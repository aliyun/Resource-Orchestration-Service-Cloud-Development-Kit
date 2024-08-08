package alicloudroscdkcloudsso


// Properties for defining a `RosPermissionPolicyToAccessConfigurationAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
type RosPermissionPolicyToAccessConfigurationAdditionProps struct {
	AccessConfigurationId interface{} `field:"required" json:"accessConfigurationId" yaml:"accessConfigurationId"`
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	PermissionPolicyName interface{} `field:"required" json:"permissionPolicyName" yaml:"permissionPolicyName"`
	PermissionPolicyType interface{} `field:"required" json:"permissionPolicyType" yaml:"permissionPolicyType"`
	InlinePolicyDocument interface{} `field:"optional" json:"inlinePolicyDocument" yaml:"inlinePolicyDocument"`
}


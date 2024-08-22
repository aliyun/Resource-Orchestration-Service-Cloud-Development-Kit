package alicloudroscdkcloudsso


// Properties for defining a `PermissionPolicyToAccessConfigurationAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
type PermissionPolicyToAccessConfigurationAdditionProps struct {
	// Property accessConfigurationId: The ID of the access configuration.
	AccessConfigurationId interface{} `field:"required" json:"accessConfigurationId" yaml:"accessConfigurationId"`
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property permissionPolicyName: The name of the permission policy.
	//
	// - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
	// - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
	PermissionPolicyName interface{} `field:"required" json:"permissionPolicyName" yaml:"permissionPolicyName"`
	// Property permissionPolicyType: The type of the permission policy.
	//
	// Valid values:
	// - System: system policy. Resource Access Management (RAM) system policies are reused.
	// - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
	PermissionPolicyType interface{} `field:"required" json:"permissionPolicyType" yaml:"permissionPolicyType"`
	// Property inlinePolicyDocument: The configurations of the inline policy.
	//
	// The value can be up to 4,096 characters in length.
	// If you set PermissionPolicyType to Inline, you must specify this parameter.
	InlinePolicyDocument interface{} `field:"optional" json:"inlinePolicyDocument" yaml:"inlinePolicyDocument"`
}


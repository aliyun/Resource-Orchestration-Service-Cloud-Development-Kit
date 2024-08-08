package alicloudroscdkcs


// Properties for defining a `GrantPermissions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
type GrantPermissionsProps struct {
	// Property permissions: The permissions that you want to grant to the RAM user.
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	// Property userId: The ID of the RAM user.
	UserId interface{} `field:"required" json:"userId" yaml:"userId"`
}


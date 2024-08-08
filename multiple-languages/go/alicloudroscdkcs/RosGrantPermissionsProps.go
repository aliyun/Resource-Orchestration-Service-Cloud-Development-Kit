package alicloudroscdkcs


// Properties for defining a `RosGrantPermissions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
type RosGrantPermissionsProps struct {
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	UserId interface{} `field:"required" json:"userId" yaml:"userId"`
}


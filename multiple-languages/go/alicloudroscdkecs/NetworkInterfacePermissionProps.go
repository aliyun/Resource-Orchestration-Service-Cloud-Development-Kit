package alicloudroscdkecs


// Properties for defining a `NetworkInterfacePermission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
type NetworkInterfacePermissionProps struct {
	// Property accountId: the account id.
	AccountId interface{} `field:"required" json:"accountId" yaml:"accountId"`
	// Property networkInterfaceId: Network interface id.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property permission: the permission.
	Permission interface{} `field:"required" json:"permission" yaml:"permission"`
}


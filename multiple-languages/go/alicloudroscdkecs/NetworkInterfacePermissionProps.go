package alicloudroscdkecs


// Properties for defining a `NetworkInterfacePermission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
type NetworkInterfacePermissionProps struct {
	// Property accountId: The ID of the account to which the permission is granted.
	//
	// The
	// account can be a cloud partner (certified ISV) or an individual user.
	AccountId interface{} `field:"required" json:"accountId" yaml:"accountId"`
	// Property networkInterfaceId: Network interface id.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property permission: The permission to grant.
	//
	// The only supported value is InstanceAttach.
	// InstanceAttach: Allows an authorized account to attach your elastic network
	// interface to one of its ECS instances. The ECS instance and the elastic network
	// interface must be in the same availability zone.
	Permission interface{} `field:"required" json:"permission" yaml:"permission"`
}


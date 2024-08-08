package alicloudroscdkecs


// Properties for defining a `RosNetworkInterfacePermission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
type RosNetworkInterfacePermissionProps struct {
	AccountId interface{} `field:"required" json:"accountId" yaml:"accountId"`
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	Permission interface{} `field:"required" json:"permission" yaml:"permission"`
}


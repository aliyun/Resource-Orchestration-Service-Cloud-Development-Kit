package alicloudroscdkslb


// Properties for defining a `BackendServerToVServerGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
type BackendServerToVServerGroupAdditionProps struct {
	// Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
	BackendServers interface{} `field:"required" json:"backendServers" yaml:"backendServers"`
	// Property vServerGroupId: The ID of virtual server group.
	VServerGroupId interface{} `field:"required" json:"vServerGroupId" yaml:"vServerGroupId"`
}


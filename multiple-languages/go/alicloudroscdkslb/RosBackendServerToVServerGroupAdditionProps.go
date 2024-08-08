package alicloudroscdkslb


// Properties for defining a `RosBackendServerToVServerGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
type RosBackendServerToVServerGroupAdditionProps struct {
	BackendServers interface{} `field:"required" json:"backendServers" yaml:"backendServers"`
	VServerGroupId interface{} `field:"required" json:"vServerGroupId" yaml:"vServerGroupId"`
}


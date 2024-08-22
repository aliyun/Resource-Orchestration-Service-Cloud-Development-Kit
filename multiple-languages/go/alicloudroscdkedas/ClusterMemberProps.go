package alicloudroscdkedas


// Properties for defining a `ClusterMember`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
type ClusterMemberProps struct {
	// Property clusterId: Cluster ID to import ECS instance.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property instanceIds: ECS instance ID list to import.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property password: Password ECS hosts need to import (ECS settings can continue to use purchased).
	Password interface{} `field:"required" json:"password" yaml:"password"`
}


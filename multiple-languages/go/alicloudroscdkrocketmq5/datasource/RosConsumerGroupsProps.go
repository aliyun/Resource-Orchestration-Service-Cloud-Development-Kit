package datasource


// Properties for defining a `RosConsumerGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
type RosConsumerGroupsProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}


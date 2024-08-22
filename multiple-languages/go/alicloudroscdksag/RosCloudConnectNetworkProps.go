package alicloudroscdksag


// Properties for defining a `RosCloudConnectNetwork`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
type RosCloudConnectNetworkProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Tags *[]*RosCloudConnectNetwork_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}


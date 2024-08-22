package alicloudroscdkbastionhost


// Properties for defining a `RosHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
type RosHostProps struct {
	ActiveAddressType interface{} `field:"required" json:"activeAddressType" yaml:"activeAddressType"`
	HostName interface{} `field:"required" json:"hostName" yaml:"hostName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	OsType interface{} `field:"required" json:"osType" yaml:"osType"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	HostPrivateAddress interface{} `field:"optional" json:"hostPrivateAddress" yaml:"hostPrivateAddress"`
	HostPublicAddress interface{} `field:"optional" json:"hostPublicAddress" yaml:"hostPublicAddress"`
	InstanceRegionId interface{} `field:"optional" json:"instanceRegionId" yaml:"instanceRegionId"`
	SourceInstanceId interface{} `field:"optional" json:"sourceInstanceId" yaml:"sourceInstanceId"`
}


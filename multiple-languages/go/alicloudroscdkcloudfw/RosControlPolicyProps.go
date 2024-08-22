package alicloudroscdkcloudfw


// Properties for defining a `RosControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
type RosControlPolicyProps struct {
	AclAction interface{} `field:"required" json:"aclAction" yaml:"aclAction"`
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	DestinationType interface{} `field:"required" json:"destinationType" yaml:"destinationType"`
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	NewOrder interface{} `field:"required" json:"newOrder" yaml:"newOrder"`
	Proto interface{} `field:"required" json:"proto" yaml:"proto"`
	Source interface{} `field:"required" json:"source" yaml:"source"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	DestPort interface{} `field:"optional" json:"destPort" yaml:"destPort"`
	DestPortGroup interface{} `field:"optional" json:"destPortGroup" yaml:"destPortGroup"`
	DestPortType interface{} `field:"optional" json:"destPortType" yaml:"destPortType"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}


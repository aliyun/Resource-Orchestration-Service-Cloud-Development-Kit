package alicloudroscdkredis


// Properties for defining a `RosUpgradeVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
type RosUpgradeVersionProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	AutoUpgradeOpen interface{} `field:"optional" json:"autoUpgradeOpen" yaml:"autoUpgradeOpen"`
	EffectiveTime interface{} `field:"optional" json:"effectiveTime" yaml:"effectiveTime"`
	MajorVersion interface{} `field:"optional" json:"majorVersion" yaml:"majorVersion"`
	MinorVersion interface{} `field:"optional" json:"minorVersion" yaml:"minorVersion"`
}


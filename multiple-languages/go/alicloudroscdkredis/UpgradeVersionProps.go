package alicloudroscdkredis


// Properties for defining a `UpgradeVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
type UpgradeVersionProps struct {
	// Property instanceId: The id of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property autoUpgradeOpen: Whether to enable automatic upgrade.
	AutoUpgradeOpen interface{} `field:"optional" json:"autoUpgradeOpen" yaml:"autoUpgradeOpen"`
	// Property effectiveTime: The time when the upgrade is effective.
	//
	// Value: Immediately|MaintainTime, default: Immediately.
	EffectiveTime interface{} `field:"optional" json:"effectiveTime" yaml:"effectiveTime"`
	// Property majorVersion: Upgrade the major version of the instance.
	MajorVersion interface{} `field:"optional" json:"majorVersion" yaml:"majorVersion"`
	// Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
	MinorVersion interface{} `field:"optional" json:"minorVersion" yaml:"minorVersion"`
}


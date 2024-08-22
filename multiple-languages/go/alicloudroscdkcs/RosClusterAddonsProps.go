package alicloudroscdkcs


// Properties for defining a `RosClusterAddons`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
type RosClusterAddonsProps struct {
	Addons interface{} `field:"required" json:"addons" yaml:"addons"`
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	InstalledIgnore interface{} `field:"optional" json:"installedIgnore" yaml:"installedIgnore"`
	RolePolicy interface{} `field:"optional" json:"rolePolicy" yaml:"rolePolicy"`
	ValidationMode interface{} `field:"optional" json:"validationMode" yaml:"validationMode"`
	WaitUntil interface{} `field:"optional" json:"waitUntil" yaml:"waitUntil"`
}


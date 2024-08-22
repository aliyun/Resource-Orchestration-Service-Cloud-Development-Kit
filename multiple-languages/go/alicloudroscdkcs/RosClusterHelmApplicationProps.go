package alicloudroscdkcs


// Properties for defining a `RosClusterHelmApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
type RosClusterHelmApplicationProps struct {
	ChartUrl interface{} `field:"required" json:"chartUrl" yaml:"chartUrl"`
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ChartValues interface{} `field:"optional" json:"chartValues" yaml:"chartValues"`
	Credential interface{} `field:"optional" json:"credential" yaml:"credential"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	RolePolicy interface{} `field:"optional" json:"rolePolicy" yaml:"rolePolicy"`
	ValidationMode interface{} `field:"optional" json:"validationMode" yaml:"validationMode"`
	WaitUntil interface{} `field:"optional" json:"waitUntil" yaml:"waitUntil"`
}


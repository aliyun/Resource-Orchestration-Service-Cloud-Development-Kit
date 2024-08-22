package alicloudroscdkcs


// Properties for defining a `RosClusterApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
type RosClusterApplicationProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	YamlContent interface{} `field:"required" json:"yamlContent" yaml:"yamlContent"`
	DefaultNamespace interface{} `field:"optional" json:"defaultNamespace" yaml:"defaultNamespace"`
	RolePolicy interface{} `field:"optional" json:"rolePolicy" yaml:"rolePolicy"`
	Stage interface{} `field:"optional" json:"stage" yaml:"stage"`
	ValidationMode interface{} `field:"optional" json:"validationMode" yaml:"validationMode"`
	WaitUntil interface{} `field:"optional" json:"waitUntil" yaml:"waitUntil"`
}


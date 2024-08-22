package alicloudroscdkalb


// Properties for defining a `RosAScript`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
type RosAScriptProps struct {
	AScriptName interface{} `field:"required" json:"aScriptName" yaml:"aScriptName"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	ScriptContent interface{} `field:"required" json:"scriptContent" yaml:"scriptContent"`
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	ExtAttributeEnabled interface{} `field:"optional" json:"extAttributeEnabled" yaml:"extAttributeEnabled"`
	ExtAttributes interface{} `field:"optional" json:"extAttributes" yaml:"extAttributes"`
}


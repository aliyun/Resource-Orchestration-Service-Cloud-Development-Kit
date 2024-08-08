package alicloudroscdkvs


// Properties for defining a `RosGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vs-group
type RosGroupProps struct {
	InProtocol interface{} `field:"required" json:"inProtocol" yaml:"inProtocol"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	OutProtocol interface{} `field:"required" json:"outProtocol" yaml:"outProtocol"`
	PlayDomain interface{} `field:"required" json:"playDomain" yaml:"playDomain"`
	PushDomain interface{} `field:"required" json:"pushDomain" yaml:"pushDomain"`
	Region interface{} `field:"required" json:"region" yaml:"region"`
	App interface{} `field:"optional" json:"app" yaml:"app"`
	Callback interface{} `field:"optional" json:"callback" yaml:"callback"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	LazyPull interface{} `field:"optional" json:"lazyPull" yaml:"lazyPull"`
}


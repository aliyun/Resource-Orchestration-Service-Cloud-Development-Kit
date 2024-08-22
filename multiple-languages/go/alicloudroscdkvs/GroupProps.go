package alicloudroscdkvs


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vs-group
type GroupProps struct {
	// Property inProtocol: Access protocol used by the space.
	//
	// Value: gb28181, rtmp.
	InProtocol interface{} `field:"required" json:"inProtocol" yaml:"inProtocol"`
	// Property name: Space name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property outProtocol: Play protocol used by the space, multivalued separated by commas.
	//
	// Value: flv, hls, rtmp.
	OutProtocol interface{} `field:"required" json:"outProtocol" yaml:"outProtocol"`
	// Property playDomain: Use of the domain name space broadcast stream.
	PlayDomain interface{} `field:"required" json:"playDomain" yaml:"playDomain"`
	// Property pushDomain: Plug flow domain name space to use.
	//
	// (Only access to the space rtmp).
	PushDomain interface{} `field:"required" json:"pushDomain" yaml:"pushDomain"`
	// Property region: Space belongs to the region, as a service center.
	Region interface{} `field:"required" json:"region" yaml:"region"`
	// Property app: Application name space used, the default live.
	App interface{} `field:"optional" json:"app" yaml:"app"`
	// Property callback: Updating the space callback device \/ flow state.
	Callback interface{} `field:"optional" json:"callback" yaml:"callback"`
	// Property description: Space description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enabled: Space is enabled.
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	// Property lazyPull: Whether to enable on-demand pull flow, default false.
	LazyPull interface{} `field:"optional" json:"lazyPull" yaml:"lazyPull"`
}


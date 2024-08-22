package alicloudroscdkehpc


// Properties for defining a `RosAutoScaleConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
type RosAutoScaleConfigProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	EnableAutoGrow interface{} `field:"optional" json:"enableAutoGrow" yaml:"enableAutoGrow"`
	EnableAutoShrink interface{} `field:"optional" json:"enableAutoShrink" yaml:"enableAutoShrink"`
	ExcludeNodes interface{} `field:"optional" json:"excludeNodes" yaml:"excludeNodes"`
	ExtraNodesGrowRatio interface{} `field:"optional" json:"extraNodesGrowRatio" yaml:"extraNodesGrowRatio"`
	GrowIntervalInMinutes interface{} `field:"optional" json:"growIntervalInMinutes" yaml:"growIntervalInMinutes"`
	GrowRatio interface{} `field:"optional" json:"growRatio" yaml:"growRatio"`
	GrowTimeoutInMinutes interface{} `field:"optional" json:"growTimeoutInMinutes" yaml:"growTimeoutInMinutes"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	MaxNodesInCluster interface{} `field:"optional" json:"maxNodesInCluster" yaml:"maxNodesInCluster"`
	Queues interface{} `field:"optional" json:"queues" yaml:"queues"`
	ShrinkIdleTimes interface{} `field:"optional" json:"shrinkIdleTimes" yaml:"shrinkIdleTimes"`
	ShrinkIntervalInMinutes interface{} `field:"optional" json:"shrinkIntervalInMinutes" yaml:"shrinkIntervalInMinutes"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
}


package alicloudroscdkehpc


// Properties for defining a `AutoScaleConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-autoscaleconfig
type AutoScaleConfigProps struct {
	// Property clusterId: Cluster ID.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property enableAutoGrow: Specifies whether to enable auto scale-out.
	//
	// Valid values:
	// true: enables auto scale-out.
	// false: disables auto scale-out
	// Default value: false.
	EnableAutoGrow interface{} `field:"optional" json:"enableAutoGrow" yaml:"enableAutoGrow"`
	// Property enableAutoShrink: Specifies whether to enable auto scale-in.
	//
	// Valid values:
	// true: enables auto scale-in.
	// false: disables auto scale-in
	// Default value: false.
	EnableAutoShrink interface{} `field:"optional" json:"enableAutoShrink" yaml:"enableAutoShrink"`
	// Property excludeNodes: The compute nodes that are excluded from the list of auto scaling nodes.
	//
	// Separate multiple compute nodes with commas (,). If you want to retain a compute node, you can set the node as an exceptional node. Then, the node is not released if it is idle.
	ExcludeNodes interface{} `field:"optional" json:"excludeNodes" yaml:"excludeNodes"`
	// Property extraNodesGrowRatio: The percentage of extra compute nodes.
	//
	// Default value: 0.
	ExtraNodesGrowRatio interface{} `field:"optional" json:"extraNodesGrowRatio" yaml:"extraNodesGrowRatio"`
	// Property growIntervalInMinutes: The interval between two consecutive rounds of scale-out.
	//
	// Unit: minutes.
	// Default value: 2.
	GrowIntervalInMinutes interface{} `field:"optional" json:"growIntervalInMinutes" yaml:"growIntervalInMinutes"`
	// Property growRatio: The percentage of each round of scale-out.
	//
	// Default value: 100.
	GrowRatio interface{} `field:"optional" json:"growRatio" yaml:"growRatio"`
	// Property growTimeoutInMinutes: The scale-out timeout period.
	//
	// Unit: minutes.
	// Default value: 20.
	GrowTimeoutInMinutes interface{} `field:"optional" json:"growTimeoutInMinutes" yaml:"growTimeoutInMinutes"`
	// Property imageId: The ID of the image.
	//
	// If you set both Queues.N.QueueImageId and ImageId, Queues.N.QueueImageId prevails.
	// If you set Queues.N.QueueImageId or ImageId, the parameter that you set takes effect.
	// If you leave both Queues.N.QueueImageId and ImageId empty, the image that was specified when you created the cluster or the last time when you scaled out the cluster is used by default.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property maxNodesInCluster: The maximum number of compute nodes that can be added in the cluster.
	//
	// Default value: 100.
	MaxNodesInCluster interface{} `field:"optional" json:"maxNodesInCluster" yaml:"maxNodesInCluster"`
	// Property queues:.
	Queues interface{} `field:"optional" json:"queues" yaml:"queues"`
	// Property shrinkIdleTimes: The number of consecutive times that a compute node is idle during the resource scale-in check.
	//
	// Default value: 3.
	ShrinkIdleTimes interface{} `field:"optional" json:"shrinkIdleTimes" yaml:"shrinkIdleTimes"`
	// Property shrinkIntervalInMinutes: SThe interval between two consecutive rounds of scale-in.
	//
	// Unit: minutes.
	// Default value: 2.
	ShrinkIntervalInMinutes interface{} `field:"optional" json:"shrinkIntervalInMinutes" yaml:"shrinkIntervalInMinutes"`
	// Property spotPriceLimit: The maximum hourly price of the compute nodes.
	//
	// The value can be accurate to three decimal places. The parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotStrategy: The preemption policy of the compute nodes.
	//
	// Valid values:
	// NoSpot: The compute nodes are pay-as-you-go instances.
	// SpotWithPriceLimit: The compute nodes are preemptible instances that have a user-defined maximum hourly price.
	// SpotAsPriceGo: The compute nodes are preemptible instances for which the market price at the time of purchase is used as the bid price.
	// Default value: NoSpot.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
}


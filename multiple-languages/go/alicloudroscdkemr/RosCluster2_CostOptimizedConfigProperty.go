package alicloudroscdkemr


type RosCluster2_CostOptimizedConfigProperty struct {
	OnDemandBaseCapacity interface{} `field:"required" json:"onDemandBaseCapacity" yaml:"onDemandBaseCapacity"`
	OnDemandPercentageAboveBaseCapacity interface{} `field:"required" json:"onDemandPercentageAboveBaseCapacity" yaml:"onDemandPercentageAboveBaseCapacity"`
	SpotInstancePools interface{} `field:"required" json:"spotInstancePools" yaml:"spotInstancePools"`
}


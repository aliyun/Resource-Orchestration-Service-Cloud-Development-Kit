package alicloudroscdkemr


type RosCluster2_NodeGroupsProperty struct {
	InstanceTypes interface{} `field:"required" json:"instanceTypes" yaml:"instanceTypes"`
	NodeGroupType interface{} `field:"required" json:"nodeGroupType" yaml:"nodeGroupType"`
	AdditionalSecurityGroupIds interface{} `field:"optional" json:"additionalSecurityGroupIds" yaml:"additionalSecurityGroupIds"`
	CostOptimizedConfig interface{} `field:"optional" json:"costOptimizedConfig" yaml:"costOptimizedConfig"`
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	DeploymentSetStrategy interface{} `field:"optional" json:"deploymentSetStrategy" yaml:"deploymentSetStrategy"`
	GracefulShutdown interface{} `field:"optional" json:"gracefulShutdown" yaml:"gracefulShutdown"`
	NodeCount interface{} `field:"optional" json:"nodeCount" yaml:"nodeCount"`
	NodeGroupName interface{} `field:"optional" json:"nodeGroupName" yaml:"nodeGroupName"`
	NodeResizeStrategy interface{} `field:"optional" json:"nodeResizeStrategy" yaml:"nodeResizeStrategy"`
	SpotBidPrices interface{} `field:"optional" json:"spotBidPrices" yaml:"spotBidPrices"`
	SpotInstanceRemedy interface{} `field:"optional" json:"spotInstanceRemedy" yaml:"spotInstanceRemedy"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDisk interface{} `field:"optional" json:"systemDisk" yaml:"systemDisk"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	WithPublicIp interface{} `field:"optional" json:"withPublicIp" yaml:"withPublicIp"`
}


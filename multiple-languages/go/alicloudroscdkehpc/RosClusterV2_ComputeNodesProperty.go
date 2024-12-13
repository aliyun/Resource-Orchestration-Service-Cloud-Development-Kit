package alicloudroscdkehpc


type RosClusterV2_ComputeNodesProperty struct {
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	SystemDisk interface{} `field:"required" json:"systemDisk" yaml:"systemDisk"`
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	EnableHt interface{} `field:"optional" json:"enableHt" yaml:"enableHt"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
}


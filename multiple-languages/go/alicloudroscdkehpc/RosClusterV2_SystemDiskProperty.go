package alicloudroscdkehpc


type RosClusterV2_SystemDiskProperty struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	Level interface{} `field:"optional" json:"level" yaml:"level"`
}


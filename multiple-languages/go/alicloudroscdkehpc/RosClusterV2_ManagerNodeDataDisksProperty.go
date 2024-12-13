package alicloudroscdkehpc


type RosClusterV2_ManagerNodeDataDisksProperty struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	DeleteWithInstance interface{} `field:"optional" json:"deleteWithInstance" yaml:"deleteWithInstance"`
	Level interface{} `field:"optional" json:"level" yaml:"level"`
	MountDir interface{} `field:"optional" json:"mountDir" yaml:"mountDir"`
}


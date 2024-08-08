package alicloudroscdkfoas


type RosCluster_OrderProperty struct {
	MasterSpec interface{} `field:"required" json:"masterSpec" yaml:"masterSpec"`
	SlaveSpec interface{} `field:"required" json:"slaveSpec" yaml:"slaveSpec"`
	MasterNumber interface{} `field:"optional" json:"masterNumber" yaml:"masterNumber"`
	PayModel interface{} `field:"optional" json:"payModel" yaml:"payModel"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	SlaveNumber interface{} `field:"optional" json:"slaveNumber" yaml:"slaveNumber"`
}


package alicloudroscdkehpc


type RosClusterV2_SharedStoragesProperty struct {
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	MountTargetDomain interface{} `field:"required" json:"mountTargetDomain" yaml:"mountTargetDomain"`
	MountDirectory interface{} `field:"optional" json:"mountDirectory" yaml:"mountDirectory"`
	MountOptions interface{} `field:"optional" json:"mountOptions" yaml:"mountOptions"`
	NasDirectory interface{} `field:"optional" json:"nasDirectory" yaml:"nasDirectory"`
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
}


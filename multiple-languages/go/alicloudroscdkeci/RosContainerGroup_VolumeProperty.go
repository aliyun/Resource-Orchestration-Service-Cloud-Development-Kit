package alicloudroscdkeci


type RosContainerGroup_VolumeProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ConfigFileVolumeConfigFileToPath interface{} `field:"optional" json:"configFileVolumeConfigFileToPath" yaml:"configFileVolumeConfigFileToPath"`
	EmptyDirVolumeMedium interface{} `field:"optional" json:"emptyDirVolumeMedium" yaml:"emptyDirVolumeMedium"`
	FlexVolumeDriver interface{} `field:"optional" json:"flexVolumeDriver" yaml:"flexVolumeDriver"`
	FlexVolumeFsType interface{} `field:"optional" json:"flexVolumeFsType" yaml:"flexVolumeFsType"`
	FlexVolumeOptions interface{} `field:"optional" json:"flexVolumeOptions" yaml:"flexVolumeOptions"`
	NfsVolumePath interface{} `field:"optional" json:"nfsVolumePath" yaml:"nfsVolumePath"`
	NfsVolumeReadOnly interface{} `field:"optional" json:"nfsVolumeReadOnly" yaml:"nfsVolumeReadOnly"`
	NfsVolumeServer interface{} `field:"optional" json:"nfsVolumeServer" yaml:"nfsVolumeServer"`
}


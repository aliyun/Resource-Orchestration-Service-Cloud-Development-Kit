package alicloudroscdkess


type RosEciScalingConfiguration_VolumesProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ConfigFileVolumeConfigFileToPaths interface{} `field:"optional" json:"configFileVolumeConfigFileToPaths" yaml:"configFileVolumeConfigFileToPaths"`
	ConfigFileVolumeDefaultMode interface{} `field:"optional" json:"configFileVolumeDefaultMode" yaml:"configFileVolumeDefaultMode"`
	DiskVolumeDiskId interface{} `field:"optional" json:"diskVolumeDiskId" yaml:"diskVolumeDiskId"`
	DiskVolumeDiskSize interface{} `field:"optional" json:"diskVolumeDiskSize" yaml:"diskVolumeDiskSize"`
	EmptyDirVolumeMedium interface{} `field:"optional" json:"emptyDirVolumeMedium" yaml:"emptyDirVolumeMedium"`
	EmptyDirVolumeSizeLimit interface{} `field:"optional" json:"emptyDirVolumeSizeLimit" yaml:"emptyDirVolumeSizeLimit"`
	FlexVolumeDriver interface{} `field:"optional" json:"flexVolumeDriver" yaml:"flexVolumeDriver"`
	FlexVolumeFsType interface{} `field:"optional" json:"flexVolumeFsType" yaml:"flexVolumeFsType"`
	FlexVolumeOptions interface{} `field:"optional" json:"flexVolumeOptions" yaml:"flexVolumeOptions"`
	HostPathVolumePath interface{} `field:"optional" json:"hostPathVolumePath" yaml:"hostPathVolumePath"`
	HostPathVolumeType interface{} `field:"optional" json:"hostPathVolumeType" yaml:"hostPathVolumeType"`
	NfsVolumePath interface{} `field:"optional" json:"nfsVolumePath" yaml:"nfsVolumePath"`
	NfsVolumeReadOnly interface{} `field:"optional" json:"nfsVolumeReadOnly" yaml:"nfsVolumeReadOnly"`
	NfsVolumeServer interface{} `field:"optional" json:"nfsVolumeServer" yaml:"nfsVolumeServer"`
}


package alicloudroscdkehpc


type RosCluster_AdditionalVolumesProperty struct {
	LocalDirectory interface{} `field:"required" json:"localDirectory" yaml:"localDirectory"`
	VolumeId interface{} `field:"required" json:"volumeId" yaml:"volumeId"`
	VolumeMountpoint interface{} `field:"required" json:"volumeMountpoint" yaml:"volumeMountpoint"`
	JobQueue interface{} `field:"optional" json:"jobQueue" yaml:"jobQueue"`
	Location interface{} `field:"optional" json:"location" yaml:"location"`
	RemoteDirectory interface{} `field:"optional" json:"remoteDirectory" yaml:"remoteDirectory"`
	VolumeProtocol interface{} `field:"optional" json:"volumeProtocol" yaml:"volumeProtocol"`
	VolumeType interface{} `field:"optional" json:"volumeType" yaml:"volumeType"`
}


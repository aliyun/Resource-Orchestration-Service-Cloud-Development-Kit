package alicloudroscdkess


type RosEciScalingConfiguration_InitContainerVolumeMountsProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	MountPath interface{} `field:"optional" json:"mountPath" yaml:"mountPath"`
	MountPropagation interface{} `field:"optional" json:"mountPropagation" yaml:"mountPropagation"`
	ReadOnly interface{} `field:"optional" json:"readOnly" yaml:"readOnly"`
	SubPath interface{} `field:"optional" json:"subPath" yaml:"subPath"`
}


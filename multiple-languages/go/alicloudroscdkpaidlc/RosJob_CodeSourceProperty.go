package alicloudroscdkpaidlc


type RosJob_CodeSourceProperty struct {
	CodeSourceId interface{} `field:"required" json:"codeSourceId" yaml:"codeSourceId"`
	Branch interface{} `field:"optional" json:"branch" yaml:"branch"`
	Commit interface{} `field:"optional" json:"commit" yaml:"commit"`
	MountPath interface{} `field:"optional" json:"mountPath" yaml:"mountPath"`
}


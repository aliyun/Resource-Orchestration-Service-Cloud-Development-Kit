package alicloudroscdkedas


type RosApplication_DeploymentProperty struct {
	PackageVersion interface{} `field:"required" json:"packageVersion" yaml:"packageVersion"`
	WarUrl interface{} `field:"required" json:"warUrl" yaml:"warUrl"`
	AppEnv interface{} `field:"optional" json:"appEnv" yaml:"appEnv"`
	Batch interface{} `field:"optional" json:"batch" yaml:"batch"`
	BatchWaitTime interface{} `field:"optional" json:"batchWaitTime" yaml:"batchWaitTime"`
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	Gray interface{} `field:"optional" json:"gray" yaml:"gray"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	ReleaseType interface{} `field:"optional" json:"releaseType" yaml:"releaseType"`
	TrafficControlStrategy interface{} `field:"optional" json:"trafficControlStrategy" yaml:"trafficControlStrategy"`
}


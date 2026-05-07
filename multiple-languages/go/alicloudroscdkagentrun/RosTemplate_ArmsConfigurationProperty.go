package alicloudroscdkagentrun


type RosTemplate_ArmsConfigurationProperty struct {
	ArmsLicenseKey interface{} `field:"required" json:"armsLicenseKey" yaml:"armsLicenseKey"`
	EnableArms interface{} `field:"required" json:"enableArms" yaml:"enableArms"`
	CmsWorkspace interface{} `field:"optional" json:"cmsWorkspace" yaml:"cmsWorkspace"`
}


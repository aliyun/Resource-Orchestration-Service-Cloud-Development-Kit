package alicloudroscdkros


type RosResourceCleaner_ExcludedResourcesProperty struct {
	ResourceId interface{} `field:"required" json:"resourceId" yaml:"resourceId"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
}


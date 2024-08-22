package alicloudroscdkros


// Properties for defining a `RosResourceCleaner`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-resourcecleaner
type RosResourceCleanerProps struct {
	Action interface{} `field:"required" json:"action" yaml:"action"`
	CleanUpAlgorithm interface{} `field:"optional" json:"cleanUpAlgorithm" yaml:"cleanUpAlgorithm"`
	CleanUpRetryCount interface{} `field:"optional" json:"cleanUpRetryCount" yaml:"cleanUpRetryCount"`
	CleanUpTimeout interface{} `field:"optional" json:"cleanUpTimeout" yaml:"cleanUpTimeout"`
	DisabledSideEffects interface{} `field:"optional" json:"disabledSideEffects" yaml:"disabledSideEffects"`
	ExcludedResources interface{} `field:"optional" json:"excludedResources" yaml:"excludedResources"`
	FailureOption interface{} `field:"optional" json:"failureOption" yaml:"failureOption"`
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
	ResourceFilters interface{} `field:"optional" json:"resourceFilters" yaml:"resourceFilters"`
	Resources interface{} `field:"optional" json:"resources" yaml:"resources"`
	ResourceTypeOrder interface{} `field:"optional" json:"resourceTypeOrder" yaml:"resourceTypeOrder"`
}


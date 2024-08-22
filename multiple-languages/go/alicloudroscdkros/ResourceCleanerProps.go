package alicloudroscdkros


// Properties for defining a `ResourceCleaner`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-resourcecleaner
type ResourceCleanerProps struct {
	// Property action: Resource cleaner actions: - Scan: Scanning phase.
	//
	// Scan out the resources to be cleaned up.
	// - CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.
	// - Scan+CleanUp: Scan first, then CleanUp.
	// - ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.
	Action interface{} `field:"required" json:"action" yaml:"action"`
	// Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.
	//
	// - ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
	// Default to ResourceDependency.
	CleanUpAlgorithm interface{} `field:"optional" json:"cleanUpAlgorithm" yaml:"cleanUpAlgorithm"`
	// Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
	//
	// Default to 1, which means no retry.
	// Conditions that trigger a retry: (the relationship is or)
	// 1.There are resources which fail to be cleaned up.
	// 2.The cleanup is timeout.
	CleanUpRetryCount interface{} `field:"optional" json:"cleanUpRetryCount" yaml:"cleanUpRetryCount"`
	// Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
	//
	// Default to 1 hour.
	CleanUpTimeout interface{} `field:"optional" json:"cleanUpTimeout" yaml:"cleanUpTimeout"`
	// Property disabledSideEffects: Side effects to be disabled.
	//
	// Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
	// The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
	DisabledSideEffects interface{} `field:"optional" json:"disabledSideEffects" yaml:"disabledSideEffects"`
	// Property excludedResources: Exclude parts from resources to be cleaned up.
	ExcludedResources interface{} `field:"optional" json:"excludedResources" yaml:"excludedResources"`
	// Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.
	//
	// - Fast: Resource failure causes all resources that depend on it to fail.
	// Default to Normal.
	FailureOption interface{} `field:"optional" json:"failureOption" yaml:"failureOption"`
	// Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
	//
	// - Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
	// Default to Loose.
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
	// Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
	//
	// Only one of ResourceFilters and Resources can be specified.
	// There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
	// 1.Any resource denied by any Deny filter will not be cleaned up.
	// 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
	// If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
	ResourceFilters interface{} `field:"optional" json:"resourceFilters" yaml:"resourceFilters"`
	// Property resources: Resources to be cleaned up.
	//
	// Only one of Resources and ResourceFilters can be specified.
	Resources interface{} `field:"optional" json:"resources" yaml:"resources"`
	// Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
	//
	// If it takes effect:
	// - Resources will be cleaned up in order from front to back.
	// - Resource with resource type not specified in this property will not be cleaned up.
	ResourceTypeOrder interface{} `field:"optional" json:"resourceTypeOrder" yaml:"resourceTypeOrder"`
}


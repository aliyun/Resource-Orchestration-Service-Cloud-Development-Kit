package alicloudroscdksls


// Properties for defining a `ServiceLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
type ServiceLogProps struct {
	// Property logStorageLocation: The location of the service log.
	LogStorageLocation interface{} `field:"required" json:"logStorageLocation" yaml:"logStorageLocation"`
	// Property projectName: The name of the project that needs to be activated.
	//
	// If it has been activated, it will be reactivated again.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property serviceLogTypes: Types of service log that needs to be activated.
	ServiceLogTypes interface{} `field:"required" json:"serviceLogTypes" yaml:"serviceLogTypes"`
}


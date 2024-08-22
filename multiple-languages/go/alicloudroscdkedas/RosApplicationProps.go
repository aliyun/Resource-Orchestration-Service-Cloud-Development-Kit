package alicloudroscdkedas


// Properties for defining a `RosApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
type RosApplicationProps struct {
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	BuildPackId interface{} `field:"optional" json:"buildPackId" yaml:"buildPackId"`
	ComponentIds interface{} `field:"optional" json:"componentIds" yaml:"componentIds"`
	Deployment interface{} `field:"optional" json:"deployment" yaml:"deployment"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EcuInfo interface{} `field:"optional" json:"ecuInfo" yaml:"ecuInfo"`
	HealthCheckUrl interface{} `field:"optional" json:"healthCheckUrl" yaml:"healthCheckUrl"`
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	PackageType interface{} `field:"optional" json:"packageType" yaml:"packageType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}


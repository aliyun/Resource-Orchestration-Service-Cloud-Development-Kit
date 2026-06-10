package alicloudroscdkbpstudio


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
type ApplicationProps struct {
	// Property imageUrl: The Picture in the OSS Storage Address.
	ImageUrl interface{} `field:"required" json:"imageUrl" yaml:"imageUrl"`
	// Property templateId: The ID of the template.
	TemplateId interface{} `field:"required" json:"templateId" yaml:"templateId"`
	// Property topoUrl: Topo.
	//
	// Json Files in OSS Address.
	TopoUrl interface{} `field:"required" json:"topoUrl" yaml:"topoUrl"`
	// Property applicationName: The name of the resource.
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}


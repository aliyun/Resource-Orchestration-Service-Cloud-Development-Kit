package alicloudroscdkimm


// Properties for defining a `Project2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
type Project2Props struct {
	// Property projectName: The project name.
	//
	// The naming convention is as follows:
	// - The name must be 1 to 128 characters in length.
	// - It can contain only letters, digits, hyphens (-), and underscores (_).
	// - It must start with a letter or an underscore (_).
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property datasetMaxBindCount: The maximum number of bindings for each dataset.
	//
	// Valid values: 1 to 10. Default value: 10.
	DatasetMaxBindCount interface{} `field:"optional" json:"datasetMaxBindCount" yaml:"datasetMaxBindCount"`
	// Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset.
	//
	// The default value is
	// 10,000,000,000.
	// > This configuration is reserved and is not currently enforced.
	DatasetMaxEntityCount interface{} `field:"optional" json:"datasetMaxEntityCount" yaml:"datasetMaxEntityCount"`
	// Property datasetMaxFileCount: The maximum number of files in each dataset.
	//
	// Valid values: 1 to 100000000. Default value: 100000000.
	DatasetMaxFileCount interface{} `field:"optional" json:"datasetMaxFileCount" yaml:"datasetMaxFileCount"`
	// Property datasetMaxRelationCount: The maximum number of metadata relations in each dataset.
	//
	// The default value is
	// 100,000,000,000.
	// > This configuration is reserved and is not currently enforced.
	DatasetMaxRelationCount interface{} `field:"optional" json:"datasetMaxRelationCount" yaml:"datasetMaxRelationCount"`
	// Property datasetMaxTotalFileSize: The maximum size of files in each dataset.
	//
	// If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
	DatasetMaxTotalFileSize interface{} `field:"optional" json:"datasetMaxTotalFileSize" yaml:"datasetMaxTotalFileSize"`
	// Property description: The description of project.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property projectMaxDatasetCount: The maximum number of datasets in the project.
	//
	// Valid values: 1 to 1000000000. Default value: 1000000000.
	ProjectMaxDatasetCount interface{} `field:"optional" json:"projectMaxDatasetCount" yaml:"projectMaxDatasetCount"`
	// Property serviceRole: 	The name of the Resource Access Management (RAM) role.
	//
	// You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
	ServiceRole interface{} `field:"optional" json:"serviceRole" yaml:"serviceRole"`
	// Property templateId: The ID of the workflow template.
	//
	// You can leave this parameter empty.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}


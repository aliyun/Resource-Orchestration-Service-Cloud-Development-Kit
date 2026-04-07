package alicloudroscdkbastionhost


// Properties for defining a `ExportConfigJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-exportconfigjob
type ExportConfigJobProps struct {
	// Property instanceId: The ID of the bastion host instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}


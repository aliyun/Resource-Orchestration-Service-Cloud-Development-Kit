package alicloudroscdkalb


// Properties for defining a `BackendServerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-backendserverattachment
type BackendServerAttachmentProps struct {
	// Property serverGroupId: The ID of the server group.
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	// Property servers: A list of backend servers.
	//
	// You can add up to 200 servers in a single call.
	Servers interface{} `field:"required" json:"servers" yaml:"servers"`
}


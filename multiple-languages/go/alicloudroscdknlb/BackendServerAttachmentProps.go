package alicloudroscdknlb


// Properties for defining a `BackendServerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
type BackendServerAttachmentProps struct {
	// Property serverGroupId: The ID of the server group.
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	// Property servers: The backend servers that you want to add to the server group.
	//
	// You can specify up to
	// 200 servers in each call.
	Servers interface{} `field:"required" json:"servers" yaml:"servers"`
}


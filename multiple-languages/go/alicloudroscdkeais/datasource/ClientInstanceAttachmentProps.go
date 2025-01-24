package datasource


// Properties for defining a `ClientInstanceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-clientinstanceattachment
type ClientInstanceAttachmentProps struct {
	// Property clientInstanceAttachmentId: The ID of the ECS or ECI instance bound to the EAIS instance.
	ClientInstanceAttachmentId interface{} `field:"required" json:"clientInstanceAttachmentId" yaml:"clientInstanceAttachmentId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}


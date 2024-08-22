package alicloudroscdkresourcemanager


// Properties for defining a `Handshake`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
type HandshakeProps struct {
	// Property targetEntity: Invited account ID or login email.
	TargetEntity interface{} `field:"required" json:"targetEntity" yaml:"targetEntity"`
	// Property targetType: Type of account being invited.
	//
	// Valid values: Account, Email.
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
	// Property note: Remarks.
	Note interface{} `field:"optional" json:"note" yaml:"note"`
}


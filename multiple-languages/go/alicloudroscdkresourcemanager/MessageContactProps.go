package alicloudroscdkresourcemanager


// Properties for defining a `MessageContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
type MessageContactProps struct {
	// Property emailAddress: The email address of the contact.
	EmailAddress interface{} `field:"required" json:"emailAddress" yaml:"emailAddress"`
	// Property messageContactName: The name of the contact.
	//
	// The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
	MessageContactName interface{} `field:"required" json:"messageContactName" yaml:"messageContactName"`
	// Property messageTypes: The types of messages received by the contact.
	MessageTypes interface{} `field:"required" json:"messageTypes" yaml:"messageTypes"`
	// Property title: The job title of the contact.
	//
	// Valid values:
	// * FinanceDirector.
	// * TechnicalDirector.
	// * MaintenanceDirector.
	// * CEO.
	// * ProjectDirector.
	// * Other.
	Title interface{} `field:"required" json:"title" yaml:"title"`
	// Property phoneNumber: The mobile phone number of the contact.
	PhoneNumber interface{} `field:"optional" json:"phoneNumber" yaml:"phoneNumber"`
}


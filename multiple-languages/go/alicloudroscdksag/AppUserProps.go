package alicloudroscdksag


// Properties for defining a `AppUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
type AppUserProps struct {
	// Property bandwidth: The bandwidth.
	//
	// Unit: Kbit\/s. Maximum bandwidth: 2,000 Kbit\/s.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property smartAgId: The ID of the SAG APP instance.
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
	// Property userMail: The email address of the user.
	//
	// The username and password are sent to the specified
	// email address.
	UserMail interface{} `field:"required" json:"userMail" yaml:"userMail"`
	// Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP.
	//
	// In this
	// case, SAG APP connects to Alibaba Cloud through the specified IP address.
	// Note The IP address must fall into the CIDR block of the private network.
	// After this feature is disabled, an IP address within the CIDR block of the private
	// network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
	// IP address.
	ClientIp interface{} `field:"optional" json:"clientIp" yaml:"clientIp"`
	// Property disable: Disable user or not.
	Disable interface{} `field:"optional" json:"disable" yaml:"disable"`
	// Property password: The password used to log on to SAG APP.
	//
	// For a client account, if you specify the username, you must also specify the password.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property userName: The username of the client account.
	//
	// Usernames of client accounts added to the same
	// SAG APP instance must be unique.
	// For a client account, if you specify the username, you must also specify the password.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}


package alicloudroscdksag


// Properties for defining a `AppUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
type AppUserProps struct {
	// Property bandwidth: The maximum bandwidth value.
	//
	// Unit: Kbit\/s. Valid values: 1 to 20000. Default
	// value: 2000.
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
	// Property password: The password that is used to log on to the SAG app.
	//
	// The password must be 8 to 32 characters in length. It can contain letters,
	// digits, underscores (_), at signs (@), and hyphens (-). It must start with a
	// letter or a digit.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property userName: The username of the client account.
	//
	// The usernames of client accounts added to the
	// same SAG app instance must be unique.
	// The username must be 7 to 33 characters in length, and can contain letters,
	// digits, underscores (_), at signs (@), periods (.), and hyphens (-). It must
	// start with a letter or a digit.
	// >  For a client account, if you specify the username, you must also specify the
	// password. If you specify the password, you must specify the username.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
}


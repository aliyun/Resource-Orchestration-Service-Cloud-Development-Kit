package alicloudroscdkddos


// Properties for defining a `Policy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
type PolicyProps struct {
	// Property policyName: The name of the policy.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property type: The type of the policy.
	//
	// Values:
	// - default: Indicates the default protection strategy.
	// - l3: Indicates the IP protection strategy.
	// - l4: Indicates the port protection strategy.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
	ActionType interface{} `field:"optional" json:"actionType" yaml:"actionType"`
	// Property blackIpList: Blacklist list.
	BlackIpList interface{} `field:"optional" json:"blackIpList" yaml:"blackIpList"`
	// Property content: Configuration Content.
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	// Property whiteIpList: Whitelist IP list.
	WhiteIpList interface{} `field:"optional" json:"whiteIpList" yaml:"whiteIpList"`
}


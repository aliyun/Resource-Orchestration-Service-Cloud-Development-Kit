package alicloudroscdkalb


// Properties for defining a `AScript`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
type AScriptProps struct {
	// Property aScriptName: The name of the AScript rule.
	//
	// The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
	AScriptName interface{} `field:"required" json:"aScriptName" yaml:"aScriptName"`
	// Property listenerId: The listener ID.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	// Property scriptContent: The content of the AScript rule.
	ScriptContent interface{} `field:"required" json:"scriptContent" yaml:"scriptContent"`
	// Property enabled: Specifies whether to enable the AScript rule.
	//
	// Valid values:
	// true
	// false (default).
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	// Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule.
	//
	// Valid values:
	// true
	// false (default).
	ExtAttributeEnabled interface{} `field:"optional" json:"extAttributeEnabled" yaml:"extAttributeEnabled"`
	// Property extAttributes: The extended attributes.
	ExtAttributes interface{} `field:"optional" json:"extAttributes" yaml:"extAttributes"`
}


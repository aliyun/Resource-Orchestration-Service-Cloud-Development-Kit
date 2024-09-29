package alicloudroscdkdrds


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-account
type AccountProps struct {
	// Property dbPrivileges: Database permission information.
	DbPrivileges interface{} `field:"required" json:"dbPrivileges" yaml:"dbPrivileges"`
	// Property drdsAccountName: The name of the account.
	DrdsAccountName interface{} `field:"required" json:"drdsAccountName" yaml:"drdsAccountName"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property password: The password of the account.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property description: Account remarks.
	//
	// The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}


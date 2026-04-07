package alicloudroscdkthreatdetection


// Properties for defining a `CustomCheckItem`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
type CustomCheckItemProps struct {
	// Property checkRule: Check Item Check Rules.
	CheckRule interface{} `field:"required" json:"checkRule" yaml:"checkRule"`
	// Property checkShowName: Check item display name.
	CheckShowName interface{} `field:"required" json:"checkShowName" yaml:"checkShowName"`
	// Property instanceSubType: Asset subtype to which the check item belongs.
	InstanceSubType interface{} `field:"required" json:"instanceSubType" yaml:"instanceSubType"`
	// Property instanceType: Asset type to which the check item belongs.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property riskLevel: Risk level of inspection items.
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	// Property sectionIds: CHECK SECTION OF INSPECTIONS.
	SectionIds interface{} `field:"required" json:"sectionIds" yaml:"sectionIds"`
	// Property status: Check item status.
	//
	// Values:
	// EDIT: Editing in progress
	// RELEASE: Published.
	Status interface{} `field:"required" json:"status" yaml:"status"`
	// Property vendor: Vendor to which the item belongs.
	Vendor interface{} `field:"required" json:"vendor" yaml:"vendor"`
	// Property assistInfo: Check Item Description Help Information.
	AssistInfo interface{} `field:"optional" json:"assistInfo" yaml:"assistInfo"`
	// Property description: Check item description information.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property remark: Remarks.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property solution: Check Item Solution.
	Solution interface{} `field:"optional" json:"solution" yaml:"solution"`
}


package alicloudroscdkaligreen


// Properties for defining a `KeywordLib`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
type KeywordLibProps struct {
	// Property keywordLibName: The name of the keyword library defined by the customer.
	//
	// It can contain no more than 20 characters in Chinese, English, and underscore (_).
	KeywordLibName interface{} `field:"required" json:"keywordLibName" yaml:"keywordLibName"`
	// Property resourceType: The moderation scenario to which the text library applies.
	//
	// Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property bizTypes: The business scenario.
	//
	// Example:["bizTypeA","bizTypeB"].
	BizTypes interface{} `field:"optional" json:"bizTypes" yaml:"bizTypes"`
	// Property category: The category of the text library.
	//
	// Valid values:
	// BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property language: Language used by the text Library.
	//
	// Example: zh:Chinese、en:English.
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	// Property libType: The category of the text library in each moderation scenario.
	//
	// Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
	LibType interface{} `field:"optional" json:"libType" yaml:"libType"`
	// Property matchMode: The matching method.
	//
	// Valid values:fuzzy: fuzzy match precise: exact match.
	MatchMode interface{} `field:"optional" json:"matchMode" yaml:"matchMode"`
}


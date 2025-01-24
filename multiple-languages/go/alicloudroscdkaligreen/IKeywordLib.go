package alicloudroscdkaligreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `KeywordLib`.
type IKeywordLib interface {
	alicloudroscdkcore.IResource
	// Attribute BizTypes: The business scenario.
	AttrBizTypes() interface{}
	// Attribute Category: The category of the text library.
	AttrCategory() interface{}
	// Attribute Enable: Specifies whether to enable text library.
	AttrEnable() interface{}
	// Attribute KeywordLibId: The ID of the primary key of the keyword library.
	AttrKeywordLibId() interface{}
	// Attribute KeywordLibName: The name of the keyword library defined by the customer.
	AttrKeywordLibName() interface{}
	// Attribute Language: Language used by the text Library.
	AttrLanguage() interface{}
	// Attribute LibType: The category of the text library in each moderation scenario.
	AttrLibType() interface{}
	// Attribute MatchMode: The matching method.
	AttrMatchMode() interface{}
	// Attribute ResourceType: The moderation scenario to which the text library applies.
	AttrResourceType() interface{}
	Props() *KeywordLibProps
}

// The jsii proxy for IKeywordLib
type jsiiProxy_IKeywordLib struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKeywordLib) AttrBizTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBizTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrKeywordLibId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeywordLibId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrKeywordLibName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeywordLibName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrLibType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLibType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrMatchMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMatchMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) AttrResourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeywordLib) Props() *KeywordLibProps {
	var returns *KeywordLibProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


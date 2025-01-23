package alicloudroscdkaligreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `BizType`.
type IBizType interface {
	alicloudroscdkcore.IResource
	// Attribute BizTypeName: The name of the business scenario defined by the customer.
	AttrBizTypeName() interface{}
	// Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.
	//
	// Default value: false.
	AttrCiteTemplate() interface{}
	// Attribute Description: The description of the business scenario defined by the customer.
	AttrDescription() interface{}
	// Attribute IndustryInfo: The industry classification.
	AttrIndustryInfo() interface{}
	Props() *BizTypeProps
}

// The jsii proxy for IBizType
type jsiiProxy_IBizType struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBizType) AttrBizTypeName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBizTypeName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBizType) AttrCiteTemplate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCiteTemplate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBizType) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBizType) AttrIndustryInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIndustryInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBizType) Props() *BizTypeProps {
	var returns *BizTypeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


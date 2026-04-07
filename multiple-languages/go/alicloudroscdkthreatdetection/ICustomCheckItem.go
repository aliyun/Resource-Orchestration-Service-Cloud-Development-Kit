package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `CustomCheckItem`.
type ICustomCheckItem interface {
	alicloudroscdkcore.IResource
	// Attribute AssistInfo: Check Item Description Help Information.
	AttrAssistInfo() interface{}
	// Attribute CheckId: The first ID of the resource.
	AttrCheckId() interface{}
	// Attribute CheckRule: Check Item Check Rules.
	AttrCheckRule() interface{}
	// Attribute CheckShowName: Check item display name.
	AttrCheckShowName() interface{}
	// Attribute Description: Check item description information.
	AttrDescription() interface{}
	// Attribute InstanceSubType: Asset subtype to which the check item belongs.
	AttrInstanceSubType() interface{}
	// Attribute InstanceType: Asset type to which the check item belongs.
	AttrInstanceType() interface{}
	// Attribute Remark: Remarks.
	AttrRemark() interface{}
	// Attribute RiskLevel: Risk level of inspection items.
	AttrRiskLevel() interface{}
	// Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
	AttrSectionIds() interface{}
	// Attribute Solution: Check Item Solution.
	AttrSolution() interface{}
	// Attribute Vendor: Vendor to which the item belongs.
	AttrVendor() interface{}
	Props() *CustomCheckItemProps
}

// The jsii proxy for ICustomCheckItem
type jsiiProxy_ICustomCheckItem struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomCheckItem) AttrAssistInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAssistInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrCheckId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrCheckRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrCheckShowName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckShowName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrInstanceSubType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceSubType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrRemark() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemark",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrRiskLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRiskLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrSectionIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSectionIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrSolution() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSolution",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) AttrVendor() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVendor",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomCheckItem) Props() *CustomCheckItemProps {
	var returns *CustomCheckItemProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


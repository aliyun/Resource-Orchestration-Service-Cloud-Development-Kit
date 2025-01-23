package alicloudroscdkconfig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkconfig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CompliancePack`.
type ICompliancePack interface {
	alicloudroscdkcore.IResource
	// Attribute AccountId: Aliyun User Id.
	AttrAccountId() interface{}
	// Attribute CompliancePackId: Compliance Package ID.
	AttrCompliancePackId() interface{}
	// Attribute CompliancePackName: Compliance Package Name.
	AttrCompliancePackName() interface{}
	// Attribute CompliancePackTemplateId: Compliance Package Template Id.
	AttrCompliancePackTemplateId() interface{}
	// Attribute Description: Description.
	AttrDescription() interface{}
	// Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3.
	AttrRiskLevel() interface{}
	Props() *CompliancePackProps
}

// The jsii proxy for ICompliancePack
type jsiiProxy_ICompliancePack struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICompliancePack) AttrAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompliancePack) AttrCompliancePackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompliancePackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompliancePack) AttrCompliancePackName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompliancePackName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompliancePack) AttrCompliancePackTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCompliancePackTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompliancePack) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompliancePack) AttrRiskLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRiskLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICompliancePack) Props() *CompliancePackProps {
	var returns *CompliancePackProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


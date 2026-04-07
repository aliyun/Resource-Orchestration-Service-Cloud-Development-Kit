package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `StorageDomainRoutingRule`.
type IStorageDomainRoutingRule interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the Rule.
	AttrCreateTime() interface{}
	// Attribute ModifyTime: The Modify Time of the Rule.
	AttrModifyTime() interface{}
	// Attribute Routes: Domain name routing entry.
	AttrRoutes() interface{}
	// Attribute RuleId: Rule ID.
	AttrRuleId() interface{}
	Props() *StorageDomainRoutingRuleProps
}

// The jsii proxy for IStorageDomainRoutingRule
type jsiiProxy_IStorageDomainRoutingRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStorageDomainRoutingRule) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageDomainRoutingRule) AttrModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageDomainRoutingRule) AttrRoutes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRoutes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageDomainRoutingRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageDomainRoutingRule) Props() *StorageDomainRoutingRuleProps {
	var returns *StorageDomainRoutingRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


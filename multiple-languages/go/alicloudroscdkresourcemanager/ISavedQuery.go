package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `SavedQuery`.
type ISavedQuery interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the template.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the template.
	AttrDescription() interface{}
	// Attribute Expression: Query Expression of the template.
	AttrExpression() interface{}
	// Attribute SavedQueryId: The id of the template.
	AttrSavedQueryId() interface{}
	// Attribute SavedQueryName: The name of the template.
	AttrSavedQueryName() interface{}
	// Attribute UpdateTime: Update time of the template.
	AttrUpdateTime() interface{}
	Props() *SavedQueryProps
}

// The jsii proxy for ISavedQuery
type jsiiProxy_ISavedQuery struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISavedQuery) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedQuery) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedQuery) AttrExpression() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpression",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedQuery) AttrSavedQueryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSavedQueryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedQuery) AttrSavedQueryName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSavedQueryName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedQuery) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISavedQuery) Props() *SavedQueryProps {
	var returns *SavedQueryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


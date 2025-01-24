package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `DomainGroup`.
type IDomainGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: Domain name group ID.
	AttrGroupId() interface{}
	Props() *DomainGroupProps
}

// The jsii proxy for IDomainGroup
type jsiiProxy_IDomainGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainGroup) Props() *DomainGroupProps {
	var returns *DomainGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


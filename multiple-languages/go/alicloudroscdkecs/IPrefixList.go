package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `PrefixList`.
type IPrefixList interface {
	alicloudroscdkcore.IResource
	// Attribute PrefixListId: The ID of the prefix list.
	AttrPrefixListId() interface{}
	Props() *PrefixListProps
}

// The jsii proxy for IPrefixList
type jsiiProxy_IPrefixList struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrefixList) AttrPrefixListId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrefixListId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) Props() *PrefixListProps {
	var returns *PrefixListProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


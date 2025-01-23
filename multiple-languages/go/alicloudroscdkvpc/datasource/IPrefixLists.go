package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `PrefixLists`.
type IPrefixLists interface {
	alicloudroscdkcore.IResource
	// Attribute PrefixListIds: The list of prefix list IDs.
	AttrPrefixListIds() interface{}
	// Attribute PrefixLists: The list of prefix lists.
	AttrPrefixLists() interface{}
	Props() *PrefixListsProps
}

// The jsii proxy for IPrefixLists
type jsiiProxy_IPrefixLists struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrefixLists) AttrPrefixListIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrefixListIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixLists) AttrPrefixLists() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrefixLists",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixLists) Props() *PrefixListsProps {
	var returns *PrefixListsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


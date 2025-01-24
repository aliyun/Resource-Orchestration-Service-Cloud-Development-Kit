package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `FullNatEntry`.
type IFullNatEntry interface {
	alicloudroscdkcore.IResource
	// Attribute FullNatEntryId: The FULLNAT entry ID.
	AttrFullNatEntryId() interface{}
	Props() *FullNatEntryProps
}

// The jsii proxy for IFullNatEntry
type jsiiProxy_IFullNatEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFullNatEntry) AttrFullNatEntryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFullNatEntryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFullNatEntry) Props() *FullNatEntryProps {
	var returns *FullNatEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


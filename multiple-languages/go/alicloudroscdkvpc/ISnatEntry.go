package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `SnatEntry`.
type ISnatEntry interface {
	alicloudroscdkcore.IResource
	// Attribute SnatEntryIds: The IDS of the SNAT entry.
	AttrSnatEntryIds() interface{}
	Props() *SnatEntryProps
}

// The jsii proxy for ISnatEntry
type jsiiProxy_ISnatEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISnatEntry) AttrSnatEntryIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnatEntryIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISnatEntry) Props() *SnatEntryProps {
	var returns *SnatEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


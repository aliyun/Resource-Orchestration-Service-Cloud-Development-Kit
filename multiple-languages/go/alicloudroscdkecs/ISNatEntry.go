package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SNatEntry`.
type ISNatEntry interface {
	alicloudroscdkcore.IResource
	// Attribute SNatEntryId: The id of created SNAT entry.
	AttrSNatEntryId() interface{}
	Props() *SNatEntryProps
}

// The jsii proxy for ISNatEntry
type jsiiProxy_ISNatEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISNatEntry) AttrSNatEntryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSNatEntryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISNatEntry) Props() *SNatEntryProps {
	var returns *SNatEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


package alicloudroscdkcloudstoragegateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudstoragegateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ExpressSync`.
type IExpressSync interface {
	alicloudroscdkcore.IResource
	// Attribute ExpressSyncId: The ID of the ExpressSync.
	AttrExpressSyncId() interface{}
	Props() *ExpressSyncProps
}

// The jsii proxy for IExpressSync
type jsiiProxy_IExpressSync struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExpressSync) AttrExpressSyncId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpressSyncId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExpressSync) Props() *ExpressSyncProps {
	var returns *ExpressSyncProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


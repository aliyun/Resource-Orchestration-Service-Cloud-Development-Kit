package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Backend`.
type IBackend interface {
	alicloudroscdkcore.IResource
	// Attribute BackendId: The ID of the backend service.
	AttrBackendId() interface{}
	Props() *BackendProps
}

// The jsii proxy for IBackend
type jsiiProxy_IBackend struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackend) AttrBackendId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackendId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackend) Props() *BackendProps {
	var returns *BackendProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


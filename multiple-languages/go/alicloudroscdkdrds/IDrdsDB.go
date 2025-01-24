package alicloudroscdkdrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/internal"
)

// Represents a `DrdsDB`.
type IDrdsDB interface {
	alicloudroscdkcore.IResource
	Props() *DrdsDBProps
}

// The jsii proxy for IDrdsDB
type jsiiProxy_IDrdsDB struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDrdsDB) Props() *DrdsDBProps {
	var returns *DrdsDBProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


package alicloudroscdkossdeployment

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a source for bucket deployments.
type ISource interface {
	// Binds the source to a bucket deployment.
	Bind(scope alicloudroscdkcore.Construct) *SourceConfig
}

// The jsii proxy for ISource
type jsiiProxy_ISource struct {
	_ byte // padding
}

func (i *jsiiProxy_ISource) Bind(scope alicloudroscdkcore.Construct) *SourceConfig {
	if err := i.validateBindParameters(scope); err != nil {
		panic(err)
	}
	var returns *SourceConfig

	_jsii_.Invoke(
		i,
		"bind",
		[]interface{}{scope},
		&returns,
	)

	return returns
}


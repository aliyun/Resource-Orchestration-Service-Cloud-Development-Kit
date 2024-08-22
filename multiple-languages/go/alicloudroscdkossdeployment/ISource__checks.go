//go:build !no_runtime_type_checking

package alicloudroscdkossdeployment

import (
	"fmt"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

func (i *jsiiProxy_ISource) validateBindParameters(scope alicloudroscdkcore.Construct) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	return nil
}


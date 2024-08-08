//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"alicloudroscdkcxapi"
	"fmt"
)

func (j *jsiiProxy_ISynthesisSession) validateSetAssemblyParameters(val alicloudroscdkcxapi.CloudAssemblyBuilder) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_ISynthesisSession) validateSetOutdirParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}


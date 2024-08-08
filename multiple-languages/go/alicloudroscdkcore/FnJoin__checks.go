//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (f *jsiiProxy_FnJoin) validateResolveParameters(context IResolveContext) error {
	if context == nil {
		return fmt.Errorf("parameter context is required, but nil was provided")
	}

	return nil
}

func validateNewFnJoinParameters(delimiter *string, listOfValues *[]interface{}) error {
	if delimiter == nil {
		return fmt.Errorf("parameter delimiter is required, but nil was provided")
	}

	if listOfValues == nil {
		return fmt.Errorf("parameter listOfValues is required, but nil was provided")
	}

	return nil
}


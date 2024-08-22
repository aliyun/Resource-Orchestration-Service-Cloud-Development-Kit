//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (f *jsiiProxy_FnListMerge) validateResolveParameters(context IResolveContext) error {
	if context == nil {
		return fmt.Errorf("parameter context is required, but nil was provided")
	}

	return nil
}

func validateNewFnListMergeParameters(listOfValues *[]interface{}) error {
	if listOfValues == nil {
		return fmt.Errorf("parameter listOfValues is required, but nil was provided")
	}

	return nil
}


//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (f *jsiiProxy_FnMergeMapToList) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnMergeMapToList) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnMergeMapToListParameters(mapList interface{}) error {
	if mapList == nil {
		return fmt.Errorf("parameter mapList is required, but nil was provided")
	}

	return nil
}


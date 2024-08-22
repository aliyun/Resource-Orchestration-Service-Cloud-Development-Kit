//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (f *jsiiProxy_FnGetAZs) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnGetAZs) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnGetAZsParameters(region interface{}) error {
	if region == nil {
		return fmt.Errorf("parameter region is required, but nil was provided")
	}

	return nil
}


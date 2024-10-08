//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (f *jsiiProxy_FnSelect) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnSelect) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnSelectParameters(value interface{}) error {
	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}


//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (f *jsiiProxy_FnEquals) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnEquals) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnEqualsParameters(lhs interface{}, rhs interface{}) error {
	if lhs == nil {
		return fmt.Errorf("parameter lhs is required, but nil was provided")
	}

	if rhs == nil {
		return fmt.Errorf("parameter rhs is required, but nil was provided")
	}

	return nil
}


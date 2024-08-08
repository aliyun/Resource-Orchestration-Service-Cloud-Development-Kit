//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnMatchPattern) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnMatchPattern) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnMatchPatternParameters(pattern interface{}, value interface{}) error {
	if pattern == nil {
		return fmt.Errorf("parameter pattern is required, but nil was provided")
	}
	switch pattern.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(pattern) {
			return fmt.Errorf("parameter pattern must be one of the allowed types: *string, IResolvable; received %#v (a %T)", pattern, pattern)
		}
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}
	switch value.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(value) {
			return fmt.Errorf("parameter value must be one of the allowed types: *string, IResolvable; received %#v (a %T)", value, value)
		}
	}

	return nil
}


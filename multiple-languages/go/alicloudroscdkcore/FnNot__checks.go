//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnNot) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnNot) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnNotParameters(condition interface{}) error {
	if condition == nil {
		return fmt.Errorf("parameter condition is required, but nil was provided")
	}
	switch condition.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IRosConditionExpression:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(condition) {
			return fmt.Errorf("parameter condition must be one of the allowed types: *string, IRosConditionExpression; received %#v (a %T)", condition, condition)
		}
	}

	return nil
}


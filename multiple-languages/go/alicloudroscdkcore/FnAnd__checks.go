//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnAnd) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnAnd) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnAndParameters(condition *[]interface{}) error {
	for idx_596d40, v := range *condition {
		switch v.(type) {
		case *string:
			// ok
		case string:
			// ok
		case IRosConditionExpression:
			// ok
		default:
			if !_jsii_.IsAnonymousProxy(v) {
				return fmt.Errorf("parameter condition[%#v] must be one of the allowed types: *string, IRosConditionExpression; received %#v (a %T)", idx_596d40, v, v)
			}
		}
	}

	return nil
}


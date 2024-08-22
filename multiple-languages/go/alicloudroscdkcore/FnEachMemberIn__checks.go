//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnEachMemberIn) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnEachMemberIn) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnEachMemberInParameters(values1 interface{}, values2 interface{}) error {
	if values1 == nil {
		return fmt.Errorf("parameter values1 is required, but nil was provided")
	}
	switch values1.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(values1) {
			return fmt.Errorf("parameter values1 must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", values1, values1)
		}
	}

	if values2 == nil {
		return fmt.Errorf("parameter values2 is required, but nil was provided")
	}
	switch values2.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(values2) {
			return fmt.Errorf("parameter values2 must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", values2, values2)
		}
	}

	return nil
}


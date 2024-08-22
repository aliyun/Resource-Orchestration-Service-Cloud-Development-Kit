//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnIndex) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnIndex) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnIndexParameters(itemToFindIndex interface{}, itemList interface{}) error {
	if itemToFindIndex == nil {
		return fmt.Errorf("parameter itemToFindIndex is required, but nil was provided")
	}

	if itemList == nil {
		return fmt.Errorf("parameter itemList is required, but nil was provided")
	}
	switch itemList.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(itemList) {
			return fmt.Errorf("parameter itemList must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", itemList, itemList)
		}
	}

	return nil
}


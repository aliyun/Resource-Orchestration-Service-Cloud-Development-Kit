//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnMarketplaceImage) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnMarketplaceImage) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnMarketplaceImageParameters(imageProductCode interface{}) error {
	if imageProductCode == nil {
		return fmt.Errorf("parameter imageProductCode is required, but nil was provided")
	}
	switch imageProductCode.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(imageProductCode) {
			return fmt.Errorf("parameter imageProductCode must be one of the allowed types: *string, IResolvable; received %#v (a %T)", imageProductCode, imageProductCode)
		}
	}

	return nil
}


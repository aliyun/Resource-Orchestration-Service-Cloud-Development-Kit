//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (f *jsiiProxy_FnFormatTime) validateNewErrorParameters(message *string) error {
	if message == nil {
		return fmt.Errorf("parameter message is required, but nil was provided")
	}

	return nil
}

func (f *jsiiProxy_FnFormatTime) validateResolveParameters(_context IResolveContext) error {
	if _context == nil {
		return fmt.Errorf("parameter _context is required, but nil was provided")
	}

	return nil
}

func validateNewFnFormatTimeParameters(format interface{}, timeZone interface{}) error {
	if format == nil {
		return fmt.Errorf("parameter format is required, but nil was provided")
	}
	switch format.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(format) {
			return fmt.Errorf("parameter format must be one of the allowed types: *string, IResolvable; received %#v (a %T)", format, format)
		}
	}

	if timeZone == nil {
		return fmt.Errorf("parameter timeZone is required, but nil was provided")
	}
	switch timeZone.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(timeZone) {
			return fmt.Errorf("parameter timeZone must be one of the allowed types: *string, IResolvable; received %#v (a %T)", timeZone, timeZone)
		}
	}

	return nil
}


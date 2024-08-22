//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_FnRef) validateNewErrorParameters(message *string) error {
	return nil
}

func (f *jsiiProxy_FnRef) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func validateNewFnRefParameters(logicalName *string) error {
	return nil
}


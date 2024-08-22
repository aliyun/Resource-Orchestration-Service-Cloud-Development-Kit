//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_FnGetAtt) validateNewErrorParameters(message *string) error {
	return nil
}

func (f *jsiiProxy_FnGetAtt) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func validateNewFnGetAttParameters(logicalNameOfResource *string, attributeName *string) error {
	return nil
}


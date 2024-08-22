//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_FnAny) validateNewErrorParameters(message *string) error {
	return nil
}

func (f *jsiiProxy_FnAny) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func validateNewFnAnyParameters(values interface{}) error {
	return nil
}


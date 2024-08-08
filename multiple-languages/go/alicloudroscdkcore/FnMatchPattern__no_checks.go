//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_FnMatchPattern) validateNewErrorParameters(message *string) error {
	return nil
}

func (f *jsiiProxy_FnMatchPattern) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func validateNewFnMatchPatternParameters(pattern interface{}, value interface{}) error {
	return nil
}


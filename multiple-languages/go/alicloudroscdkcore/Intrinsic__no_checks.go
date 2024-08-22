//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (i *jsiiProxy_Intrinsic) validateNewErrorParameters(message *string) error {
	return nil
}

func (i *jsiiProxy_Intrinsic) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func validateNewIntrinsicParameters(value interface{}) error {
	return nil
}


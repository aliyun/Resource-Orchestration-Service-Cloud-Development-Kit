//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_FnJoin) validateResolveParameters(context IResolveContext) error {
	return nil
}

func validateNewFnJoinParameters(delimiter *string, listOfValues *[]interface{}) error {
	return nil
}


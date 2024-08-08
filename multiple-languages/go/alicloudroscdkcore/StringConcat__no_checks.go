//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_StringConcat) validateJoinParameters(left interface{}, right interface{}) error {
	return nil
}


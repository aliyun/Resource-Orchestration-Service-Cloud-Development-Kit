//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func validateTokenization_IsResolvableParameters(obj interface{}) error {
	return nil
}

func validateTokenization_ResolveParameters(obj interface{}, options *ResolveOptions) error {
	return nil
}

func validateTokenization_ReverseListParameters(l *[]*string) error {
	return nil
}

func validateTokenization_ReverseNumberParameters(n *float64) error {
	return nil
}

func validateTokenization_ReverseStringParameters(s *string) error {
	return nil
}

func validateTokenization_StringifyNumberParameters(x *float64) error {
	return nil
}


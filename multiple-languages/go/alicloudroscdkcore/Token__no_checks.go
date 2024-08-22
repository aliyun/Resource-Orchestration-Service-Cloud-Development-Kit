//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func validateToken_AsAnyParameters(value interface{}) error {
	return nil
}

func validateToken_AsListParameters(value interface{}, options *EncodingOptions) error {
	return nil
}

func validateToken_AsNumberParameters(value interface{}) error {
	return nil
}

func validateToken_AsStringParameters(value interface{}, options *EncodingOptions) error {
	return nil
}

func validateToken_IsUnresolvedParameters(obj interface{}) error {
	return nil
}


//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_StringSpecializer) validateQualifierOnlyParameters(str *string) error {
	return nil
}

func (s *jsiiProxy_StringSpecializer) validateSpecializeParameters(str *string) error {
	return nil
}

func (s *jsiiProxy_StringSpecializer) validateSpecializeNoTokensParameters(str *string, what *string) error {
	return nil
}

func validateStringSpecializer_ValidateNoTokensParameters(str *string, what *string) error {
	return nil
}

func validateNewStringSpecializerParameters(stack Stack, qualifier *string) error {
	return nil
}


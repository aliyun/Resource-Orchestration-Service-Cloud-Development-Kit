//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (s *jsiiProxy_StringSpecializer) validateQualifierOnlyParameters(str *string) error {
	if str == nil {
		return fmt.Errorf("parameter str is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_StringSpecializer) validateSpecializeParameters(str *string) error {
	if str == nil {
		return fmt.Errorf("parameter str is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_StringSpecializer) validateSpecializeNoTokensParameters(str *string, what *string) error {
	if str == nil {
		return fmt.Errorf("parameter str is required, but nil was provided")
	}

	if what == nil {
		return fmt.Errorf("parameter what is required, but nil was provided")
	}

	return nil
}

func validateStringSpecializer_ValidateNoTokensParameters(str *string, what *string) error {
	if str == nil {
		return fmt.Errorf("parameter str is required, but nil was provided")
	}

	if what == nil {
		return fmt.Errorf("parameter what is required, but nil was provided")
	}

	return nil
}

func validateNewStringSpecializerParameters(stack Stack, qualifier *string) error {
	if stack == nil {
		return fmt.Errorf("parameter stack is required, but nil was provided")
	}

	if qualifier == nil {
		return fmt.Errorf("parameter qualifier is required, but nil was provided")
	}

	return nil
}


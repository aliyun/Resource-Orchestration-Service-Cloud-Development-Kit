package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type StringSpecializer interface {
	// Specialize only the qualifier.
	QualifierOnly(str *string) *string
	// Function to replace placeholders in the input string as much as possible.
	//
	// We replace:
	// - ${Qualifier}: always
	// - ${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available.
	Specialize(str *string) *string
	// Specialize the given string, make sure it doesn't contain tokens.
	SpecializeNoTokens(str *string, what *string) *string
}

// The jsii proxy struct for StringSpecializer
type jsiiProxy_StringSpecializer struct {
	_ byte // padding
}

func NewStringSpecializer(stack Stack, qualifier *string) StringSpecializer {
	_init_.Initialize()

	if err := validateNewStringSpecializerParameters(stack, qualifier); err != nil {
		panic(err)
	}
	j := jsiiProxy_StringSpecializer{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.StringSpecializer",
		[]interface{}{stack, qualifier},
		&j,
	)

	return &j
}

func NewStringSpecializer_Override(s StringSpecializer, stack Stack, qualifier *string) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.StringSpecializer",
		[]interface{}{stack, qualifier},
		s,
	)
}

// Validate that the given string does not contain tokens.
func StringSpecializer_ValidateNoTokens(str *string, what *string) {
	_init_.Initialize()

	if err := validateStringSpecializer_ValidateNoTokensParameters(str, what); err != nil {
		panic(err)
	}
	_jsii_.StaticInvokeVoid(
		"@alicloud/ros-cdk-core.StringSpecializer",
		"validateNoTokens",
		[]interface{}{str, what},
	)
}

func (s *jsiiProxy_StringSpecializer) QualifierOnly(str *string) *string {
	if err := s.validateQualifierOnlyParameters(str); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		s,
		"qualifierOnly",
		[]interface{}{str},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StringSpecializer) Specialize(str *string) *string {
	if err := s.validateSpecializeParameters(str); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		s,
		"specialize",
		[]interface{}{str},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StringSpecializer) SpecializeNoTokens(str *string, what *string) *string {
	if err := s.validateSpecializeNoTokensParameters(str, what); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.Invoke(
		s,
		"specializeNoTokens",
		[]interface{}{str, what},
		&returns,
	)

	return returns
}


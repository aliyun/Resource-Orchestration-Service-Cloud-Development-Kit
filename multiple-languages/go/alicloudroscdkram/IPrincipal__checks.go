//go:build !no_runtime_type_checking

package alicloudroscdkram

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func (i *jsiiProxy_IPrincipal) validateAddToPolicyParameters(policyDocument *RosManagedPolicy_PolicyDocumentProperty) error {
	if policyDocument == nil {
		return fmt.Errorf("parameter policyDocument is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(policyDocument, func() string { return "parameter policyDocument" }); err != nil {
		return err
	}

	return nil
}


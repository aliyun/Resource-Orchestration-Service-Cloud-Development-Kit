//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v3"
)

func (n *jsiiProxy_NestedStack) validateAddDependencyParameters(target Stack) error {
	if target == nil {
		return fmt.Errorf("parameter target is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateAllocateLogicalIdParameters(rosElement RosElement) error {
	if rosElement == nil {
		return fmt.Errorf("parameter rosElement is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateGetAttParameters(attributeName *string) error {
	if attributeName == nil {
		return fmt.Errorf("parameter attributeName is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateGetLogicalIdParameters(element RosElement) error {
	if element == nil {
		return fmt.Errorf("parameter element is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validatePrepareCrossReferenceParameters(_sourceStack Stack, reference Reference) error {
	if _sourceStack == nil {
		return fmt.Errorf("parameter _sourceStack is required, but nil was provided")
	}

	if reference == nil {
		return fmt.Errorf("parameter reference is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateRenameLogicalIdParameters(oldId *string, newId *string) error {
	if oldId == nil {
		return fmt.Errorf("parameter oldId is required, but nil was provided")
	}

	if newId == nil {
		return fmt.Errorf("parameter newId is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateResolveParameters(obj interface{}) error {
	if obj == nil {
		return fmt.Errorf("parameter obj is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateSetParameterParameters(name *string, value interface{}) error {
	if name == nil {
		return fmt.Errorf("parameter name is required, but nil was provided")
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateSynthesizeParameters(session ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (n *jsiiProxy_NestedStack) validateToJsonStringParameters(obj interface{}) error {
	if obj == nil {
		return fmt.Errorf("parameter obj is required, but nil was provided")
	}

	return nil
}

func validateNestedStack_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateNestedStack_IsNestedStackParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateNestedStack_IsStackParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateNestedStack_OfParameters(construct IConstruct) error {
	if construct == nil {
		return fmt.Errorf("parameter construct is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_NestedStack) validateSetRolesParameters(val *RamRoles) error {
	if err := _jsii_.ValidateStruct(val, func() string { return "parameter val" }); err != nil {
		return err
	}

	return nil
}

func validateNewNestedStackParameters(scope Construct, id *string, props *NestedStackProps) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	if id == nil {
		return fmt.Errorf("parameter id is required, but nil was provided")
	}

	if err := _jsii_.ValidateStruct(props, func() string { return "parameter props" }); err != nil {
		return err
	}

	return nil
}


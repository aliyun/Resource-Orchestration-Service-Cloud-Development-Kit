//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/constructs-go/constructs/v3"
)

func (s *jsiiProxy_Stack) validateAddDependencyParameters(target Stack) error {
	if target == nil {
		return fmt.Errorf("parameter target is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateAllocateLogicalIdParameters(rosElement RosElement) error {
	if rosElement == nil {
		return fmt.Errorf("parameter rosElement is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateGetLogicalIdParameters(element RosElement) error {
	if element == nil {
		return fmt.Errorf("parameter element is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validatePrepareCrossReferenceParameters(_sourceStack Stack, reference Reference) error {
	if _sourceStack == nil {
		return fmt.Errorf("parameter _sourceStack is required, but nil was provided")
	}

	if reference == nil {
		return fmt.Errorf("parameter reference is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateRenameLogicalIdParameters(oldId *string, newId *string) error {
	if oldId == nil {
		return fmt.Errorf("parameter oldId is required, but nil was provided")
	}

	if newId == nil {
		return fmt.Errorf("parameter newId is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateResolveParameters(obj interface{}) error {
	if obj == nil {
		return fmt.Errorf("parameter obj is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateSynthesizeParameters(session ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_Stack) validateToJsonStringParameters(obj interface{}) error {
	if obj == nil {
		return fmt.Errorf("parameter obj is required, but nil was provided")
	}

	return nil
}

func validateStack_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateStack_IsStackParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateStack_OfParameters(construct IConstruct) error {
	if construct == nil {
		return fmt.Errorf("parameter construct is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_Stack) validateSetRolesParameters(val *RamRoles) error {
	if err := _jsii_.ValidateStruct(val, func() string { return "parameter val" }); err != nil {
		return err
	}

	return nil
}

func validateNewStackParameters(props *StackProps) error {
	if err := _jsii_.ValidateStruct(props, func() string { return "parameter props" }); err != nil {
		return err
	}

	return nil
}


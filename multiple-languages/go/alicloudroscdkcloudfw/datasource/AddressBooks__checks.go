//go:build !no_runtime_type_checking

package datasource

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

func (a *jsiiProxy_AddressBooks) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	if condition == nil {
		return fmt.Errorf("parameter condition is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateAddCountParameters(count interface{}) error {
	if count == nil {
		return fmt.Errorf("parameter count is required, but nil was provided")
	}
	switch count.(type) {
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(count) {
			return fmt.Errorf("parameter count must be one of the allowed types: *float64, alicloudroscdkcore.IResolvable; received %#v (a %T)", count, count)
		}
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateAddResourceDescParameters(desc *string) error {
	if desc == nil {
		return fmt.Errorf("parameter desc is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	if policy == "" {
		return fmt.Errorf("parameter policy is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateGetAttParameters(name *string) error {
	if name == nil {
		return fmt.Errorf("parameter name is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateSetMetadataParameters(key *string, value interface{}) error {
	if key == nil {
		return fmt.Errorf("parameter key is required, but nil was provided")
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func (a *jsiiProxy_AddressBooks) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func validateAddressBooks_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_AddressBooks) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_AddressBooks) validateSetIdParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_AddressBooks) validateSetPropsParameters(val *AddressBooksProps) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(val, func() string { return "parameter val" }); err != nil {
		return err
	}

	return nil
}

func (j *jsiiProxy_AddressBooks) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func validateNewAddressBooksParameters(scope alicloudroscdkcore.Construct, id *string, props *AddressBooksProps) error {
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


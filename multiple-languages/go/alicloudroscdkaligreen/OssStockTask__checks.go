//go:build !no_runtime_type_checking

package alicloudroscdkaligreen

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

func (o *jsiiProxy_OssStockTask) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	if condition == nil {
		return fmt.Errorf("parameter condition is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateAddCountParameters(count interface{}) error {
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

func (o *jsiiProxy_OssStockTask) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateAddResourceDescParameters(desc *string) error {
	if desc == nil {
		return fmt.Errorf("parameter desc is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	if policy == "" {
		return fmt.Errorf("parameter policy is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateGetAttParameters(name *string) error {
	if name == nil {
		return fmt.Errorf("parameter name is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateSetMetadataParameters(key *string, value interface{}) error {
	if key == nil {
		return fmt.Errorf("parameter key is required, but nil was provided")
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func (o *jsiiProxy_OssStockTask) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func validateOssStockTask_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_OssStockTask) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_OssStockTask) validateSetIdParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_OssStockTask) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func validateNewOssStockTaskParameters(scope alicloudroscdkcore.Construct, id *string, props *OssStockTaskProps) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	if id == nil {
		return fmt.Errorf("parameter id is required, but nil was provided")
	}

	if props == nil {
		return fmt.Errorf("parameter props is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(props, func() string { return "parameter props" }); err != nil {
		return err
	}

	return nil
}


//go:build !no_runtime_type_checking

package alicloudroscdkcloudfw

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	if con == nil {
		return fmt.Errorf("parameter con is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddCountParameters(count interface{}) error {
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

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddDeletionOverrideParameters(path *string) error {
	if path == nil {
		return fmt.Errorf("parameter path is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	if target == nil {
		return fmt.Errorf("parameter target is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddDescParameters(desc *string) error {
	if desc == nil {
		return fmt.Errorf("parameter desc is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddMetaDataParameters(key *string, value interface{}) error {
	if key == nil {
		return fmt.Errorf("parameter key is required, but nil was provided")
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddOverrideParameters(path *string, value interface{}) error {
	if path == nil {
		return fmt.Errorf("parameter path is required, but nil was provided")
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	if propertyPath == nil {
		return fmt.Errorf("parameter propertyPath is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	if propertyPath == nil {
		return fmt.Errorf("parameter propertyPath is required, but nil was provided")
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateAddRosDependencyParameters(target *string) error {
	if target == nil {
		return fmt.Errorf("parameter target is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	if err := _jsii_.ValidateStruct(options, func() string { return "parameter options" }); err != nil {
		return err
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateGetAttParameters(attributeName *string) error {
	if attributeName == nil {
		return fmt.Errorf("parameter attributeName is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	if newLogicalId == nil {
		return fmt.Errorf("parameter newLogicalId is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	if props == nil {
		return fmt.Errorf("parameter props is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosTrFirewallRoutePolicy) validateValidatePropertiesParameters(_properties interface{}) error {
	if _properties == nil {
		return fmt.Errorf("parameter _properties is required, but nil was provided")
	}

	return nil
}

func validateRosTrFirewallRoutePolicy_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateRosTrFirewallRoutePolicy_IsRosElementParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateRosTrFirewallRoutePolicy_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	if construct == nil {
		return fmt.Errorf("parameter construct is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetDestCandidateListParameters(val interface{}) error {
	switch val.(type) {
	case alicloudroscdkcore.IResolvable:
		// ok
	case *[]interface{}:
		val := val.(*[]interface{})
		for idx_97dfc6, v := range *val {
			switch v.(type) {
			case alicloudroscdkcore.IResolvable:
				// ok
			case *RosTrFirewallRoutePolicy_DestCandidateListProperty:
				v := v.(*RosTrFirewallRoutePolicy_DestCandidateListProperty)
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			case RosTrFirewallRoutePolicy_DestCandidateListProperty:
				v_ := v.(RosTrFirewallRoutePolicy_DestCandidateListProperty)
				v := &v_
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			default:
				if !_jsii_.IsAnonymousProxy(v) {
					return fmt.Errorf("parameter val[%#v] must be one of the allowed types: alicloudroscdkcore.IResolvable, *RosTrFirewallRoutePolicy_DestCandidateListProperty; received %#v (a %T)", idx_97dfc6, v, v)
				}
			}
		}
	case []interface{}:
		val_ := val.([]interface{})
		val := &val_
		for idx_97dfc6, v := range *val {
			switch v.(type) {
			case alicloudroscdkcore.IResolvable:
				// ok
			case *RosTrFirewallRoutePolicy_DestCandidateListProperty:
				v := v.(*RosTrFirewallRoutePolicy_DestCandidateListProperty)
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			case RosTrFirewallRoutePolicy_DestCandidateListProperty:
				v_ := v.(RosTrFirewallRoutePolicy_DestCandidateListProperty)
				v := &v_
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			default:
				if !_jsii_.IsAnonymousProxy(v) {
					return fmt.Errorf("parameter val[%#v] must be one of the allowed types: alicloudroscdkcore.IResolvable, *RosTrFirewallRoutePolicy_DestCandidateListProperty; received %#v (a %T)", idx_97dfc6, v, v)
				}
			}
		}
	default:
		if !_jsii_.IsAnonymousProxy(val) {
			return fmt.Errorf("parameter val must be one of the allowed types: alicloudroscdkcore.IResolvable, *[]interface{}; received %#v (a %T)", val, val)
		}
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetFirewallIdParameters(val interface{}) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}
	switch val.(type) {
	case *string:
		// ok
	case string:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(val) {
			return fmt.Errorf("parameter val must be one of the allowed types: *string, alicloudroscdkcore.IResolvable; received %#v (a %T)", val, val)
		}
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetPolicyDescriptionParameters(val interface{}) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}
	switch val.(type) {
	case *string:
		// ok
	case string:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(val) {
			return fmt.Errorf("parameter val must be one of the allowed types: *string, alicloudroscdkcore.IResolvable; received %#v (a %T)", val, val)
		}
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetPolicyNameParameters(val interface{}) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}
	switch val.(type) {
	case *string:
		// ok
	case string:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(val) {
			return fmt.Errorf("parameter val must be one of the allowed types: *string, alicloudroscdkcore.IResolvable; received %#v (a %T)", val, val)
		}
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetPolicyTypeParameters(val interface{}) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}
	switch val.(type) {
	case *string:
		// ok
	case string:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(val) {
			return fmt.Errorf("parameter val must be one of the allowed types: *string, alicloudroscdkcore.IResolvable; received %#v (a %T)", val, val)
		}
	}

	return nil
}

func (j *jsiiProxy_RosTrFirewallRoutePolicy) validateSetSrcCandidateListParameters(val interface{}) error {
	switch val.(type) {
	case alicloudroscdkcore.IResolvable:
		// ok
	case *[]interface{}:
		val := val.(*[]interface{})
		for idx_97dfc6, v := range *val {
			switch v.(type) {
			case alicloudroscdkcore.IResolvable:
				// ok
			case *RosTrFirewallRoutePolicy_SrcCandidateListProperty:
				v := v.(*RosTrFirewallRoutePolicy_SrcCandidateListProperty)
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			case RosTrFirewallRoutePolicy_SrcCandidateListProperty:
				v_ := v.(RosTrFirewallRoutePolicy_SrcCandidateListProperty)
				v := &v_
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			default:
				if !_jsii_.IsAnonymousProxy(v) {
					return fmt.Errorf("parameter val[%#v] must be one of the allowed types: alicloudroscdkcore.IResolvable, *RosTrFirewallRoutePolicy_SrcCandidateListProperty; received %#v (a %T)", idx_97dfc6, v, v)
				}
			}
		}
	case []interface{}:
		val_ := val.([]interface{})
		val := &val_
		for idx_97dfc6, v := range *val {
			switch v.(type) {
			case alicloudroscdkcore.IResolvable:
				// ok
			case *RosTrFirewallRoutePolicy_SrcCandidateListProperty:
				v := v.(*RosTrFirewallRoutePolicy_SrcCandidateListProperty)
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			case RosTrFirewallRoutePolicy_SrcCandidateListProperty:
				v_ := v.(RosTrFirewallRoutePolicy_SrcCandidateListProperty)
				v := &v_
				if err := _jsii_.ValidateStruct(v, func() string { return fmt.Sprintf("parameter val[%#v]", idx_97dfc6) }); err != nil {
					return err
				}
			default:
				if !_jsii_.IsAnonymousProxy(v) {
					return fmt.Errorf("parameter val[%#v] must be one of the allowed types: alicloudroscdkcore.IResolvable, *RosTrFirewallRoutePolicy_SrcCandidateListProperty; received %#v (a %T)", idx_97dfc6, v, v)
				}
			}
		}
	default:
		if !_jsii_.IsAnonymousProxy(val) {
			return fmt.Errorf("parameter val must be one of the allowed types: alicloudroscdkcore.IResolvable, *[]interface{}; received %#v (a %T)", val, val)
		}
	}

	return nil
}

func validateNewRosTrFirewallRoutePolicyParameters(scope alicloudroscdkcore.Construct, id *string, props *RosTrFirewallRoutePolicyProps, enableResourcePropertyConstraint *bool) error {
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

	if enableResourcePropertyConstraint == nil {
		return fmt.Errorf("parameter enableResourcePropertyConstraint is required, but nil was provided")
	}

	return nil
}

//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	"github.com/aws/constructs-go/constructs/v3"
)

func (r *jsiiProxy_RosInfo) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosInfo) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	if newLogicalId == nil {
		return fmt.Errorf("parameter newLogicalId is required, but nil was provided")
	}

	return nil
}

func (r *jsiiProxy_RosInfo) validateSynthesizeParameters(session ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func validateRosInfo_IsConstructParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateRosInfo_IsRosElementParameters(x interface{}) error {
	if x == nil {
		return fmt.Errorf("parameter x is required, but nil was provided")
	}

	return nil
}

func validateRosInfo_SetDescriptionParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func validateRosInfo_SetFormatVersionParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func validateRosInfo_SetMetadataParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func validateRosInfo_SetV20150901Parameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

func validateNewRosInfoParameters(scope Construct, id *string, info interface{}) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	if id == nil {
		return fmt.Errorf("parameter id is required, but nil was provided")
	}

	if info == nil {
		return fmt.Errorf("parameter info is required, but nil was provided")
	}
	switch info.(type) {
	case *string:
		// ok
	case string:
		// ok
	case *map[string]interface{}:
		// ok
	case map[string]interface{}:
		// ok
	default:
		return fmt.Errorf("parameter info must be one of the allowed types: *string, *map[string]interface{}; received %#v (a %T)", info, info)
	}

	return nil
}


//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (h *jsiiProxy_HttpApis) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateAddCountParameters(count interface{}) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateGetAttParameters(name *string) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (h *jsiiProxy_HttpApis) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateHttpApis_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_HttpApis) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_HttpApis) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_HttpApis) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewHttpApisParameters(scope alicloudroscdkcore.Construct, id *string, props *HttpApisProps) error {
	return nil
}


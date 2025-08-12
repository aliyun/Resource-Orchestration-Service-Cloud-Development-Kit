//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (h *jsiiProxy_HttpApi) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateAddCountParameters(count interface{}) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateGetAttParameters(name *string) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (h *jsiiProxy_HttpApi) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateHttpApi_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_HttpApi) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_HttpApi) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_HttpApi) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewHttpApiParameters(scope alicloudroscdkcore.Construct, id *string, props *HttpApiProps) error {
	return nil
}


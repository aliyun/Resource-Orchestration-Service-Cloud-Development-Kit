//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Apis) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Apis) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Apis) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Apis) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Apis) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Apis) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Apis) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Apis) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Apis) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateApis_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Apis) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Apis) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Apis) validateSetPropsParameters(val *ApisProps) error {
	return nil
}

func (j *jsiiProxy_Apis) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewApisParameters(scope alicloudroscdkcore.Construct, id *string, props *ApisProps) error {
	return nil
}


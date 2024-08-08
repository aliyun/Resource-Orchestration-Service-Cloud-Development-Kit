//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_Policies) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_Policies) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_Policies) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_Policies) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_Policies) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_Policies) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_Policies) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_Policies) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_Policies) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validatePolicies_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Policies) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Policies) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Policies) validateSetPropsParameters(val *PoliciesProps) error {
	return nil
}

func (j *jsiiProxy_Policies) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewPoliciesParameters(scope alicloudroscdkcore.Construct, id *string, props *PoliciesProps) error {
	return nil
}


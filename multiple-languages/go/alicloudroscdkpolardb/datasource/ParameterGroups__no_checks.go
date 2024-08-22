//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_ParameterGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_ParameterGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateParameterGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_ParameterGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_ParameterGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ParameterGroups) validateSetPropsParameters(val *ParameterGroupsProps) error {
	return nil
}

func (j *jsiiProxy_ParameterGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewParameterGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *ParameterGroupsProps) error {
	return nil
}


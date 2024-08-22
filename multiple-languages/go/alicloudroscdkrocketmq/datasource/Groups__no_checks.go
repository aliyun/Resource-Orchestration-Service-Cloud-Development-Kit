//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (g *jsiiProxy_Groups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (g *jsiiProxy_Groups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (g *jsiiProxy_Groups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (g *jsiiProxy_Groups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (g *jsiiProxy_Groups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (g *jsiiProxy_Groups) validateGetAttParameters(name *string) error {
	return nil
}

func (g *jsiiProxy_Groups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (g *jsiiProxy_Groups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (g *jsiiProxy_Groups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Groups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Groups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Groups) validateSetPropsParameters(val *GroupsProps) error {
	return nil
}

func (j *jsiiProxy_Groups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *GroupsProps) error {
	return nil
}


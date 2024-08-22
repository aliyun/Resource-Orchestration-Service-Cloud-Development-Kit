//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AccessGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_AccessGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAccessGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_AccessGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_AccessGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_AccessGroups) validateSetPropsParameters(val *AccessGroupsProps) error {
	return nil
}

func (j *jsiiProxy_AccessGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAccessGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *AccessGroupsProps) error {
	return nil
}


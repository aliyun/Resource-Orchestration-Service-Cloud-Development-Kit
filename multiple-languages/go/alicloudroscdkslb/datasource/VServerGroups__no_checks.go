//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (v *jsiiProxy_VServerGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (v *jsiiProxy_VServerGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateVServerGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_VServerGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_VServerGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_VServerGroups) validateSetPropsParameters(val *VServerGroupsProps) error {
	return nil
}

func (j *jsiiProxy_VServerGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewVServerGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *VServerGroupsProps) error {
	return nil
}


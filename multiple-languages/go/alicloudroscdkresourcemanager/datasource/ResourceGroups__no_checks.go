//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_ResourceGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_ResourceGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateResourceGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_ResourceGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_ResourceGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ResourceGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewResourceGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *ResourceGroupsProps) error {
	return nil
}


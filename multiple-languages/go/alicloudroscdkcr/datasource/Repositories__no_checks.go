//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_Repositories) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_Repositories) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRepositories_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Repositories) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Repositories) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Repositories) validateSetPropsParameters(val *RepositoriesProps) error {
	return nil
}

func (j *jsiiProxy_Repositories) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRepositoriesParameters(scope alicloudroscdkcore.Construct, id *string, props *RepositoriesProps) error {
	return nil
}


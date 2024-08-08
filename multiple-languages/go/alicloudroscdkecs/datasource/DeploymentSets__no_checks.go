//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DeploymentSets) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DeploymentSets) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDeploymentSets_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DeploymentSets) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DeploymentSets) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DeploymentSets) validateSetPropsParameters(val *DeploymentSetsProps) error {
	return nil
}

func (j *jsiiProxy_DeploymentSets) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDeploymentSetsParameters(scope alicloudroscdkcore.Construct, id *string, props *DeploymentSetsProps) error {
	return nil
}


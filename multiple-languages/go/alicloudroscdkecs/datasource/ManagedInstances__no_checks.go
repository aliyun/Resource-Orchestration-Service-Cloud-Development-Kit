//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (m *jsiiProxy_ManagedInstances) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateAddCountParameters(count interface{}) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateGetAttParameters(name *string) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (m *jsiiProxy_ManagedInstances) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateManagedInstances_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_ManagedInstances) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_ManagedInstances) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ManagedInstances) validateSetPropsParameters(val *ManagedInstancesProps) error {
	return nil
}

func (j *jsiiProxy_ManagedInstances) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewManagedInstancesParameters(scope alicloudroscdkcore.Construct, id *string, props *ManagedInstancesProps) error {
	return nil
}


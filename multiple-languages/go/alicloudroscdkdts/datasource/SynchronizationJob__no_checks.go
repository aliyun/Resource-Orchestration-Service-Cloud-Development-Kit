//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_SynchronizationJob) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_SynchronizationJob) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSynchronizationJob_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_SynchronizationJob) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_SynchronizationJob) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_SynchronizationJob) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSynchronizationJobParameters(scope alicloudroscdkcore.Construct, id *string, props *SynchronizationJobProps) error {
	return nil
}


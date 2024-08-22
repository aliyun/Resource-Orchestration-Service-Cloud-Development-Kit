//go:build no_runtime_type_checking

package alicloudroscdkvod

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Storage) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Storage) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Storage) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Storage) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Storage) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Storage) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Storage) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Storage) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Storage) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateStorage_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Storage) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Storage) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Storage) validateSetPropsParameters(val *StorageProps) error {
	return nil
}

func (j *jsiiProxy_Storage) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewStorageParameters(scope alicloudroscdkcore.Construct, id *string, props *StorageProps) error {
	return nil
}


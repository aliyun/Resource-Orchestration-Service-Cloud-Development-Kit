//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Storages) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Storages) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Storages) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Storages) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Storages) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Storages) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Storages) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Storages) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Storages) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateStorages_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Storages) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Storages) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Storages) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewStoragesParameters(scope alicloudroscdkcore.Construct, id *string, props *StoragesProps) error {
	return nil
}


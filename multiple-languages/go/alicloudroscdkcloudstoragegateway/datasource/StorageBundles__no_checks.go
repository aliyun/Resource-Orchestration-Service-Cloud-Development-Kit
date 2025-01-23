//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_StorageBundles) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_StorageBundles) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateStorageBundles_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_StorageBundles) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_StorageBundles) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_StorageBundles) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewStorageBundlesParameters(scope alicloudroscdkcore.Construct, id *string, props *StorageBundlesProps) error {
	return nil
}


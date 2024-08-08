//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Services) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Services) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Services) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Services) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Services) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Services) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Services) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Services) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Services) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateServices_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Services) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Services) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Services) validateSetPropsParameters(val *ServicesProps) error {
	return nil
}

func (j *jsiiProxy_Services) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewServicesParameters(scope alicloudroscdkcore.Construct, id *string, props *ServicesProps) error {
	return nil
}


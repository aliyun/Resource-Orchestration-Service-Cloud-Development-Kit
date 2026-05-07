//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_ServiceObservability) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_ServiceObservability) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateServiceObservability_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_ServiceObservability) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_ServiceObservability) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ServiceObservability) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewServiceObservabilityParameters(scope alicloudroscdkcore.Construct, id *string, props *ServiceObservabilityProps) error {
	return nil
}


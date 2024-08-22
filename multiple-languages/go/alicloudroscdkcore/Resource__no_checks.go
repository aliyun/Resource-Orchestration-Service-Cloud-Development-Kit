//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_Resource) validateAddConditionParameters(condition RosCondition) error {
	return nil
}

func (r *jsiiProxy_Resource) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_Resource) validateAddDependencyParameters(resource Resource) error {
	return nil
}

func (r *jsiiProxy_Resource) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_Resource) validateApplyRemovalPolicyParameters(policy RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_Resource) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_Resource) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_Resource) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_Resource) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateResource_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewResourceParameters(scope Construct, id *string, props *ResourceProps) error {
	return nil
}


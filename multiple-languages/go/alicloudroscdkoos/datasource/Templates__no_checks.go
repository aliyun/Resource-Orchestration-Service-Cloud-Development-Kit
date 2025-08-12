//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (t *jsiiProxy_Templates) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (t *jsiiProxy_Templates) validateAddCountParameters(count interface{}) error {
	return nil
}

func (t *jsiiProxy_Templates) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (t *jsiiProxy_Templates) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (t *jsiiProxy_Templates) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (t *jsiiProxy_Templates) validateGetAttParameters(name *string) error {
	return nil
}

func (t *jsiiProxy_Templates) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (t *jsiiProxy_Templates) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (t *jsiiProxy_Templates) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateTemplates_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Templates) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Templates) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Templates) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewTemplatesParameters(scope alicloudroscdkcore.Construct, id *string, props *TemplatesProps) error {
	return nil
}


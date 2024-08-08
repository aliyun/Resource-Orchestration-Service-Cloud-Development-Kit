//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AccessControls) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_AccessControls) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAccessControls_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_AccessControls) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_AccessControls) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_AccessControls) validateSetPropsParameters(val *AccessControlsProps) error {
	return nil
}

func (j *jsiiProxy_AccessControls) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAccessControlsParameters(scope alicloudroscdkcore.Construct, id *string, props *AccessControlsProps) error {
	return nil
}


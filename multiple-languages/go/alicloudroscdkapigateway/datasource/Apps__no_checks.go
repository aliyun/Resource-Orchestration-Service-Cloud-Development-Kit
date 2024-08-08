//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Apps) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Apps) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Apps) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Apps) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Apps) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Apps) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Apps) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Apps) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Apps) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateApps_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Apps) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Apps) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Apps) validateSetPropsParameters(val *AppsProps) error {
	return nil
}

func (j *jsiiProxy_Apps) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAppsParameters(scope alicloudroscdkcore.Construct, id *string, props *AppsProps) error {
	return nil
}


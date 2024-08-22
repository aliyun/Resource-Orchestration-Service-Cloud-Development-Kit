//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Applications) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Applications) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Applications) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Applications) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Applications) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Applications) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Applications) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Applications) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Applications) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateApplications_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Applications) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Applications) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Applications) validateSetPropsParameters(val *ApplicationsProps) error {
	return nil
}

func (j *jsiiProxy_Applications) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewApplicationsParameters(scope alicloudroscdkcore.Construct, id *string, props *ApplicationsProps) error {
	return nil
}


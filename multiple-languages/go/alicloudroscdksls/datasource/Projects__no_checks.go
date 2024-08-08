//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_Projects) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_Projects) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_Projects) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_Projects) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_Projects) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_Projects) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_Projects) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_Projects) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_Projects) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateProjects_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Projects) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Projects) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Projects) validateSetPropsParameters(val *ProjectsProps) error {
	return nil
}

func (j *jsiiProxy_Projects) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewProjectsParameters(scope alicloudroscdkcore.Construct, id *string, props *ProjectsProps) error {
	return nil
}


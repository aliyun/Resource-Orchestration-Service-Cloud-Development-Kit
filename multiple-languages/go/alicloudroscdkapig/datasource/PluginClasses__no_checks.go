//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_PluginClasses) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_PluginClasses) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validatePluginClasses_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_PluginClasses) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_PluginClasses) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_PluginClasses) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewPluginClassesParameters(scope alicloudroscdkcore.Construct, id *string, props *PluginClassesProps) error {
	return nil
}


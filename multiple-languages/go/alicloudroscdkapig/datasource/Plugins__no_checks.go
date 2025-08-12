//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_Plugins) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_Plugins) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validatePlugins_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Plugins) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Plugins) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Plugins) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewPluginsParameters(scope alicloudroscdkcore.Construct, id *string, props *PluginsProps) error {
	return nil
}


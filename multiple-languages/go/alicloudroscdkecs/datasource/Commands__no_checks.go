//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_Commands) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (c *jsiiProxy_Commands) validateAddCountParameters(count interface{}) error {
	return nil
}

func (c *jsiiProxy_Commands) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (c *jsiiProxy_Commands) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (c *jsiiProxy_Commands) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_Commands) validateGetAttParameters(name *string) error {
	return nil
}

func (c *jsiiProxy_Commands) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (c *jsiiProxy_Commands) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (c *jsiiProxy_Commands) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateCommands_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Commands) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Commands) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Commands) validateSetPropsParameters(val *CommandsProps) error {
	return nil
}

func (j *jsiiProxy_Commands) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewCommandsParameters(scope alicloudroscdkcore.Construct, id *string, props *CommandsProps) error {
	return nil
}


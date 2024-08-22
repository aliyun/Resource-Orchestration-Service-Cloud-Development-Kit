//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (w *jsiiProxy_Workspace) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateAddCountParameters(count interface{}) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateGetAttParameters(name *string) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (w *jsiiProxy_Workspace) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateWorkspace_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Workspace) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Workspace) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Workspace) validateSetPropsParameters(val *WorkspaceProps) error {
	return nil
}

func (j *jsiiProxy_Workspace) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewWorkspaceParameters(scope alicloudroscdkcore.Construct, id *string, props *WorkspaceProps) error {
	return nil
}


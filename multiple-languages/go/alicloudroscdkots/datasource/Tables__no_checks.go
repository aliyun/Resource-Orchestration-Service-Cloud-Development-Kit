//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (t *jsiiProxy_Tables) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (t *jsiiProxy_Tables) validateAddCountParameters(count interface{}) error {
	return nil
}

func (t *jsiiProxy_Tables) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (t *jsiiProxy_Tables) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (t *jsiiProxy_Tables) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (t *jsiiProxy_Tables) validateGetAttParameters(name *string) error {
	return nil
}

func (t *jsiiProxy_Tables) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (t *jsiiProxy_Tables) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (t *jsiiProxy_Tables) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateTables_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Tables) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Tables) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Tables) validateSetPropsParameters(val *TablesProps) error {
	return nil
}

func (j *jsiiProxy_Tables) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewTablesParameters(scope alicloudroscdkcore.Construct, id *string, props *TablesProps) error {
	return nil
}


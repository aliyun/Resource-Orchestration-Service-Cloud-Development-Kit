//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RouteTables) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RouteTables) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRouteTables_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_RouteTables) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RouteTables) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_RouteTables) validateSetPropsParameters(val *RouteTablesProps) error {
	return nil
}

func (j *jsiiProxy_RouteTables) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRouteTablesParameters(scope alicloudroscdkcore.Construct, id *string, props *RouteTablesProps) error {
	return nil
}


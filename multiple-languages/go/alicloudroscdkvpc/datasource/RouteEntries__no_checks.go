//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RouteEntries) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RouteEntries) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRouteEntries_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_RouteEntries) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RouteEntries) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_RouteEntries) validateSetPropsParameters(val *RouteEntriesProps) error {
	return nil
}

func (j *jsiiProxy_RouteEntries) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRouteEntriesParameters(scope alicloudroscdkcore.Construct, id *string, props *RouteEntriesProps) error {
	return nil
}


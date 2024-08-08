//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RouteTable) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RouteTable) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRouteTable_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_RouteTable) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RouteTable) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_RouteTable) validateSetPropsParameters(val *RouteTableProps) error {
	return nil
}

func (j *jsiiProxy_RouteTable) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRouteTableParameters(scope alicloudroscdkcore.Construct, id *string, props *RouteTableProps) error {
	return nil
}


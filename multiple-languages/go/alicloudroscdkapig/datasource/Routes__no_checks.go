//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_Routes) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_Routes) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_Routes) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_Routes) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_Routes) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_Routes) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_Routes) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_Routes) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_Routes) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRoutes_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Routes) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Routes) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Routes) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRoutesParameters(scope alicloudroscdkcore.Construct, id *string, props *RoutesProps) error {
	return nil
}


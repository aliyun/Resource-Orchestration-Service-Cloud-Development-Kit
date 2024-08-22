//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_Clusters) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateAddCountParameters(count interface{}) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateGetAttParameters(name *string) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (c *jsiiProxy_Clusters) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateClusters_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Clusters) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Clusters) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Clusters) validateSetPropsParameters(val *ClustersProps) error {
	return nil
}

func (j *jsiiProxy_Clusters) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewClustersParameters(scope alicloudroscdkcore.Construct, id *string, props *ClustersProps) error {
	return nil
}


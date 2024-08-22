//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DedicatedHosts) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DedicatedHosts) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDedicatedHosts_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DedicatedHosts) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DedicatedHosts) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DedicatedHosts) validateSetPropsParameters(val *DedicatedHostsProps) error {
	return nil
}

func (j *jsiiProxy_DedicatedHosts) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDedicatedHostsParameters(scope alicloudroscdkcore.Construct, id *string, props *DedicatedHostsProps) error {
	return nil
}


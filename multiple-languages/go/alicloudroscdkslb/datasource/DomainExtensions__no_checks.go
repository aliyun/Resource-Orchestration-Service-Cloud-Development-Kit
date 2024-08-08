//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DomainExtensions) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DomainExtensions) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDomainExtensions_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DomainExtensions) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DomainExtensions) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DomainExtensions) validateSetPropsParameters(val *DomainExtensionsProps) error {
	return nil
}

func (j *jsiiProxy_DomainExtensions) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDomainExtensionsParameters(scope alicloudroscdkcore.Construct, id *string, props *DomainExtensionsProps) error {
	return nil
}


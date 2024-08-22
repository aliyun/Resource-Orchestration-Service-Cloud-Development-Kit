//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_CustomDomains) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateAddCountParameters(count interface{}) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateGetAttParameters(name *string) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (c *jsiiProxy_CustomDomains) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateCustomDomains_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_CustomDomains) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_CustomDomains) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_CustomDomains) validateSetPropsParameters(val *CustomDomainsProps) error {
	return nil
}

func (j *jsiiProxy_CustomDomains) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewCustomDomainsParameters(scope alicloudroscdkcore.Construct, id *string, props *CustomDomainsProps) error {
	return nil
}


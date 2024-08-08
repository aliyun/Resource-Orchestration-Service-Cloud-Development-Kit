//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (j *jsiiProxy_ISynthesisSession) validateSetAssemblyParameters(val alicloudroscdkcxapi.CloudAssemblyBuilder) error {
	return nil
}

func (j *jsiiProxy_ISynthesisSession) validateSetOutdirParameters(val *string) error {
	return nil
}


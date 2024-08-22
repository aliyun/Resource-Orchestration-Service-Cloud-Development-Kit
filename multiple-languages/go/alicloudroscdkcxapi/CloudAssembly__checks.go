//go:build !no_runtime_type_checking

package alicloudroscdkcxapi

import (
	"fmt"
)

func (c *jsiiProxy_CloudAssembly) validateGetNestedAssemblyParameters(artifactId *string) error {
	if artifactId == nil {
		return fmt.Errorf("parameter artifactId is required, but nil was provided")
	}

	return nil
}

func (c *jsiiProxy_CloudAssembly) validateGetNestedAssemblyArtifactParameters(artifactId *string) error {
	if artifactId == nil {
		return fmt.Errorf("parameter artifactId is required, but nil was provided")
	}

	return nil
}

func (c *jsiiProxy_CloudAssembly) validateGetStackParameters(stackName *string) error {
	if stackName == nil {
		return fmt.Errorf("parameter stackName is required, but nil was provided")
	}

	return nil
}

func (c *jsiiProxy_CloudAssembly) validateGetStackArtifactParameters(artifactId *string) error {
	if artifactId == nil {
		return fmt.Errorf("parameter artifactId is required, but nil was provided")
	}

	return nil
}

func (c *jsiiProxy_CloudAssembly) validateGetStackByNameParameters(stackName *string) error {
	if stackName == nil {
		return fmt.Errorf("parameter stackName is required, but nil was provided")
	}

	return nil
}

func (c *jsiiProxy_CloudAssembly) validateTryGetArtifactParameters(id *string) error {
	if id == nil {
		return fmt.Errorf("parameter id is required, but nil was provided")
	}

	return nil
}

func validateNewCloudAssemblyParameters(directory *string) error {
	if directory == nil {
		return fmt.Errorf("parameter directory is required, but nil was provided")
	}

	return nil
}


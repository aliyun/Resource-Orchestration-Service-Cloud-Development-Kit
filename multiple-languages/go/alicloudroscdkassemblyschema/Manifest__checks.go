//go:build !no_runtime_type_checking

package alicloudroscdkassemblyschema

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func validateManifest_LoadParameters(filePath *string) error {
	if filePath == nil {
		return fmt.Errorf("parameter filePath is required, but nil was provided")
	}

	return nil
}

func validateManifest_LoadAssemblyManifestParameters(filePath *string) error {
	if filePath == nil {
		return fmt.Errorf("parameter filePath is required, but nil was provided")
	}

	return nil
}

func validateManifest_SaveParameters(manifest *AssemblyManifest, filePath *string) error {
	if manifest == nil {
		return fmt.Errorf("parameter manifest is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(manifest, func() string { return "parameter manifest" }); err != nil {
		return err
	}

	if filePath == nil {
		return fmt.Errorf("parameter filePath is required, but nil was provided")
	}

	return nil
}

func validateManifest_SaveAssemblyManifestParameters(manifest *AssemblyManifest, filePath *string) error {
	if manifest == nil {
		return fmt.Errorf("parameter manifest is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(manifest, func() string { return "parameter manifest" }); err != nil {
		return err
	}

	if filePath == nil {
		return fmt.Errorf("parameter filePath is required, but nil was provided")
	}

	return nil
}


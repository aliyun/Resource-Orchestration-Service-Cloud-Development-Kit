//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

func (s *jsiiProxy_StackSynthesizer) validateAddFileAssetParameters(asset *FileAssetSource) error {
	if asset == nil {
		return fmt.Errorf("parameter asset is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(asset, func() string { return "parameter asset" }); err != nil {
		return err
	}

	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateBindParameters(stack Stack) error {
	if stack == nil {
		return fmt.Errorf("parameter stack is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateEmitArtifactParameters(session ISynthesisSession, options *SynthesizeStackArtifactOptions) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	if err := _jsii_.ValidateStruct(options, func() string { return "parameter options" }); err != nil {
		return err
	}

	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateRosLocationFromFileAssetParameters(location *alicloudroscdkassemblyschema.FileDestination) error {
	if location == nil {
		return fmt.Errorf("parameter location is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(location, func() string { return "parameter location" }); err != nil {
		return err
	}

	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateSynthesizeParameters(session ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateSynthesizeTemplateParameters(session ISynthesisSession) error {
	if session == nil {
		return fmt.Errorf("parameter session is required, but nil was provided")
	}

	return nil
}


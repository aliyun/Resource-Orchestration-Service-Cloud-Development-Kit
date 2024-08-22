//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"
)

func (i *jsiiProxy_IReusableStackSynthesizer) validateReusableBindParameters(stack Stack) error {
	if stack == nil {
		return fmt.Errorf("parameter stack is required, but nil was provided")
	}

	return nil
}


package alicloudroscdkcloudsiem

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsiem/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ImportLogTasksSubmission`.
type IImportLogTasksSubmission interface {
	alicloudroscdkcore.IResource
	Props() *ImportLogTasksSubmissionProps
}

// The jsii proxy for IImportLogTasksSubmission
type jsiiProxy_IImportLogTasksSubmission struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImportLogTasksSubmission) Props() *ImportLogTasksSubmissionProps {
	var returns *ImportLogTasksSubmissionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}


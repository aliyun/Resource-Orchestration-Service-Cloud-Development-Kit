package alicloudroscdkschedulerx


// Properties for defining a `WorkFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
type WorkFlowProps struct {
	// Property groupId: The application Group ID, which is obtained from the application management page of the console.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property namespace: The namespace ID, which is obtained from the namespace page in the console.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property timeType: Time type.
	//
	// Currently, the following time types are supported:
	// - cron: 1
	// - api: 100.
	TimeType interface{} `field:"required" json:"timeType" yaml:"timeType"`
	// Property workflowName: Workflow Name.
	WorkflowName interface{} `field:"required" json:"workflowName" yaml:"workflowName"`
	// Property description: Workflow description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property maxConcurrency: The maximum number of workflow instances running at the same time.
	//
	// The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
	MaxConcurrency interface{} `field:"optional" json:"maxConcurrency" yaml:"maxConcurrency"`
	// Property namespaceSource: Special third parties are required.
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	// Property timeExpression: Time expression, which is set based on the selected time type.
	//
	// - cron: Fill in standard cron expressions to support online verification.
	// - api: No time expression.
	TimeExpression interface{} `field:"optional" json:"timeExpression" yaml:"timeExpression"`
	// Property timezone: Time Zone.
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
}


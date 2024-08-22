package alicloudroscdkcore


// Represents a RosTemplate element that can be used within a Condition.
//
// You can use intrinsic functions, such as ``Fn.conditionIf``,
// ``Fn.conditionEquals``, and ``Fn.conditionNot``, to conditionally create
// stack resources. These conditions are evaluated based on input parameters
// that you declare when you create or update a stack. After you define all your
// conditions, you can associate them with resources or resource properties in
// the Resources and Outputs sections of a template.
type IRosConditionExpression interface {
	IResolvable
}

// The jsii proxy for IRosConditionExpression
type jsiiProxy_IRosConditionExpression struct {
	jsiiProxy_IResolvable
}


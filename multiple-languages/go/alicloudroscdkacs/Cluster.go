package alicloudroscdkacs

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkacs/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacs/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `ALIYUN::ACS::Cluster`, which is used to create a Container Compute Service (ACS) cluster.
type Cluster interface {
	alicloudroscdkcore.Resource
	ICluster
	// Attribute APIServerSLBId: The id of API server SLB.
	AttrApiServerSlbId() interface{}
	// Attribute ClusterId: Cluster instance ID.
	AttrClusterId() interface{}
	// Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
	AttrDefaultUserKubeConfig() interface{}
	// Attribute IngressSLBId: The id of ingress SLB.
	AttrIngressSlbId() interface{}
	// Attribute Nodes: The list of cluster nodes.
	AttrNodes() interface{}
	// Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
	AttrPrivateUserKubConfig() interface{}
	// Attribute ScalingConfigurationId: Scaling configuration id.
	AttrScalingConfigurationId() interface{}
	// Attribute ScalingGroupId: Scaling group id.
	AttrScalingGroupId() interface{}
	// Attribute ScalingRuleId: Scaling rule id.
	AttrScalingRuleId() interface{}
	// Attribute TaskId: Task ID.
	//
	// Automatically assigned by the system, the user queries the task status.
	AttrTaskId() interface{}
	// Attribute WorkerRamRoleName: Worker ram role name.
	AttrWorkerRamRoleName() interface{}
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() alicloudroscdkcore.IResourceEnvironment
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *ClusterProps
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for Cluster
type jsiiProxy_Cluster struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_ICluster
}

func (j *jsiiProxy_Cluster) AttrApiServerSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiServerSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrDefaultUserKubeConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultUserKubeConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrIngressSlbId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIngressSlbId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrPrivateUserKubConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateUserKubConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrScalingConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrScalingRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) AttrWorkerRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkerRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Props() *ClusterProps {
	var returns *ClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Cluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewCluster(scope alicloudroscdkcore.Construct, id *string, props *ClusterProps, enableResourcePropertyConstraint *bool) Cluster {
	_init_.Initialize()

	if err := validateNewClusterParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Cluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-acs.Cluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewCluster_Override(c Cluster, scope alicloudroscdkcore.Construct, id *string, props *ClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-acs.Cluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		c,
	)
}

func (j *jsiiProxy_Cluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Cluster)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Cluster)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Cluster)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func Cluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-acs.Cluster",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := c.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addCondition",
		[]interface{}{condition},
	)
}

func (c *jsiiProxy_Cluster) AddCount(count interface{}) {
	if err := c.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addCount",
		[]interface{}{count},
	)
}

func (c *jsiiProxy_Cluster) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := c.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addDependency",
		[]interface{}{resource},
	)
}

func (c *jsiiProxy_Cluster) AddResourceDesc(desc *string) {
	if err := c.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (c *jsiiProxy_Cluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := c.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (c *jsiiProxy_Cluster) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		c,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := c.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		c,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) OnPrepare() {
	_jsii_.InvokeVoid(
		c,
		"onPrepare",
		nil, // no parameters
	)
}

func (c *jsiiProxy_Cluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := c.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (c *jsiiProxy_Cluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) Prepare() {
	_jsii_.InvokeVoid(
		c,
		"prepare",
		nil, // no parameters
	)
}

func (c *jsiiProxy_Cluster) SetMetadata(key *string, value interface{}) {
	if err := c.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (c *jsiiProxy_Cluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := c.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"synthesize",
		[]interface{}{session},
	)
}

func (c *jsiiProxy_Cluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		c,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_Cluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		c,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}


package alicloudroscdkmse

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmse/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Cluster`, which is used to create a cluster.
type RosCluster interface {
	alicloudroscdkcore.RosResource
	AcceptLanguage() interface{}
	SetAcceptLanguage(val interface{})
	AclEntryList() interface{}
	SetAclEntryList(val interface{})
	AttrAclEntryList() alicloudroscdkcore.IResolvable
	AttrAclId() alicloudroscdkcore.IResolvable
	AttrAppVersion() alicloudroscdkcore.IResolvable
	AttrClusterAliasName() alicloudroscdkcore.IResolvable
	AttrClusterId() alicloudroscdkcore.IResolvable
	AttrClusterName() alicloudroscdkcore.IResolvable
	AttrClusterSpecification() alicloudroscdkcore.IResolvable
	AttrClusterType() alicloudroscdkcore.IResolvable
	AttrClusterVersion() alicloudroscdkcore.IResolvable
	AttrConfigAuthEnabled() alicloudroscdkcore.IResolvable
	AttrConfigSecretEnabled() alicloudroscdkcore.IResolvable
	AttrConnectionType() alicloudroscdkcore.IResolvable
	AttrCpu() alicloudroscdkcore.IResolvable
	AttrDiskCapacity() alicloudroscdkcore.IResolvable
	AttrDiskType() alicloudroscdkcore.IResolvable
	AttrHealthStatus() alicloudroscdkcore.IResolvable
	AttrInstanceCount() alicloudroscdkcore.IResolvable
	AttrInstanceId() alicloudroscdkcore.IResolvable
	AttrInternetAddress() alicloudroscdkcore.IResolvable
	AttrInternetDomain() alicloudroscdkcore.IResolvable
	AttrInternetPort() alicloudroscdkcore.IResolvable
	AttrIntranetAddress() alicloudroscdkcore.IResolvable
	AttrIntranetDomain() alicloudroscdkcore.IResolvable
	AttrIntranetPort() alicloudroscdkcore.IResolvable
	AttrMcpEnabled() alicloudroscdkcore.IResolvable
	AttrMemoryCapacity() alicloudroscdkcore.IResolvable
	AttrMseVersion() alicloudroscdkcore.IResolvable
	AttrNetType() alicloudroscdkcore.IResolvable
	AttrPayInfo() alicloudroscdkcore.IResolvable
	AttrPubNetworkFlow() alicloudroscdkcore.IResolvable
	AttrVpcId() alicloudroscdkcore.IResolvable
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	ClusterAliasName() interface{}
	SetClusterAliasName(val interface{})
	ClusterSpecification() interface{}
	SetClusterSpecification(val interface{})
	ClusterType() interface{}
	SetClusterType(val interface{})
	ClusterVersion() interface{}
	SetClusterVersion(val interface{})
	ConnectionType() interface{}
	SetConnectionType(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	DiskType() interface{}
	SetDiskType(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	InstanceCount() interface{}
	SetInstanceCount(val interface{})
	// The logical ID for this stack element.
	//
	// The logical ID of the element
	// is calculated from the path of the resource node in the construct tree.
	//
	// To override this value, use `overrideLogicalId(newLogicalId)`.
	//
	// Returns: the logical ID as a stringified token. This value will only get
	// resolved during synthesis.
	LogicalId() *string
	MseVersion() interface{}
	SetMseVersion(val interface{})
	NetType() interface{}
	SetNetType(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	PrivateSlbSpecification() interface{}
	SetPrivateSlbSpecification(val interface{})
	PubNetworkFlow() interface{}
	SetPubNetworkFlow(val interface{})
	PubSlbSpecification() interface{}
	SetPubSlbSpecification(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RequestPars() interface{}
	SetRequestPars(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	VpcId() interface{}
	SetVpcId(val interface{})
	VSwitchId() interface{}
	SetVSwitchId(val interface{})
	AddCondition(con alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	// Syntactic sugar for `addOverride(path, undefined)`.
	AddDeletionOverride(path *string)
	// Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
	//
	// This can be used for resources across stacks (or nested stack) boundaries
	// and the dependency will automatically be transferred to the relevant scope.
	AddDependsOn(target alicloudroscdkcore.RosResource)
	AddDesc(desc *string)
	AddMetaData(key *string, value interface{})
	// Adds an override to the synthesized ROS resource.
	//
	// To add a
	// property override, either use `addPropertyOverride` or prefix `path` with
	// "Properties." (i.e. `Properties.TopicName`).
	//
	// If the override is nested, separate each nested level using a dot (.) in the path parameter.
	// If there is an array as part of the nesting, specify the index in the path.
	//
	// For example,
	// ```typescript
	// addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
	// addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
	// ```
	// would add the overrides
	// ```json
	// "Properties": {
	//    "GlobalSecondaryIndexes": [
	//      {
	//        "Projection": {
	//          "NonKeyAttributes": [ "myattribute" ]
	//          ...
	//        }
	//        ...
	//      },
	//      {
	//        "ProjectionType": "INCLUDE"
	//        ...
	//      },
	//    ]
	//    ...
	// }
	// ```.
	AddOverride(path *string, value interface{})
	// Adds an override that deletes the value of a property from the resource definition.
	AddPropertyDeletionOverride(propertyPath *string)
	// Adds an override to a resource property.
	//
	// Syntactic sugar for `addOverride("Properties.<...>", value)`.
	AddPropertyOverride(propertyPath *string, value interface{})
	AddRosDependency(target *string)
	// Sets the deletion policy of the resource based on the removal policy specified.
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions)
	// Returns a token for an runtime attribute of this resource.
	//
	// Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
	// in case there is no generated attribute.
	GetAtt(attributeName *string) alicloudroscdkcore.Reference
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
	// Overrides the auto-generated logical ID with a specific ID.
	OverrideLogicalId(newLogicalId *string)
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	RenderProperties(props *map[string]interface{}) *map[string]interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	//
	// Returns: a string representation of this resource.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(_properties interface{})
}

// The jsii proxy struct for RosCluster
type jsiiProxy_RosCluster struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosCluster) AcceptLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"acceptLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AclEntryList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"aclEntryList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrAclEntryList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclEntryList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrAclId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrAppVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAppVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterAliasName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterAliasName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterSpecification() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrClusterVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrClusterVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrConfigAuthEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigAuthEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrConfigSecretEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConfigSecretEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrConnectionType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrConnectionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrCpu() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrDiskCapacity() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrDiskType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDiskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrHealthStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHealthStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrInstanceCount() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrInternetAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrInternetDomain() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrInternetPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInternetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrIntranetAddress() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIntranetAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrIntranetDomain() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIntranetDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrIntranetPort() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrIntranetPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrMcpEnabled() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMcpEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrMemoryCapacity() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMemoryCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrMseVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMseVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrNetType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrPayInfo() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPayInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrPubNetworkFlow() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPubNetworkFlow",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ClusterAliasName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterAliasName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ClusterSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ClusterType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ClusterVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"clusterVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) ConnectionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) DiskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"diskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) InstanceCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"instanceCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) MseVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mseVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) NetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"netType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) PrivateSlbSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"privateSlbSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) PubNetworkFlow() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pubNetworkFlow",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) PubSlbSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pubSlbSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RequestPars() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"requestPars",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCluster) VSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"vSwitchId",
		&returns,
	)
	return returns
}


func NewRosCluster(scope alicloudroscdkcore.Construct, id *string, props *RosClusterProps, enableResourcePropertyConstraint *bool) RosCluster {
	_init_.Initialize()

	if err := validateNewRosClusterParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosCluster{}

	_jsii_.Create(
		"@alicloud/ros-cdk-mse.RosCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosCluster_Override(r RosCluster, scope alicloudroscdkcore.Construct, id *string, props *RosClusterProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-mse.RosCluster",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosCluster)SetAcceptLanguage(val interface{}) {
	if err := j.validateSetAcceptLanguageParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"acceptLanguage",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetAclEntryList(val interface{}) {
	if err := j.validateSetAclEntryListParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"aclEntryList",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetClusterAliasName(val interface{}) {
	if err := j.validateSetClusterAliasNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterAliasName",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetClusterSpecification(val interface{}) {
	if err := j.validateSetClusterSpecificationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterSpecification",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetClusterType(val interface{}) {
	if err := j.validateSetClusterTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetClusterVersion(val interface{}) {
	if err := j.validateSetClusterVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"clusterVersion",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetConnectionType(val interface{}) {
	if err := j.validateSetConnectionTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectionType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetDiskType(val interface{}) {
	if err := j.validateSetDiskTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"diskType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetInstanceCount(val interface{}) {
	if err := j.validateSetInstanceCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"instanceCount",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetMseVersion(val interface{}) {
	if err := j.validateSetMseVersionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mseVersion",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetNetType(val interface{}) {
	if err := j.validateSetNetTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"netType",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPrivateSlbSpecification(val interface{}) {
	if err := j.validateSetPrivateSlbSpecificationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"privateSlbSpecification",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPubNetworkFlow(val interface{}) {
	if err := j.validateSetPubNetworkFlowParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pubNetworkFlow",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetPubSlbSpecification(val interface{}) {
	if err := j.validateSetPubSlbSpecificationParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pubSlbSpecification",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetRequestPars(val interface{}) {
	if err := j.validateSetRequestParsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"requestPars",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVpcId(val interface{}) {
	if err := j.validateSetVpcIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vpcId",
		val,
	)
}

func (j *jsiiProxy_RosCluster)SetVSwitchId(val interface{}) {
	if err := j.validateSetVSwitchIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"vSwitchId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-mse.RosCluster",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
//
// Uses duck-typing instead of `instanceof` to allow stack elements from different
// versions of this library to be included in the same stack.
//
// Returns: The construct as a stack element or undefined if it is not a stack element.
func RosCluster_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCluster_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-mse.RosCluster",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosCluster_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosCluster_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-mse.RosCluster",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosCluster_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-mse.RosCluster",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosCluster) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosCluster) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosCluster) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosCluster) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCluster) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosCluster) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosCluster) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosCluster) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosCluster) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosCluster) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCluster) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosCluster) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
	if err := r.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.Reference

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCluster) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCluster) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosCluster) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCluster) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
	if err := r.validateRenderPropertiesParameters(props); err != nil {
		panic(err)
	}
	var returns *map[string]interface{}

	_jsii_.Invoke(
		r,
		"renderProperties",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCluster) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}


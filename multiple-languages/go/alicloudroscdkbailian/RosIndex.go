package alicloudroscdkbailian

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkbailian/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbailian/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::Index`.
type RosIndex interface {
	alicloudroscdkcore.RosResource
	AttrId() alicloudroscdkcore.IResolvable
	CategoryIds() interface{}
	SetCategoryIds(val interface{})
	ChunkMode() interface{}
	SetChunkMode(val interface{})
	ChunkSize() interface{}
	SetChunkSize(val interface{})
	ConnectId() interface{}
	SetConnectId(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Database() interface{}
	SetDatabase(val interface{})
	DenseSimilarityTopK() interface{}
	SetDenseSimilarityTopK(val interface{})
	Description() interface{}
	SetDescription(val interface{})
	DocumentIds() interface{}
	SetDocumentIds(val interface{})
	EmbeddingModelName() interface{}
	SetEmbeddingModelName(val interface{})
	EnableHeaders() interface{}
	SetEnableHeaders(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	EnableRewrite() interface{}
	SetEnableRewrite(val interface{})
	KnowledgeScene() interface{}
	SetKnowledgeScene(val interface{})
	KnowledgeType() interface{}
	SetKnowledgeType(val interface{})
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
	MetaExtractColumns() interface{}
	SetMetaExtractColumns(val interface{})
	Name() interface{}
	SetName(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OverlapSize() interface{}
	SetOverlapSize(val interface{})
	PipelineCommercialCu() interface{}
	SetPipelineCommercialCu(val interface{})
	PipelineCommercialType() interface{}
	SetPipelineCommercialType(val interface{})
	PipelineRetrieveRateLimitStrategy() interface{}
	SetPipelineRetrieveRateLimitStrategy(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	RerankInstruct() interface{}
	SetRerankInstruct(val interface{})
	RerankMinScore() interface{}
	SetRerankMinScore(val interface{})
	RerankMode() interface{}
	SetRerankMode(val interface{})
	RerankModelName() interface{}
	SetRerankModelName(val interface{})
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	Separator() interface{}
	SetSeparator(val interface{})
	SinkInstanceId() interface{}
	SetSinkInstanceId(val interface{})
	SinkRegion() interface{}
	SetSinkRegion(val interface{})
	SinkType() interface{}
	SetSinkType(val interface{})
	SourceType() interface{}
	SetSourceType(val interface{})
	SparseSimilarityTopK() interface{}
	SetSparseSimilarityTopK(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	StructureType() interface{}
	SetStructureType(val interface{})
	Table() interface{}
	SetTable(val interface{})
	TableIds() interface{}
	SetTableIds(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	WorkspaceId() interface{}
	SetWorkspaceId(val interface{})
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDesc() *string
	FetchRosDependency() *[]*string
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

// The jsii proxy struct for RosIndex
type jsiiProxy_RosIndex struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosIndex) AttrId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) CategoryIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"categoryIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) ChunkMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chunkMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) ChunkSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"chunkSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) ConnectId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"connectId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Database() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"database",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) DenseSimilarityTopK() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"denseSimilarityTopK",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) DocumentIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"documentIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) EmbeddingModelName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"embeddingModelName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) EnableHeaders() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableHeaders",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) EnableRewrite() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"enableRewrite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) KnowledgeScene() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"knowledgeScene",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) KnowledgeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"knowledgeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) MetaExtractColumns() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"metaExtractColumns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Name() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) OverlapSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"overlapSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) PipelineCommercialCu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pipelineCommercialCu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) PipelineCommercialType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pipelineCommercialType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) PipelineRetrieveRateLimitStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"pipelineRetrieveRateLimitStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RerankInstruct() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rerankInstruct",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RerankMinScore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rerankMinScore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RerankMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rerankMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RerankModelName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"rerankModelName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Separator() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"separator",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) SinkInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sinkInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) SinkRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sinkRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) SinkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sinkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) SourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) SparseSimilarityTopK() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sparseSimilarityTopK",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) StructureType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"structureType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) Table() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"table",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) TableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosIndex) WorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"workspaceId",
		&returns,
	)
	return returns
}


func NewRosIndex(scope alicloudroscdkcore.Construct, id *string, props *RosIndexProps, enableResourcePropertyConstraint *bool) RosIndex {
	_init_.Initialize()

	if err := validateNewRosIndexParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosIndex{}

	_jsii_.Create(
		"@alicloud/ros-cdk-bailian.RosIndex",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosIndex_Override(r RosIndex, scope alicloudroscdkcore.Construct, id *string, props *RosIndexProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-bailian.RosIndex",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosIndex)SetCategoryIds(val interface{}) {
	if err := j.validateSetCategoryIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"categoryIds",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetChunkMode(val interface{}) {
	if err := j.validateSetChunkModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chunkMode",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetChunkSize(val interface{}) {
	if err := j.validateSetChunkSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"chunkSize",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetConnectId(val interface{}) {
	if err := j.validateSetConnectIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"connectId",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetDatabase(val interface{}) {
	if err := j.validateSetDatabaseParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"database",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetDenseSimilarityTopK(val interface{}) {
	if err := j.validateSetDenseSimilarityTopKParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"denseSimilarityTopK",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetDocumentIds(val interface{}) {
	if err := j.validateSetDocumentIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"documentIds",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetEmbeddingModelName(val interface{}) {
	if err := j.validateSetEmbeddingModelNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"embeddingModelName",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetEnableHeaders(val interface{}) {
	if err := j.validateSetEnableHeadersParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableHeaders",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetEnableRewrite(val interface{}) {
	if err := j.validateSetEnableRewriteParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableRewrite",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetKnowledgeScene(val interface{}) {
	if err := j.validateSetKnowledgeSceneParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"knowledgeScene",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetKnowledgeType(val interface{}) {
	if err := j.validateSetKnowledgeTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"knowledgeType",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetMetaExtractColumns(val interface{}) {
	if err := j.validateSetMetaExtractColumnsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"metaExtractColumns",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetName(val interface{}) {
	if err := j.validateSetNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"name",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetOverlapSize(val interface{}) {
	if err := j.validateSetOverlapSizeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"overlapSize",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetPipelineCommercialCu(val interface{}) {
	if err := j.validateSetPipelineCommercialCuParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pipelineCommercialCu",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetPipelineCommercialType(val interface{}) {
	if err := j.validateSetPipelineCommercialTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pipelineCommercialType",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetPipelineRetrieveRateLimitStrategy(val interface{}) {
	if err := j.validateSetPipelineRetrieveRateLimitStrategyParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"pipelineRetrieveRateLimitStrategy",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetRerankInstruct(val interface{}) {
	if err := j.validateSetRerankInstructParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rerankInstruct",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetRerankMinScore(val interface{}) {
	if err := j.validateSetRerankMinScoreParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rerankMinScore",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetRerankMode(val interface{}) {
	if err := j.validateSetRerankModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rerankMode",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetRerankModelName(val interface{}) {
	if err := j.validateSetRerankModelNameParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"rerankModelName",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetSeparator(val interface{}) {
	if err := j.validateSetSeparatorParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"separator",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetSinkInstanceId(val interface{}) {
	if err := j.validateSetSinkInstanceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sinkInstanceId",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetSinkRegion(val interface{}) {
	if err := j.validateSetSinkRegionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sinkRegion",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetSinkType(val interface{}) {
	if err := j.validateSetSinkTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sinkType",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetSourceType(val interface{}) {
	if err := j.validateSetSourceTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceType",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetSparseSimilarityTopK(val interface{}) {
	if err := j.validateSetSparseSimilarityTopKParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sparseSimilarityTopK",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetStructureType(val interface{}) {
	if err := j.validateSetStructureTypeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"structureType",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetTable(val interface{}) {
	if err := j.validateSetTableParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"table",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetTableIds(val interface{}) {
	if err := j.validateSetTableIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"tableIds",
		val,
	)
}

func (j *jsiiProxy_RosIndex)SetWorkspaceId(val interface{}) {
	if err := j.validateSetWorkspaceIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"workspaceId",
		val,
	)
}

// Return whether the given object is a Construct.
func RosIndex_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosIndex_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-bailian.RosIndex",
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
func RosIndex_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosIndex_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-bailian.RosIndex",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosIndex_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosIndex_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-bailian.RosIndex",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosIndex_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-bailian.RosIndex",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosIndex) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosIndex) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosIndex) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosIndex) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosIndex) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosIndex) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosIndex) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosIndex) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosIndex) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosIndex) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosIndex) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosIndex) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		r,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIndex) FetchDesc() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"fetchDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIndex) FetchRosDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"fetchRosDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIndex) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
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

func (r *jsiiProxy_RosIndex) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosIndex) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosIndex) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIndex) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosIndex) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosIndex) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
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

func (r *jsiiProxy_RosIndex) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosIndex) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIndex) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosIndex) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}


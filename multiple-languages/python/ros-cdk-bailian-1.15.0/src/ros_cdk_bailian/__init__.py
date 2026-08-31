'''
## Aliyun ROS BAILIAN Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BAILIAN from '@alicloud/ros-cdk-bailian';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bailian.ApiKeyProps",
    jsii_struct_bases=[],
    name_mapping={"auth_set_model": "authSetModel", "description": "description"},
)
class ApiKeyProps:
    def __init__(
        self,
        *,
        auth_set_model: typing.Optional[typing.Union[typing.Union["RosApiKey.AuthSetModelProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApiKey``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey

        :param auth_set_model: Property authSetModel: The model of the authentication.
        :param description: Property description: The description of the API key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc5fd2b81dfb52f3c30a9e4196c15f66079ee0ff16c554518c65ab27471cb71f)
            check_type(argname="argument auth_set_model", value=auth_set_model, expected_type=type_hints["auth_set_model"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auth_set_model is not None:
            self._values["auth_set_model"] = auth_set_model
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def auth_set_model(
        self,
    ) -> typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authSetModel: The model of the authentication.'''
        result = self._values.get("auth_set_model")
        return typing.cast(typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the API key.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApiKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-bailian.IApiKey")
class IApiKey(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ApiKey``.'''

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiKeyId: The id of the API key.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The value of the API key.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiKeyProps:
        ...


class _IApiKeyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ApiKey``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bailian.IApiKey"

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiKeyId: The id of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The value of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiKeyProps:
        return typing.cast(ApiKeyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApiKey).__jsii_proxy_class__ = lambda : _IApiKeyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-bailian.IIndex")
class IIndex(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Index``.'''

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The unique ID of the knowledge base index.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IndexProps":
        ...


class _IIndexProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Index``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-bailian.IIndex"

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The unique ID of the knowledge base index.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IndexProps":
        return typing.cast("IndexProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IIndex).__jsii_proxy_class__ = lambda : _IIndexProxy


@jsii.implements(IIndex)
class Index(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bailian.Index",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Bailian::Index``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIndex``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4f066ac021c9a0ce5f368fd17c109116e0c0c02a1c815ffed1d4437f8747bd7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The unique ID of the knowledge base index.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IndexProps":
        return typing.cast("IndexProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a825fb947e19d4d79c9c358b3493f68675990d8543141ccb29ebbfcab0667c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bfe65e566192b88f76462b642794e5e0ea99da4661cf1fd46d4cac5d7f02773)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34f2ed2f8c060eb2099bcf05d91dd4cff7a2945755293978075cd89472115545)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bailian.IndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "source_type": "sourceType",
        "structure_type": "structureType",
        "workspace_id": "workspaceId",
        "category_ids": "categoryIds",
        "chunk_mode": "chunkMode",
        "chunk_size": "chunkSize",
        "connect_id": "connectId",
        "database": "database",
        "dense_similarity_top_k": "denseSimilarityTopK",
        "description": "description",
        "document_ids": "documentIds",
        "embedding_model_name": "embeddingModelName",
        "enable_headers": "enableHeaders",
        "enable_rewrite": "enableRewrite",
        "knowledge_scene": "knowledgeScene",
        "knowledge_type": "knowledgeType",
        "meta_extract_columns": "metaExtractColumns",
        "overlap_size": "overlapSize",
        "pipeline_commercial_cu": "pipelineCommercialCu",
        "pipeline_commercial_type": "pipelineCommercialType",
        "pipeline_retrieve_rate_limit_strategy": "pipelineRetrieveRateLimitStrategy",
        "rerank_instruct": "rerankInstruct",
        "rerank_min_score": "rerankMinScore",
        "rerank_mode": "rerankMode",
        "rerank_model_name": "rerankModelName",
        "separator": "separator",
        "sink_instance_id": "sinkInstanceId",
        "sink_region": "sinkRegion",
        "sink_type": "sinkType",
        "sparse_similarity_top_k": "sparseSimilarityTopK",
        "table": "table",
        "table_ids": "tableIds",
    },
)
class IndexProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        structure_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        category_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        chunk_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        chunk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connect_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        database: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dense_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        document_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        embedding_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_headers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_rewrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        knowledge_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        knowledge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        meta_extract_columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIndex.MetaExtractColumnsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        overlap_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pipeline_commercial_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pipeline_commercial_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pipeline_retrieve_rate_limit_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_instruct: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_min_score: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        separator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sink_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sink_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sink_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sparse_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``Index``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index

        :param name: Property name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
        :param source_type: Property sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
        :param structure_type: Property structureType: Knowledge base type. unstructured: document search or audio/video knowledge base. structured: data query or image Q&A knowledge base.
        :param workspace_id: Property workspaceId: Workspace ID. The knowledge base will be created in this workspace.
        :param category_ids: Property categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
        :param chunk_mode: Property chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
        :param chunk_size: Property chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
        :param connect_id: Property connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
        :param database: Property database: Database name for structured knowledge base.
        :param dense_similarity_top_k: Property denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        :param description: Property description: Knowledge base description. 0-1000 characters.
        :param document_ids: Property documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
        :param embedding_model_name: Property embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
        :param enable_headers: Property enableHeaders: Whether to enable headers for document parsing. Defaults to false.
        :param enable_rewrite: Property enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
        :param knowledge_scene: Property knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
        :param knowledge_type: Property knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
        :param meta_extract_columns: Property metaExtractColumns: Metadata extraction configuration.
        :param overlap_size: Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
        :param pipeline_commercial_cu: Property pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
        :param pipeline_commercial_type: Property pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
        :param pipeline_retrieve_rate_limit_strategy: Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
        :param rerank_instruct: Property rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
        :param rerank_min_score: Property rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
        :param rerank_mode: Property rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
        :param rerank_model_name: Property rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
        :param separator: Property separator: Separator for chunking. Only effective when ChunkMode is regex.
        :param sink_instance_id: Property sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
        :param sink_region: Property sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
        :param sink_type: Property sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
        :param sparse_similarity_top_k: Property sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        :param table: Property table: Table name for structured knowledge base.
        :param table_ids: Property tableIds: Table IDs to import when creating the knowledge base.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fe3ad886b8503414263afa12d71748305a3e9e95fd440ead8a4dcafe0339be6)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument structure_type", value=structure_type, expected_type=type_hints["structure_type"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument category_ids", value=category_ids, expected_type=type_hints["category_ids"])
            check_type(argname="argument chunk_mode", value=chunk_mode, expected_type=type_hints["chunk_mode"])
            check_type(argname="argument chunk_size", value=chunk_size, expected_type=type_hints["chunk_size"])
            check_type(argname="argument connect_id", value=connect_id, expected_type=type_hints["connect_id"])
            check_type(argname="argument database", value=database, expected_type=type_hints["database"])
            check_type(argname="argument dense_similarity_top_k", value=dense_similarity_top_k, expected_type=type_hints["dense_similarity_top_k"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument document_ids", value=document_ids, expected_type=type_hints["document_ids"])
            check_type(argname="argument embedding_model_name", value=embedding_model_name, expected_type=type_hints["embedding_model_name"])
            check_type(argname="argument enable_headers", value=enable_headers, expected_type=type_hints["enable_headers"])
            check_type(argname="argument enable_rewrite", value=enable_rewrite, expected_type=type_hints["enable_rewrite"])
            check_type(argname="argument knowledge_scene", value=knowledge_scene, expected_type=type_hints["knowledge_scene"])
            check_type(argname="argument knowledge_type", value=knowledge_type, expected_type=type_hints["knowledge_type"])
            check_type(argname="argument meta_extract_columns", value=meta_extract_columns, expected_type=type_hints["meta_extract_columns"])
            check_type(argname="argument overlap_size", value=overlap_size, expected_type=type_hints["overlap_size"])
            check_type(argname="argument pipeline_commercial_cu", value=pipeline_commercial_cu, expected_type=type_hints["pipeline_commercial_cu"])
            check_type(argname="argument pipeline_commercial_type", value=pipeline_commercial_type, expected_type=type_hints["pipeline_commercial_type"])
            check_type(argname="argument pipeline_retrieve_rate_limit_strategy", value=pipeline_retrieve_rate_limit_strategy, expected_type=type_hints["pipeline_retrieve_rate_limit_strategy"])
            check_type(argname="argument rerank_instruct", value=rerank_instruct, expected_type=type_hints["rerank_instruct"])
            check_type(argname="argument rerank_min_score", value=rerank_min_score, expected_type=type_hints["rerank_min_score"])
            check_type(argname="argument rerank_mode", value=rerank_mode, expected_type=type_hints["rerank_mode"])
            check_type(argname="argument rerank_model_name", value=rerank_model_name, expected_type=type_hints["rerank_model_name"])
            check_type(argname="argument separator", value=separator, expected_type=type_hints["separator"])
            check_type(argname="argument sink_instance_id", value=sink_instance_id, expected_type=type_hints["sink_instance_id"])
            check_type(argname="argument sink_region", value=sink_region, expected_type=type_hints["sink_region"])
            check_type(argname="argument sink_type", value=sink_type, expected_type=type_hints["sink_type"])
            check_type(argname="argument sparse_similarity_top_k", value=sparse_similarity_top_k, expected_type=type_hints["sparse_similarity_top_k"])
            check_type(argname="argument table", value=table, expected_type=type_hints["table"])
            check_type(argname="argument table_ids", value=table_ids, expected_type=type_hints["table_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "source_type": source_type,
            "structure_type": structure_type,
            "workspace_id": workspace_id,
        }
        if category_ids is not None:
            self._values["category_ids"] = category_ids
        if chunk_mode is not None:
            self._values["chunk_mode"] = chunk_mode
        if chunk_size is not None:
            self._values["chunk_size"] = chunk_size
        if connect_id is not None:
            self._values["connect_id"] = connect_id
        if database is not None:
            self._values["database"] = database
        if dense_similarity_top_k is not None:
            self._values["dense_similarity_top_k"] = dense_similarity_top_k
        if description is not None:
            self._values["description"] = description
        if document_ids is not None:
            self._values["document_ids"] = document_ids
        if embedding_model_name is not None:
            self._values["embedding_model_name"] = embedding_model_name
        if enable_headers is not None:
            self._values["enable_headers"] = enable_headers
        if enable_rewrite is not None:
            self._values["enable_rewrite"] = enable_rewrite
        if knowledge_scene is not None:
            self._values["knowledge_scene"] = knowledge_scene
        if knowledge_type is not None:
            self._values["knowledge_type"] = knowledge_type
        if meta_extract_columns is not None:
            self._values["meta_extract_columns"] = meta_extract_columns
        if overlap_size is not None:
            self._values["overlap_size"] = overlap_size
        if pipeline_commercial_cu is not None:
            self._values["pipeline_commercial_cu"] = pipeline_commercial_cu
        if pipeline_commercial_type is not None:
            self._values["pipeline_commercial_type"] = pipeline_commercial_type
        if pipeline_retrieve_rate_limit_strategy is not None:
            self._values["pipeline_retrieve_rate_limit_strategy"] = pipeline_retrieve_rate_limit_strategy
        if rerank_instruct is not None:
            self._values["rerank_instruct"] = rerank_instruct
        if rerank_min_score is not None:
            self._values["rerank_min_score"] = rerank_min_score
        if rerank_mode is not None:
            self._values["rerank_mode"] = rerank_mode
        if rerank_model_name is not None:
            self._values["rerank_model_name"] = rerank_model_name
        if separator is not None:
            self._values["separator"] = separator
        if sink_instance_id is not None:
            self._values["sink_instance_id"] = sink_instance_id
        if sink_region is not None:
            self._values["sink_region"] = sink_region
        if sink_type is not None:
            self._values["sink_type"] = sink_type
        if sparse_similarity_top_k is not None:
            self._values["sparse_similarity_top_k"] = sparse_similarity_top_k
        if table is not None:
            self._values["table"] = table
        if table_ids is not None:
            self._values["table_ids"] = table_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Knowledge base name.

        1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: Data source type.

        DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def structure_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property structureType: Knowledge base type.

        unstructured: document search or audio/video knowledge base. structured: data query or image Q&A knowledge base.
        '''
        result = self._values.get("structure_type")
        assert result is not None, "Required property 'structure_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property workspaceId: Workspace ID.

        The knowledge base will be created in this workspace.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def category_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property categoryIds: Category IDs to import when creating the knowledge base.

        Required when SourceType is DATA_CENTER_CATEGORY.
        '''
        result = self._values.get("category_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def chunk_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chunkMode: Chunk strategy.

        If not specified, smart chunking is used. When set to regex, Separator must also be provided.
        '''
        result = self._values.get("chunk_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def chunk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chunkSize: Chunk size, the maximum number of characters per text slice.

        Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
        '''
        result = self._values.get("chunk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connect_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectId: Connection ID.

        Replaces the deprecated datasourceCode parameter.
        '''
        result = self._values.get("connect_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def database(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property database: Database name for structured knowledge base.'''
        result = self._values.get("database")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dense_similarity_top_k(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property denseSimilarityTopK: Vector retrieval Top K.

        Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        '''
        result = self._values.get("dense_similarity_top_k")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Knowledge base description.

        0-1000 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def document_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property documentIds: Document IDs to import when creating the knowledge base.

        Required when SourceType is DATA_CENTER_FILE.
        '''
        result = self._values.get("document_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def embedding_model_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property embeddingModelName: Embedding model used by the knowledge base.

        Defaults to text-embedding-v3.
        '''
        result = self._values.get("embedding_model_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_headers(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableHeaders: Whether to enable headers for document parsing.

        Defaults to false.
        '''
        result = self._values.get("enable_headers")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_rewrite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableRewrite: Whether to enable multi-turn dialogue rewriting.

        Defaults to true.
        '''
        result = self._values.get("enable_rewrite")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def knowledge_scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property knowledgeScene: Knowledge base scene.

        Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
        '''
        result = self._values.get("knowledge_scene")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def knowledge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property knowledgeType: Knowledge base type classification.

        Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
        '''
        result = self._values.get("knowledge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def meta_extract_columns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.MetaExtractColumnsProperty"]]]]:
        '''Property metaExtractColumns: Metadata extraction configuration.'''
        result = self._values.get("meta_extract_columns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.MetaExtractColumnsProperty"]]]], result)

    @builtins.property
    def overlap_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices.

        Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
        '''
        result = self._values.get("overlap_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pipeline_commercial_cu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pipelineCommercialCu: RCU count for enterprise edition.

        Only required when PipelineCommercialType is enterprise. Range [1-200].
        '''
        result = self._values.get("pipeline_commercial_cu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pipeline_commercial_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pipelineCommercialType: Knowledge base specification type.

        standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
        '''
        result = self._values.get("pipeline_commercial_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pipeline_retrieve_rate_limit_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition.

        Defaults to downgrade.
        '''
        result = self._values.get("pipeline_retrieve_rate_limit_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_instruct(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rerankInstruct: Custom rerank instruction.

        Required when RerankMode is custom.
        '''
        result = self._values.get("rerank_instruct")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_min_score(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rerankMinScore: Similarity threshold.

        Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
        '''
        result = self._values.get("rerank_min_score")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rerankMode: Rerank mode.

        qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
        '''
        result = self._values.get("rerank_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_model_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rerankModelName: Rerank model used by the knowledge base.

        Defaults to qwen3-rerank when not specified.
        '''
        result = self._values.get("rerank_model_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def separator(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property separator: Separator for chunking.

        Only effective when ChunkMode is regex.
        '''
        result = self._values.get("separator")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sink_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sinkInstanceId: Vector storage instance ID.

        Required when SinkType is ADB.
        '''
        result = self._values.get("sink_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sink_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sinkRegion: Region of the vector storage instance.

        Required when SinkType is ADB.
        '''
        result = self._values.get("sink_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sink_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sinkType: Vector storage type.

        BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
        '''
        result = self._values.get("sink_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sparse_similarity_top_k(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sparseSimilarityTopK: Keyword retrieval Top K.

        Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        '''
        result = self._values.get("sparse_similarity_top_k")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property table: Table name for structured knowledge base.'''
        result = self._values.get("table")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property tableIds: Table IDs to import when creating the knowledge base.'''
        result = self._values.get("table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApiKey(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bailian.RosApiKey",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Bailian::ApiKey``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApiKey`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApiKeyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f776af73812232acdee01b26d4ed5c1614c08c889e49b8640317c00889ed07e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94d0d4821c37dcbdcdee954e740335ed6718bd861de1042c076daff7ad70977f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiKeyId: The id of the API key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Key: The value of the API key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb2ad9d2a51f0db703779665af93a10d6d1b4651041157c3fea2dae75d9c6a8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="authSetModel")
    def auth_set_model(
        self,
    ) -> typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authSetModel: The model of the authentication.
        '''
        return typing.cast(typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authSetModel"))

    @auth_set_model.setter
    def auth_set_model(
        self,
        value: typing.Optional[typing.Union["RosApiKey.AuthSetModelProperty", _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fc52caec3bb8f728d6d438626d14736751d946ad5634a2e1561fbcb0c68ca57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authSetModel", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the API key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b4baa6fac1f58930ded6830a1f945cf52dfd7c8737bdb98ab1467006d3acbb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty",
        jsii_struct_bases=[],
        name_mapping={"access_ips": "accessIps", "auth_set_mode": "authSetMode"},
    )
    class AuthSetModelProperty:
        def __init__(
            self,
            *,
            access_ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            auth_set_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param access_ips: 
            :param auth_set_mode: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d4b3d59bb11f3946ecb463283123e0346e01158d4683fe023f82ce6ddad6c5a5)
                check_type(argname="argument access_ips", value=access_ips, expected_type=type_hints["access_ips"])
                check_type(argname="argument auth_set_mode", value=auth_set_mode, expected_type=type_hints["auth_set_mode"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if access_ips is not None:
                self._values["access_ips"] = access_ips
            if auth_set_mode is not None:
                self._values["auth_set_mode"] = auth_set_mode

        @builtins.property
        def access_ips(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: accessIps: The IP addresses of the access.
            '''
            result = self._values.get("access_ips")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def auth_set_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: authSetMode: The mode of the authentication.
            '''
            result = self._values.get("auth_set_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuthSetModelProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bailian.RosApiKeyProps",
    jsii_struct_bases=[],
    name_mapping={"auth_set_model": "authSetModel", "description": "description"},
)
class RosApiKeyProps:
    def __init__(
        self,
        *,
        auth_set_model: typing.Optional[typing.Union[typing.Union[RosApiKey.AuthSetModelProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApiKey``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey

        :param auth_set_model: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f4d0ae0449899b61407ce02d4a1f4a2507999dc4efbc7913da251c1961b0a3f)
            check_type(argname="argument auth_set_model", value=auth_set_model, expected_type=type_hints["auth_set_model"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auth_set_model is not None:
            self._values["auth_set_model"] = auth_set_model
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def auth_set_model(
        self,
    ) -> typing.Optional[typing.Union[RosApiKey.AuthSetModelProperty, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: authSetModel: The model of the authentication.
        '''
        result = self._values.get("auth_set_model")
        return typing.cast(typing.Optional[typing.Union[RosApiKey.AuthSetModelProperty, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the API key.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApiKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIndex(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bailian.RosIndex",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Bailian::Index``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Index`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__995099bc1b736d40d14fea131c591f17d59525c28b963173fd4f00807232f8b6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e810919891b5c2900f0eaff186a60c2de4a0dedaa006b6db9838018ae3108a5a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: The unique ID of the knowledge base index.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd30066f46bbaa6b1e3c74d6480156e7b369d96357813490c57e3325a779c700)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4384860a8fe007d1a7c0a974d1f36ff9706e3424c34848d26618b2a2277def47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d60ed406c00e1ebd6d897725c9e6bebeedd65b132909fdbb88c6109054ffc4c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="structureType")
    def structure_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: structureType: Knowledge base type. unstructured: document search or audio/video knowledge base. structured: data query or image Q&A knowledge base.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "structureType"))

    @structure_type.setter
    def structure_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f25ec7d4a281af2885749f34f62afb23078f3d0020add11a9955478b58f313c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "structureType", value)

    @builtins.property
    @jsii.member(jsii_name="workspaceId")
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Workspace ID. The knowledge base will be created in this workspace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "workspaceId"))

    @workspace_id.setter
    def workspace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fb8fb1b51cd4d8bdfdb1934e68476e4379018d0b236acf52d3ee04b8c634637)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="categoryIds")
    def category_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "categoryIds"))

    @category_ids.setter
    def category_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b156ac648190c504e2aedd1403c237dac689631803f4f92f5adfe05c5a9ffc0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "categoryIds", value)

    @builtins.property
    @jsii.member(jsii_name="chunkMode")
    def chunk_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chunkMode"))

    @chunk_mode.setter
    def chunk_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e508d40db889bda5fd7ee7b60cd8e417278c766046df53d4381c44f586f2e94e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chunkMode", value)

    @builtins.property
    @jsii.member(jsii_name="chunkSize")
    def chunk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chunkSize"))

    @chunk_size.setter
    def chunk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11050fd48405bc11c2b76f20162e83d038aa128249f456dc8f045ac8dcadebd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chunkSize", value)

    @builtins.property
    @jsii.member(jsii_name="connectId")
    def connect_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectId"))

    @connect_id.setter
    def connect_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15b459668714673b215c41c4cf9fddc24fe75e4f35c39f220d1aa973fa2ab493)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectId", value)

    @builtins.property
    @jsii.member(jsii_name="database")
    def database(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: database: Database name for structured knowledge base.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "database"))

    @database.setter
    def database(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6de180a5c9f2e4d7e595d537a08dc8cafcbe78364f0cdd07f7936ce8e9cdc24d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "database", value)

    @builtins.property
    @jsii.member(jsii_name="denseSimilarityTopK")
    def dense_similarity_top_k(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "denseSimilarityTopK"))

    @dense_similarity_top_k.setter
    def dense_similarity_top_k(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f590785b881d324d8e4b5605bd6a057c598d60a4207ac39ae21bc68654296271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "denseSimilarityTopK", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Knowledge base description. 0-1000 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0b8ec5b53eb7d46e007d74e83c9b710368091c2e0c83be33c39f537614e1e6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="documentIds")
    def document_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "documentIds"))

    @document_ids.setter
    def document_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af78282d9b8d2fb796a6b30348624438c69873e621731731287a7b9d9af79a3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "documentIds", value)

    @builtins.property
    @jsii.member(jsii_name="embeddingModelName")
    def embedding_model_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "embeddingModelName"))

    @embedding_model_name.setter
    def embedding_model_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3d01e3b6d298ff55e5a827177a2ab386bec842a650f813052b490bf54aec960)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "embeddingModelName", value)

    @builtins.property
    @jsii.member(jsii_name="enableHeaders")
    def enable_headers(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableHeaders: Whether to enable headers for document parsing. Defaults to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableHeaders"))

    @enable_headers.setter
    def enable_headers(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a080489e431093a2fd485f6ddbc4c596d83dcfc1ac3a0e2dd963fc0b9f43005)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableHeaders", value)

    @builtins.property
    @jsii.member(jsii_name="enableRewrite")
    def enable_rewrite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableRewrite"))

    @enable_rewrite.setter
    def enable_rewrite(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__921791ac272098a76c698a385ef37c444d23cedc98aeeb05c7f43bcb088369c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableRewrite", value)

    @builtins.property
    @jsii.member(jsii_name="knowledgeScene")
    def knowledge_scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "knowledgeScene"))

    @knowledge_scene.setter
    def knowledge_scene(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfcbb81bcfdf35e1fae04ab550f536015cd92184a6c8ba66d3c786742d384add)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "knowledgeScene", value)

    @builtins.property
    @jsii.member(jsii_name="knowledgeType")
    def knowledge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "knowledgeType"))

    @knowledge_type.setter
    def knowledge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eacd73ad00738d87ba09f17d38ffd9449935830fc38d5e8a4bb33dfa7ef378e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "knowledgeType", value)

    @builtins.property
    @jsii.member(jsii_name="metaExtractColumns")
    def meta_extract_columns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.MetaExtractColumnsProperty"]]]]:
        '''
        :Property: metaExtractColumns: Metadata extraction configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.MetaExtractColumnsProperty"]]]], jsii.get(self, "metaExtractColumns"))

    @meta_extract_columns.setter
    def meta_extract_columns(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.MetaExtractColumnsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a78716255b4248f3090c47096def9508b8ba72ac6cb850ccaf56d9159da9bc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metaExtractColumns", value)

    @builtins.property
    @jsii.member(jsii_name="overlapSize")
    def overlap_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "overlapSize"))

    @overlap_size.setter
    def overlap_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0327c16fdeaf95047c236f3e1536d3d8262cc8171bf38d5353dbf2d9d60921e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "overlapSize", value)

    @builtins.property
    @jsii.member(jsii_name="pipelineCommercialCu")
    def pipeline_commercial_cu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pipelineCommercialCu"))

    @pipeline_commercial_cu.setter
    def pipeline_commercial_cu(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44ca25adf569d2c5ea12f3a9438fb32ea69c298eeac99f536798fc972a9eb496)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pipelineCommercialCu", value)

    @builtins.property
    @jsii.member(jsii_name="pipelineCommercialType")
    def pipeline_commercial_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pipelineCommercialType"))

    @pipeline_commercial_type.setter
    def pipeline_commercial_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e971e7c6b4dd2d7a5cbbecd9cd268079b851e251f879cb1cc40ba7a5964a9f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pipelineCommercialType", value)

    @builtins.property
    @jsii.member(jsii_name="pipelineRetrieveRateLimitStrategy")
    def pipeline_retrieve_rate_limit_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pipelineRetrieveRateLimitStrategy"))

    @pipeline_retrieve_rate_limit_strategy.setter
    def pipeline_retrieve_rate_limit_strategy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52c7f7594c3a188fb0af8b05ec1f0dba1e75eb151ef3ad1905b77088ae0baa96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pipelineRetrieveRateLimitStrategy", value)

    @builtins.property
    @jsii.member(jsii_name="rerankInstruct")
    def rerank_instruct(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rerankInstruct"))

    @rerank_instruct.setter
    def rerank_instruct(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__930ff4b6ee805e21be535cfe6aa5e8bdfc834144513fce31dfc8cc3be7a9fac2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rerankInstruct", value)

    @builtins.property
    @jsii.member(jsii_name="rerankMinScore")
    def rerank_min_score(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rerankMinScore"))

    @rerank_min_score.setter
    def rerank_min_score(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd45cc541f170cc477723cae65d1c9932fc8a8460c59341a15cec39077917cc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rerankMinScore", value)

    @builtins.property
    @jsii.member(jsii_name="rerankMode")
    def rerank_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rerankMode"))

    @rerank_mode.setter
    def rerank_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6a06e285d693e8f2d8cd47d2664e6d3018c2ba62041b0b44c1c513980c4f7a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rerankMode", value)

    @builtins.property
    @jsii.member(jsii_name="rerankModelName")
    def rerank_model_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rerankModelName"))

    @rerank_model_name.setter
    def rerank_model_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e849a829d2dcde3dc64bd5757e70c79b7b18953d67c13992fcb961f97c26531)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rerankModelName", value)

    @builtins.property
    @jsii.member(jsii_name="separator")
    def separator(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: separator: Separator for chunking. Only effective when ChunkMode is regex.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "separator"))

    @separator.setter
    def separator(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__039cf0f4b9c80a88a59f5db8d70fc85e7237404eb4fb0f8c572f4957fc2481c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "separator", value)

    @builtins.property
    @jsii.member(jsii_name="sinkInstanceId")
    def sink_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sinkInstanceId"))

    @sink_instance_id.setter
    def sink_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f3f93777fb433fa1bfb21115a11d5e20002c45f66a52e5803a24f94da296469)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sinkInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="sinkRegion")
    def sink_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sinkRegion"))

    @sink_region.setter
    def sink_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fe72bfaff7c9e23a5847fdd3af51152bd2fbe18ff8694bc10559f68c52cd7d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sinkRegion", value)

    @builtins.property
    @jsii.member(jsii_name="sinkType")
    def sink_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sinkType"))

    @sink_type.setter
    def sink_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__622fd9d33123615c612dc92e0e3bc4c486e931217c80fa227438c906dd4747cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sinkType", value)

    @builtins.property
    @jsii.member(jsii_name="sparseSimilarityTopK")
    def sparse_similarity_top_k(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sparseSimilarityTopK"))

    @sparse_similarity_top_k.setter
    def sparse_similarity_top_k(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd4e5ab9f1318b350c34457c9f8fb667b652ad44d5ede6aa2a292903a0b36042)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sparseSimilarityTopK", value)

    @builtins.property
    @jsii.member(jsii_name="table")
    def table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: table: Table name for structured knowledge base.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "table"))

    @table.setter
    def table(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__490e3a84c7354ab86868ac931a34e27c61514941324640a9e9e8c577958cfcb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "table", value)

    @builtins.property
    @jsii.member(jsii_name="tableIds")
    def table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: tableIds: Table IDs to import when creating the knowledge base.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "tableIds"))

    @table_ids.setter
    def table_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b09977c7621f18c38dd8db50b9a495f76780ac7e045da9f44b3f350b072ecce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tableIds", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-bailian.RosIndex.MetaExtractColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "key": "key",
            "type": "type",
            "desc": "desc",
            "enable_llm": "enableLlm",
            "enable_search": "enableSearch",
            "value": "value",
        },
    )
    class MetaExtractColumnsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_llm: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_search: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param type: 
            :param desc: 
            :param enable_llm: 
            :param enable_search: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1c4c668a659cdf1be9771606b5231d5aa905cd08e284a7d0651c92f63f3a871f)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
                check_type(argname="argument enable_llm", value=enable_llm, expected_type=type_hints["enable_llm"])
                check_type(argname="argument enable_search", value=enable_search, expected_type=type_hints["enable_search"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "type": type,
            }
            if desc is not None:
                self._values["desc"] = desc
            if enable_llm is not None:
                self._values["enable_llm"] = enable_llm
            if enable_search is not None:
                self._values["enable_search"] = enable_search
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: Metadata field name. 1-50 characters, must be English or underscore.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Metadata field extraction method.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def desc(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: desc: Metadata field description. 0-1000 characters.
            '''
            result = self._values.get("desc")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_llm(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableLlm: Whether this metadata field participates in model reply generation.
            '''
            result = self._values.get("enable_llm")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_search(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableSearch: Whether this metadata field participates in knowledge base retrieval.
            '''
            result = self._values.get("enable_search")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Metadata field value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MetaExtractColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bailian.RosIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "source_type": "sourceType",
        "structure_type": "structureType",
        "workspace_id": "workspaceId",
        "category_ids": "categoryIds",
        "chunk_mode": "chunkMode",
        "chunk_size": "chunkSize",
        "connect_id": "connectId",
        "database": "database",
        "dense_similarity_top_k": "denseSimilarityTopK",
        "description": "description",
        "document_ids": "documentIds",
        "embedding_model_name": "embeddingModelName",
        "enable_headers": "enableHeaders",
        "enable_rewrite": "enableRewrite",
        "knowledge_scene": "knowledgeScene",
        "knowledge_type": "knowledgeType",
        "meta_extract_columns": "metaExtractColumns",
        "overlap_size": "overlapSize",
        "pipeline_commercial_cu": "pipelineCommercialCu",
        "pipeline_commercial_type": "pipelineCommercialType",
        "pipeline_retrieve_rate_limit_strategy": "pipelineRetrieveRateLimitStrategy",
        "rerank_instruct": "rerankInstruct",
        "rerank_min_score": "rerankMinScore",
        "rerank_mode": "rerankMode",
        "rerank_model_name": "rerankModelName",
        "separator": "separator",
        "sink_instance_id": "sinkInstanceId",
        "sink_region": "sinkRegion",
        "sink_type": "sinkType",
        "sparse_similarity_top_k": "sparseSimilarityTopK",
        "table": "table",
        "table_ids": "tableIds",
    },
)
class RosIndexProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        structure_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        category_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        chunk_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        chunk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connect_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        database: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dense_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        document_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        embedding_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_headers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_rewrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        knowledge_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        knowledge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        meta_extract_columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.MetaExtractColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        overlap_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pipeline_commercial_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pipeline_commercial_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pipeline_retrieve_rate_limit_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_instruct: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_min_score: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rerank_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        separator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sink_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sink_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sink_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sparse_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosIndex``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index

        :param name: 
        :param source_type: 
        :param structure_type: 
        :param workspace_id: 
        :param category_ids: 
        :param chunk_mode: 
        :param chunk_size: 
        :param connect_id: 
        :param database: 
        :param dense_similarity_top_k: 
        :param description: 
        :param document_ids: 
        :param embedding_model_name: 
        :param enable_headers: 
        :param enable_rewrite: 
        :param knowledge_scene: 
        :param knowledge_type: 
        :param meta_extract_columns: 
        :param overlap_size: 
        :param pipeline_commercial_cu: 
        :param pipeline_commercial_type: 
        :param pipeline_retrieve_rate_limit_strategy: 
        :param rerank_instruct: 
        :param rerank_min_score: 
        :param rerank_mode: 
        :param rerank_model_name: 
        :param separator: 
        :param sink_instance_id: 
        :param sink_region: 
        :param sink_type: 
        :param sparse_similarity_top_k: 
        :param table: 
        :param table_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b01e2700dfcbd82a349146ebe86075e4ecbcf71f5c5b3c44824bddf249055602)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument structure_type", value=structure_type, expected_type=type_hints["structure_type"])
            check_type(argname="argument workspace_id", value=workspace_id, expected_type=type_hints["workspace_id"])
            check_type(argname="argument category_ids", value=category_ids, expected_type=type_hints["category_ids"])
            check_type(argname="argument chunk_mode", value=chunk_mode, expected_type=type_hints["chunk_mode"])
            check_type(argname="argument chunk_size", value=chunk_size, expected_type=type_hints["chunk_size"])
            check_type(argname="argument connect_id", value=connect_id, expected_type=type_hints["connect_id"])
            check_type(argname="argument database", value=database, expected_type=type_hints["database"])
            check_type(argname="argument dense_similarity_top_k", value=dense_similarity_top_k, expected_type=type_hints["dense_similarity_top_k"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument document_ids", value=document_ids, expected_type=type_hints["document_ids"])
            check_type(argname="argument embedding_model_name", value=embedding_model_name, expected_type=type_hints["embedding_model_name"])
            check_type(argname="argument enable_headers", value=enable_headers, expected_type=type_hints["enable_headers"])
            check_type(argname="argument enable_rewrite", value=enable_rewrite, expected_type=type_hints["enable_rewrite"])
            check_type(argname="argument knowledge_scene", value=knowledge_scene, expected_type=type_hints["knowledge_scene"])
            check_type(argname="argument knowledge_type", value=knowledge_type, expected_type=type_hints["knowledge_type"])
            check_type(argname="argument meta_extract_columns", value=meta_extract_columns, expected_type=type_hints["meta_extract_columns"])
            check_type(argname="argument overlap_size", value=overlap_size, expected_type=type_hints["overlap_size"])
            check_type(argname="argument pipeline_commercial_cu", value=pipeline_commercial_cu, expected_type=type_hints["pipeline_commercial_cu"])
            check_type(argname="argument pipeline_commercial_type", value=pipeline_commercial_type, expected_type=type_hints["pipeline_commercial_type"])
            check_type(argname="argument pipeline_retrieve_rate_limit_strategy", value=pipeline_retrieve_rate_limit_strategy, expected_type=type_hints["pipeline_retrieve_rate_limit_strategy"])
            check_type(argname="argument rerank_instruct", value=rerank_instruct, expected_type=type_hints["rerank_instruct"])
            check_type(argname="argument rerank_min_score", value=rerank_min_score, expected_type=type_hints["rerank_min_score"])
            check_type(argname="argument rerank_mode", value=rerank_mode, expected_type=type_hints["rerank_mode"])
            check_type(argname="argument rerank_model_name", value=rerank_model_name, expected_type=type_hints["rerank_model_name"])
            check_type(argname="argument separator", value=separator, expected_type=type_hints["separator"])
            check_type(argname="argument sink_instance_id", value=sink_instance_id, expected_type=type_hints["sink_instance_id"])
            check_type(argname="argument sink_region", value=sink_region, expected_type=type_hints["sink_region"])
            check_type(argname="argument sink_type", value=sink_type, expected_type=type_hints["sink_type"])
            check_type(argname="argument sparse_similarity_top_k", value=sparse_similarity_top_k, expected_type=type_hints["sparse_similarity_top_k"])
            check_type(argname="argument table", value=table, expected_type=type_hints["table"])
            check_type(argname="argument table_ids", value=table_ids, expected_type=type_hints["table_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "source_type": source_type,
            "structure_type": structure_type,
            "workspace_id": workspace_id,
        }
        if category_ids is not None:
            self._values["category_ids"] = category_ids
        if chunk_mode is not None:
            self._values["chunk_mode"] = chunk_mode
        if chunk_size is not None:
            self._values["chunk_size"] = chunk_size
        if connect_id is not None:
            self._values["connect_id"] = connect_id
        if database is not None:
            self._values["database"] = database
        if dense_similarity_top_k is not None:
            self._values["dense_similarity_top_k"] = dense_similarity_top_k
        if description is not None:
            self._values["description"] = description
        if document_ids is not None:
            self._values["document_ids"] = document_ids
        if embedding_model_name is not None:
            self._values["embedding_model_name"] = embedding_model_name
        if enable_headers is not None:
            self._values["enable_headers"] = enable_headers
        if enable_rewrite is not None:
            self._values["enable_rewrite"] = enable_rewrite
        if knowledge_scene is not None:
            self._values["knowledge_scene"] = knowledge_scene
        if knowledge_type is not None:
            self._values["knowledge_type"] = knowledge_type
        if meta_extract_columns is not None:
            self._values["meta_extract_columns"] = meta_extract_columns
        if overlap_size is not None:
            self._values["overlap_size"] = overlap_size
        if pipeline_commercial_cu is not None:
            self._values["pipeline_commercial_cu"] = pipeline_commercial_cu
        if pipeline_commercial_type is not None:
            self._values["pipeline_commercial_type"] = pipeline_commercial_type
        if pipeline_retrieve_rate_limit_strategy is not None:
            self._values["pipeline_retrieve_rate_limit_strategy"] = pipeline_retrieve_rate_limit_strategy
        if rerank_instruct is not None:
            self._values["rerank_instruct"] = rerank_instruct
        if rerank_min_score is not None:
            self._values["rerank_min_score"] = rerank_min_score
        if rerank_mode is not None:
            self._values["rerank_mode"] = rerank_mode
        if rerank_model_name is not None:
            self._values["rerank_model_name"] = rerank_model_name
        if separator is not None:
            self._values["separator"] = separator
        if sink_instance_id is not None:
            self._values["sink_instance_id"] = sink_instance_id
        if sink_region is not None:
            self._values["sink_region"] = sink_region
        if sink_type is not None:
            self._values["sink_type"] = sink_type
        if sparse_similarity_top_k is not None:
            self._values["sparse_similarity_top_k"] = sparse_similarity_top_k
        if table is not None:
            self._values["table"] = table
        if table_ids is not None:
            self._values["table_ids"] = table_ids

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def structure_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: structureType: Knowledge base type. unstructured: document search or audio/video knowledge base. structured: data query or image Q&A knowledge base.
        '''
        result = self._values.get("structure_type")
        assert result is not None, "Required property 'structure_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def workspace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: workspaceId: Workspace ID. The knowledge base will be created in this workspace.
        '''
        result = self._values.get("workspace_id")
        assert result is not None, "Required property 'workspace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def category_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
        '''
        result = self._values.get("category_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def chunk_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
        '''
        result = self._values.get("chunk_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def chunk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
        '''
        result = self._values.get("chunk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connect_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
        '''
        result = self._values.get("connect_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def database(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: database: Database name for structured knowledge base.
        '''
        result = self._values.get("database")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dense_similarity_top_k(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        '''
        result = self._values.get("dense_similarity_top_k")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Knowledge base description. 0-1000 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def document_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
        '''
        result = self._values.get("document_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def embedding_model_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
        '''
        result = self._values.get("embedding_model_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_headers(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableHeaders: Whether to enable headers for document parsing. Defaults to false.
        '''
        result = self._values.get("enable_headers")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_rewrite(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
        '''
        result = self._values.get("enable_rewrite")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def knowledge_scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
        '''
        result = self._values.get("knowledge_scene")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def knowledge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
        '''
        result = self._values.get("knowledge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def meta_extract_columns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.MetaExtractColumnsProperty]]]]:
        '''
        :Property: metaExtractColumns: Metadata extraction configuration.
        '''
        result = self._values.get("meta_extract_columns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.MetaExtractColumnsProperty]]]], result)

    @builtins.property
    def overlap_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
        '''
        result = self._values.get("overlap_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pipeline_commercial_cu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
        '''
        result = self._values.get("pipeline_commercial_cu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pipeline_commercial_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
        '''
        result = self._values.get("pipeline_commercial_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pipeline_retrieve_rate_limit_strategy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
        '''
        result = self._values.get("pipeline_retrieve_rate_limit_strategy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_instruct(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
        '''
        result = self._values.get("rerank_instruct")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_min_score(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
        '''
        result = self._values.get("rerank_min_score")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
        '''
        result = self._values.get("rerank_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rerank_model_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
        '''
        result = self._values.get("rerank_model_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def separator(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: separator: Separator for chunking. Only effective when ChunkMode is regex.
        '''
        result = self._values.get("separator")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sink_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
        '''
        result = self._values.get("sink_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sink_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
        '''
        result = self._values.get("sink_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sink_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
        '''
        result = self._values.get("sink_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sparse_similarity_top_k(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        '''
        result = self._values.get("sparse_similarity_top_k")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def table(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: table: Table name for structured knowledge base.
        '''
        result = self._values.get("table")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def table_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: tableIds: Table IDs to import when creating the knowledge base.
        '''
        result = self._values.get("table_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApiKey)
class ApiKey(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bailian.ApiKey",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Bailian::ApiKey``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApiKey``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ApiKeyProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66f9a1f3375f5eb5b9f076926f3ca5cdd3adf88b4cb80360e7b30a88d08cdb8e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiKeyId")
    def attr_api_key_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiKeyId: The id of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrKey")
    def attr_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Key: The value of the API key.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKey"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiKeyProps:
        return typing.cast(ApiKeyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f373180ccde053a1ef963be2e28867c99b1f041be2547a613534c5ef4bcf6c60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2319535f7cc106305ef38db2bb409784d84fa0ea4fb07eecf3e776255f7af9dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__555231446c6725bbd59237d32395887aa8fe17729e9606e44a503266fbe26625)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ApiKey",
    "ApiKeyProps",
    "IApiKey",
    "IIndex",
    "Index",
    "IndexProps",
    "RosApiKey",
    "RosApiKeyProps",
    "RosIndex",
    "RosIndexProps",
]

publication.publish()

def _typecheckingstub__fc5fd2b81dfb52f3c30a9e4196c15f66079ee0ff16c554518c65ab27471cb71f(
    *,
    auth_set_model: typing.Optional[typing.Union[typing.Union[RosApiKey.AuthSetModelProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4f066ac021c9a0ce5f368fd17c109116e0c0c02a1c815ffed1d4437f8747bd7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IndexProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a825fb947e19d4d79c9c358b3493f68675990d8543141ccb29ebbfcab0667c9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bfe65e566192b88f76462b642794e5e0ea99da4661cf1fd46d4cac5d7f02773(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34f2ed2f8c060eb2099bcf05d91dd4cff7a2945755293978075cd89472115545(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fe3ad886b8503414263afa12d71748305a3e9e95fd440ead8a4dcafe0339be6(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    structure_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    category_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    chunk_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    chunk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connect_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    database: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dense_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    document_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    embedding_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_headers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_rewrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    knowledge_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    knowledge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    meta_extract_columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.MetaExtractColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    overlap_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pipeline_commercial_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pipeline_commercial_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pipeline_retrieve_rate_limit_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_instruct: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_min_score: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    separator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sink_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sink_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sink_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sparse_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f776af73812232acdee01b26d4ed5c1614c08c889e49b8640317c00889ed07e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApiKeyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94d0d4821c37dcbdcdee954e740335ed6718bd861de1042c076daff7ad70977f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb2ad9d2a51f0db703779665af93a10d6d1b4651041157c3fea2dae75d9c6a8c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fc52caec3bb8f728d6d438626d14736751d946ad5634a2e1561fbcb0c68ca57(
    value: typing.Optional[typing.Union[RosApiKey.AuthSetModelProperty, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b4baa6fac1f58930ded6830a1f945cf52dfd7c8737bdb98ab1467006d3acbb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4b3d59bb11f3946ecb463283123e0346e01158d4683fe023f82ce6ddad6c5a5(
    *,
    access_ips: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    auth_set_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f4d0ae0449899b61407ce02d4a1f4a2507999dc4efbc7913da251c1961b0a3f(
    *,
    auth_set_model: typing.Optional[typing.Union[typing.Union[RosApiKey.AuthSetModelProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__995099bc1b736d40d14fea131c591f17d59525c28b963173fd4f00807232f8b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIndexProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e810919891b5c2900f0eaff186a60c2de4a0dedaa006b6db9838018ae3108a5a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd30066f46bbaa6b1e3c74d6480156e7b369d96357813490c57e3325a779c700(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4384860a8fe007d1a7c0a974d1f36ff9706e3424c34848d26618b2a2277def47(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d60ed406c00e1ebd6d897725c9e6bebeedd65b132909fdbb88c6109054ffc4c0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f25ec7d4a281af2885749f34f62afb23078f3d0020add11a9955478b58f313c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fb8fb1b51cd4d8bdfdb1934e68476e4379018d0b236acf52d3ee04b8c634637(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b156ac648190c504e2aedd1403c237dac689631803f4f92f5adfe05c5a9ffc0f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e508d40db889bda5fd7ee7b60cd8e417278c766046df53d4381c44f586f2e94e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11050fd48405bc11c2b76f20162e83d038aa128249f456dc8f045ac8dcadebd5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15b459668714673b215c41c4cf9fddc24fe75e4f35c39f220d1aa973fa2ab493(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6de180a5c9f2e4d7e595d537a08dc8cafcbe78364f0cdd07f7936ce8e9cdc24d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f590785b881d324d8e4b5605bd6a057c598d60a4207ac39ae21bc68654296271(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0b8ec5b53eb7d46e007d74e83c9b710368091c2e0c83be33c39f537614e1e6d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af78282d9b8d2fb796a6b30348624438c69873e621731731287a7b9d9af79a3a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3d01e3b6d298ff55e5a827177a2ab386bec842a650f813052b490bf54aec960(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a080489e431093a2fd485f6ddbc4c596d83dcfc1ac3a0e2dd963fc0b9f43005(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__921791ac272098a76c698a385ef37c444d23cedc98aeeb05c7f43bcb088369c9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfcbb81bcfdf35e1fae04ab550f536015cd92184a6c8ba66d3c786742d384add(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eacd73ad00738d87ba09f17d38ffd9449935830fc38d5e8a4bb33dfa7ef378e3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a78716255b4248f3090c47096def9508b8ba72ac6cb850ccaf56d9159da9bc0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.MetaExtractColumnsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0327c16fdeaf95047c236f3e1536d3d8262cc8171bf38d5353dbf2d9d60921e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44ca25adf569d2c5ea12f3a9438fb32ea69c298eeac99f536798fc972a9eb496(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e971e7c6b4dd2d7a5cbbecd9cd268079b851e251f879cb1cc40ba7a5964a9f5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52c7f7594c3a188fb0af8b05ec1f0dba1e75eb151ef3ad1905b77088ae0baa96(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__930ff4b6ee805e21be535cfe6aa5e8bdfc834144513fce31dfc8cc3be7a9fac2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd45cc541f170cc477723cae65d1c9932fc8a8460c59341a15cec39077917cc8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6a06e285d693e8f2d8cd47d2664e6d3018c2ba62041b0b44c1c513980c4f7a1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e849a829d2dcde3dc64bd5757e70c79b7b18953d67c13992fcb961f97c26531(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__039cf0f4b9c80a88a59f5db8d70fc85e7237404eb4fb0f8c572f4957fc2481c6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f3f93777fb433fa1bfb21115a11d5e20002c45f66a52e5803a24f94da296469(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fe72bfaff7c9e23a5847fdd3af51152bd2fbe18ff8694bc10559f68c52cd7d4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__622fd9d33123615c612dc92e0e3bc4c486e931217c80fa227438c906dd4747cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd4e5ab9f1318b350c34457c9f8fb667b652ad44d5ede6aa2a292903a0b36042(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__490e3a84c7354ab86868ac931a34e27c61514941324640a9e9e8c577958cfcb1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b09977c7621f18c38dd8db50b9a495f76780ac7e045da9f44b3f350b072ecce(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c4c668a659cdf1be9771606b5231d5aa905cd08e284a7d0651c92f63f3a871f(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_llm: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_search: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b01e2700dfcbd82a349146ebe86075e4ecbcf71f5c5b3c44824bddf249055602(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    structure_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    workspace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    category_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    chunk_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    chunk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connect_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    database: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dense_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    document_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    embedding_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_headers: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_rewrite: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    knowledge_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    knowledge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    meta_extract_columns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.MetaExtractColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    overlap_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pipeline_commercial_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pipeline_commercial_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pipeline_retrieve_rate_limit_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_instruct: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_min_score: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rerank_model_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    separator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sink_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sink_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sink_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sparse_similarity_top_k: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    table_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66f9a1f3375f5eb5b9f076926f3ca5cdd3adf88b4cb80360e7b30a88d08cdb8e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApiKeyProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f373180ccde053a1ef963be2e28867c99b1f041be2547a613534c5ef4bcf6c60(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2319535f7cc106305ef38db2bb409784d84fa0ea4fb07eecf3e776255f7af9dd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__555231446c6725bbd59237d32395887aa8fe17729e9606e44a503266fbe26625(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bailian
{
    /// <summary>Properties for defining a `RosIndex`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-bailian.RosIndexProps")]
    public interface IRosIndexProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: structureType: Knowledge base type. unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
        /// </remarks>
        [JsiiProperty(name: "structureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StructureType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceId: Workspace ID. The knowledge base will be created in this workspace.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
        /// </remarks>
        [JsiiProperty(name: "categoryIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CategoryIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
        /// </remarks>
        [JsiiProperty(name: "chunkMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChunkMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
        /// </remarks>
        [JsiiProperty(name: "chunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChunkSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
        /// </remarks>
        [JsiiProperty(name: "connectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: database: Database name for structured knowledge base.
        /// </remarks>
        [JsiiProperty(name: "database", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Database
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        /// </remarks>
        [JsiiProperty(name: "denseSimilarityTopK", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DenseSimilarityTopK
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Knowledge base description. 0-1000 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
        /// </remarks>
        [JsiiProperty(name: "documentIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DocumentIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
        /// </remarks>
        [JsiiProperty(name: "embeddingModelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EmbeddingModelName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableHeaders: Whether to enable headers for document parsing. Defaults to false.
        /// </remarks>
        [JsiiProperty(name: "enableHeaders", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableHeaders
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
        /// </remarks>
        [JsiiProperty(name: "enableRewrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableRewrite
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
        /// </remarks>
        [JsiiProperty(name: "knowledgeScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KnowledgeScene
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
        /// </remarks>
        [JsiiProperty(name: "knowledgeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KnowledgeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: metaExtractColumns: Metadata extraction configuration.
        /// </remarks>
        [JsiiProperty(name: "metaExtractColumns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-bailian.RosIndex.MetaExtractColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MetaExtractColumns
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
        /// </remarks>
        [JsiiProperty(name: "overlapSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OverlapSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
        /// </remarks>
        [JsiiProperty(name: "pipelineCommercialCu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PipelineCommercialCu
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
        /// </remarks>
        [JsiiProperty(name: "pipelineCommercialType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PipelineCommercialType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
        /// </remarks>
        [JsiiProperty(name: "pipelineRetrieveRateLimitStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PipelineRetrieveRateLimitStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
        /// </remarks>
        [JsiiProperty(name: "rerankInstruct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RerankInstruct
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
        /// </remarks>
        [JsiiProperty(name: "rerankMinScore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RerankMinScore
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
        /// </remarks>
        [JsiiProperty(name: "rerankMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RerankMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
        /// </remarks>
        [JsiiProperty(name: "rerankModelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RerankModelName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: separator: Separator for chunking. Only effective when ChunkMode is regex.
        /// </remarks>
        [JsiiProperty(name: "separator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Separator
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
        /// </remarks>
        [JsiiProperty(name: "sinkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SinkInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
        /// </remarks>
        [JsiiProperty(name: "sinkRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SinkRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
        /// </remarks>
        [JsiiProperty(name: "sinkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SinkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
        /// </remarks>
        [JsiiProperty(name: "sparseSimilarityTopK", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SparseSimilarityTopK
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: table: Table name for structured knowledge base.
        /// </remarks>
        [JsiiProperty(name: "table", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Table
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tableIds: Table IDs to import when creating the knowledge base.
        /// </remarks>
        [JsiiProperty(name: "tableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TableIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosIndex`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosIndexProps), fullyQualifiedName: "@alicloud/ros-cdk-bailian.RosIndexProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bailian.IRosIndexProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
            /// </remarks>
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: structureType: Knowledge base type. unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
            /// </remarks>
            [JsiiProperty(name: "structureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StructureType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: Workspace ID. The knowledge base will be created in this workspace.
            /// </remarks>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "categoryIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CategoryIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chunkMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChunkMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChunkSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: database: Database name for structured knowledge base.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "database", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Database
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "denseSimilarityTopK", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DenseSimilarityTopK
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Knowledge base description. 0-1000 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "documentIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DocumentIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "embeddingModelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EmbeddingModelName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableHeaders: Whether to enable headers for document parsing. Defaults to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableHeaders", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableHeaders
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableRewrite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableRewrite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "knowledgeScene", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KnowledgeScene
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "knowledgeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KnowledgeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: metaExtractColumns: Metadata extraction configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metaExtractColumns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-bailian.RosIndex.MetaExtractColumnsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MetaExtractColumns
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "overlapSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OverlapSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pipelineCommercialCu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PipelineCommercialCu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pipelineCommercialType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PipelineCommercialType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pipelineRetrieveRateLimitStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PipelineRetrieveRateLimitStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rerankInstruct", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RerankInstruct
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rerankMinScore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RerankMinScore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rerankMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RerankMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rerankModelName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RerankModelName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: separator: Separator for chunking. Only effective when ChunkMode is regex.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "separator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Separator
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sinkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SinkInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sinkRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SinkRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sinkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SinkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sparseSimilarityTopK", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SparseSimilarityTopK
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: table: Table name for structured knowledge base.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "table", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Table
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tableIds: Table IDs to import when creating the knowledge base.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TableIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

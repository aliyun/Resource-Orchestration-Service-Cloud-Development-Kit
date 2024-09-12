using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `DBNodes`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBNodesProps")]
    public interface IDBNodesProps
    {
        /// <summary>Property amount: Number of nodes to be added to cluster.</summary>
        [JsiiProperty(name: "amount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Amount
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property dbNodeType: Node type.</summary>
        /// <remarks>
        /// Ranges: RO|STANDBY|DLNode
        /// </remarks>
        [JsiiProperty(name: "dbNodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbNodeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.</summary>
        [JsiiProperty(name: "endpointBindList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointBindList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.</summary>
        [JsiiProperty(name: "imciSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImciSwitch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).</summary>
        /// <remarks>
        /// The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        /// </remarks>
        [JsiiProperty(name: "plannedEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PlannedEndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).</summary>
        /// <remarks>
        /// The format is YYYY-MM-DDThh:mm:ssZ (UTC).
        /// </remarks>
        [JsiiProperty(name: "plannedStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PlannedStartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBNodes`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBNodesProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBNodesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBNodesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property amount: Number of nodes to be added to cluster.</summary>
            [JsiiProperty(name: "amount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Amount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeType: Node type.</summary>
            /// <remarks>
            /// Ranges: RO|STANDBY|DLNode
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endpointBindList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EndpointBindList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imciSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImciSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).</summary>
            /// <remarks>
            /// The format is YYYY-MM-DDThh:mm:ssZ (UTC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "plannedEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PlannedEndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).</summary>
            /// <remarks>
            /// The format is YYYY-MM-DDThh:mm:ssZ (UTC).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "plannedStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PlannedStartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

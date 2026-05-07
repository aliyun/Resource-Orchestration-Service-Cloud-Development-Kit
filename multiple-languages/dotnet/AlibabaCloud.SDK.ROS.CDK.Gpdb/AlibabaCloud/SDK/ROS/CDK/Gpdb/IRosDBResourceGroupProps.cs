using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `RosDBResourceGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosDBResourceGroupProps")]
    public interface IRosDBResourceGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The instance ID.> You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupConfig: Resource group configuration.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object ResourceGroupConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupName: Resource group name.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceGroupName
        {
            get;
        }

        /// <summary>Properties for defining a `RosDBResourceGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosDBResourceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosDBResourceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The instance ID.> You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupConfig: Resource group configuration.
            /// </remarks>
            [JsiiProperty(name: "resourceGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object ResourceGroupConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupName: Resource group name.
            /// </remarks>
            [JsiiProperty(name: "resourceGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceGroupName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

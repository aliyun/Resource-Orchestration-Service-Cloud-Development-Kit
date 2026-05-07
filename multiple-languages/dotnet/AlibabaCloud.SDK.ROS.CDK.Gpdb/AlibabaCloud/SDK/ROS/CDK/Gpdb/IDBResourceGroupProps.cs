using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `DBResourceGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DBResourceGroupProps")]
    public interface IDBResourceGroupProps
    {
        /// <summary>Property dbInstanceId: The instance ID.&gt; You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property resourceGroupConfig: Resource group configuration.</summary>
        [JsiiProperty(name: "resourceGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object ResourceGroupConfig
        {
            get;
        }

        /// <summary>Property resourceGroupName: Resource group name.</summary>
        [JsiiProperty(name: "resourceGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceGroupName
        {
            get;
        }

        /// <summary>Properties for defining a `DBResourceGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DBResourceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBResourceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The instance ID.&gt; You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceGroupConfig: Resource group configuration.</summary>
            [JsiiProperty(name: "resourceGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object ResourceGroupConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceGroupName: Resource group name.</summary>
            [JsiiProperty(name: "resourceGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceGroupName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

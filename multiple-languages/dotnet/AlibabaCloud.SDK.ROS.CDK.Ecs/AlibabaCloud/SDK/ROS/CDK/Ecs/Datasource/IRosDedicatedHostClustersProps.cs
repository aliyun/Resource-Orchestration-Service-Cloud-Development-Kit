using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosDedicatedHostClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDedicatedHostClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClustersProps")]
    public interface IRosDedicatedHostClustersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostClusterName: The name of the dedicated host cluster.
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostClusterName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
        /// If this parameter is specified to query resources,
        /// up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the dedicated host cluster.
        /// You can call the DescribeZones operation to query the most recent zone list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDedicatedHostClusters`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDedicatedHostClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosDedicatedHostClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedHostClusterName: The name of the dedicated host cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostClusterName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
            /// If this parameter is specified to query resources,
            /// up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone ID of the dedicated host cluster.
            /// You can call the DescribeZones operation to query the most recent zone list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

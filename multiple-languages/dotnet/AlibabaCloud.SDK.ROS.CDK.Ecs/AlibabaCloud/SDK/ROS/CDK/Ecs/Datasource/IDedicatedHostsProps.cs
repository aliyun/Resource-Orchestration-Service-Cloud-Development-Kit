using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DedicatedHosts`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDedicatedHostsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps")]
    public interface IDedicatedHostsProps
    {
        /// <summary>Property dedicatedHostClusterId: The ID of the dedicated host cluster.</summary>
        [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostIds: The IDs of the dedicated hosts.</summary>
        /// <remarks>
        /// You can specify up to 100 dedicated host IDs.
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostName: The name of the dedicated host.</summary>
        [JsiiProperty(name: "dedicatedHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostType: The type of the dedicated host.</summary>
        [JsiiProperty(name: "dedicatedHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The service status of the dedicated host.</summary>
        /// <remarks>
        /// Valid values:
        /// Available: The dedicated host is running normally.
        /// UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
        /// PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
        /// Default value: Available.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of ddh.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosDedicatedHosts.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosDedicatedHosts.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone ID of the dedicated host.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DedicatedHosts`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DedicatedHostsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dedicatedHostClusterId: The ID of the dedicated host cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostIds: The IDs of the dedicated hosts.</summary>
            /// <remarks>
            /// You can specify up to 100 dedicated host IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DedicatedHostIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostName: The name of the dedicated host.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostType: The type of the dedicated host.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The service status of the dedicated host.</summary>
            /// <remarks>
            /// Valid values:
            /// Available: The dedicated host is running normally.
            /// UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
            /// PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
            /// Default value: Available.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of ddh.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosDedicatedHosts.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosDedicatedHosts.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosDedicatedHosts.ITagsProperty[]?>();
            }

            /// <summary>Property zoneId: The zone ID of the dedicated host.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

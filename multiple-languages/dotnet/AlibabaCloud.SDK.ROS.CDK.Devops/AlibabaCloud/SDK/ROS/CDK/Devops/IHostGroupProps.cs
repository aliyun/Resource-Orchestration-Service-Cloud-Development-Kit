using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `HostGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHostGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.HostGroupProps")]
    public interface IHostGroupProps
    {
        /// <summary>Property name: Host group name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <summary>Property serviceConnectionId: Service connection.</summary>
        [JsiiProperty(name: "serviceConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceConnectionId
        {
            get;
        }

        /// <summary>Property aliyunRegion: The aliyun region.</summary>
        [JsiiProperty(name: "aliyunRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AliyunRegion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsLabelKey: The tag key of the ECS.</summary>
        [JsiiProperty(name: "ecsLabelKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsLabelKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsLabelValue: The tag value of the ECS.</summary>
        [JsiiProperty(name: "ecsLabelValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsLabelValue
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.</summary>
        [JsiiProperty(name: "ecsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property envId: Environment id.</summary>
        [JsiiProperty(name: "envId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property machineInfos: The machine infos.</summary>
        [JsiiProperty(name: "machineInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-devops.RosHostGroup.MachineInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MachineInfos
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagIds: The ids of tag.</summary>
        [JsiiProperty(name: "tagIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: Host group type, currently only supports ECS.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HostGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHostGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.HostGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IHostGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: Host group name.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceConnectionId: Service connection.</summary>
            [JsiiProperty(name: "serviceConnectionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceConnectionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aliyunRegion: The aliyun region.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aliyunRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AliyunRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsLabelKey: The tag key of the ECS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsLabelKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsLabelKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsLabelValue: The tag value of the ECS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsLabelValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsLabelValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property envId: Environment id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "envId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property machineInfos: The machine infos.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "machineInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-devops.RosHostGroup.MachineInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MachineInfos
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagIds: The ids of tag.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TagIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: Host group type, currently only supports ECS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

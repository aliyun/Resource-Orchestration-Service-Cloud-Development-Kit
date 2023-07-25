using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::FlowLogs`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowLogsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.FlowLogsProps")]
    public interface IFlowLogsProps
    {
        /// <summary>Property description: The description of the flow log.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowLogId: The ID of a flow log.</summary>
        [JsiiProperty(name: "flowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowLogId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowLogName: The name of the flow log.</summary>
        [JsiiProperty(name: "flowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowLogName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logStoreName: A LogStore that stores captured traffic.</summary>
        [JsiiProperty(name: "logStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogStoreName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property projectName: Manage the captured traffic of the Project.</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceId: The ID of the resource group to which the flow log belongs.</summary>
        [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceType: The resource type of traffic to capture.</summary>
        /// <remarks>
        /// Value:
        /// NetworkInterface: Elastic NIC.
        /// VSwitch: All ENIs within the VSwitch.
        /// VPC: All ENIs in a VPC.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficType: The type of traffic collected.</summary>
        /// <remarks>
        /// Value:
        /// All: All traffic.
        /// Allow: Traffic allowed by access control.
        /// Drop: Traffic denied by access control.
        /// </remarks>
        [JsiiProperty(name: "trafficType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::FlowLogs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlowLogsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.FlowLogsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IFlowLogsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: The description of the flow log.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowLogId: The ID of a flow log.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowLogId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowLogName: The name of the flow log.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowLogName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logStoreName: A LogStore that stores captured traffic.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogStoreName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property projectName: Manage the captured traffic of the Project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProjectName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceId: The ID of the resource group to which the flow log belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceType: The resource type of traffic to capture.</summary>
            /// <remarks>
            /// Value:
            /// NetworkInterface: Elastic NIC.
            /// VSwitch: All ENIs within the VSwitch.
            /// VPC: All ENIs in a VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trafficType: The type of traffic collected.</summary>
            /// <remarks>
            /// Value:
            /// All: All traffic.
            /// Allow: Traffic allowed by access control.
            /// Drop: Traffic denied by access control.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `FlowLogs`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowLogs), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IFlowLogs")]
    public interface IFlowLogs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FlowLogIds: The list of flow log IDs.</summary>
        [JsiiProperty(name: "attrFlowLogIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowLogIds
        {
            get;
        }

        /// <summary>Attribute FlowLogs: The list of flow logs.</summary>
        [JsiiProperty(name: "attrFlowLogs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowLogs
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.FlowLogsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IFlowLogsProps Props
        {
            get;
        }

        /// <summary>Represents a `FlowLogs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlowLogs), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.IFlowLogs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IFlowLogs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FlowLogIds: The list of flow log IDs.</summary>
            [JsiiProperty(name: "attrFlowLogIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowLogIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlowLogs: The list of flow logs.</summary>
            [JsiiProperty(name: "attrFlowLogs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowLogs
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.FlowLogsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IFlowLogsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IFlowLogsProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}

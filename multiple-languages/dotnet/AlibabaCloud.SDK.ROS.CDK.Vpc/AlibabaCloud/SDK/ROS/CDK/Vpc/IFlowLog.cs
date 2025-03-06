using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `FlowLog`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowLog), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IFlowLog")]
    public interface IFlowLog : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: The Description of flow log.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute FlowLogId: The flow log ID.</summary>
        [JsiiProperty(name: "attrFlowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowLogId
        {
            get;
        }

        /// <summary>Attribute FlowLogName: The flow log name.</summary>
        [JsiiProperty(name: "attrFlowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowLogName
        {
            get;
        }

        /// <summary>Attribute LogStoreName: The log store name.</summary>
        [JsiiProperty(name: "attrLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLogStoreName
        {
            get;
        }

        /// <summary>Attribute ProjectName: The project name.</summary>
        [JsiiProperty(name: "attrProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProjectName
        {
            get;
        }

        /// <summary>Attribute ResourceId: The resource id.</summary>
        [JsiiProperty(name: "attrResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceId
        {
            get;
        }

        /// <summary>Attribute ResourceType: The resource type.</summary>
        [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceType
        {
            get;
        }

        /// <summary>Attribute TrafficType: The traffic type.</summary>
        [JsiiProperty(name: "attrTrafficType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrafficType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.FlowLogProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IFlowLogProps Props
        {
            get;
        }

        /// <summary>Represents a `FlowLog`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlowLog), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IFlowLog")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IFlowLog
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: The Description of flow log.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlowLogId: The flow log ID.</summary>
            [JsiiProperty(name: "attrFlowLogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowLogId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlowLogName: The flow log name.</summary>
            [JsiiProperty(name: "attrFlowLogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowLogName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LogStoreName: The log store name.</summary>
            [JsiiProperty(name: "attrLogStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLogStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProjectName: The project name.</summary>
            [JsiiProperty(name: "attrProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceId: The resource id.</summary>
            [JsiiProperty(name: "attrResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceType: The resource type.</summary>
            [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrafficType: The traffic type.</summary>
            [JsiiProperty(name: "attrTrafficType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrafficType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.FlowLogProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IFlowLogProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IFlowLogProps>()!;
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

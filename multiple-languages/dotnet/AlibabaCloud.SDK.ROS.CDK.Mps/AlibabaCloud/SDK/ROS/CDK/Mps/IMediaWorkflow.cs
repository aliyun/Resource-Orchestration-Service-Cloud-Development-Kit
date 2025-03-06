using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Represents a `MediaWorkflow`.</summary>
    [JsiiInterface(nativeType: typeof(IMediaWorkflow), fullyQualifiedName: "@alicloud/ros-cdk-mps.IMediaWorkflow")]
    public interface IMediaWorkflow : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreationTime: The time when the media workflow was created.</summary>
        [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreationTime
        {
            get;
        }

        /// <summary>Attribute MediaWorkflowId: The ID of the media workflow.</summary>
        [JsiiProperty(name: "attrMediaWorkflowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMediaWorkflowId
        {
            get;
        }

        /// <summary>Attribute Name: The name of the media workflow.</summary>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
        }

        /// <summary>Attribute State: The state of the media workflow.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrState
        {
            get;
        }

        /// <summary>Attribute Topology: The topology of the media workflow.</summary>
        [JsiiProperty(name: "attrTopology", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopology
        {
            get;
        }

        /// <summary>Attribute TriggerMode: The trigger mode of the media workflow.</summary>
        [JsiiProperty(name: "attrTriggerMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTriggerMode
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mps.MediaWorkflowProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mps.IMediaWorkflowProps Props
        {
            get;
        }

        /// <summary>Represents a `MediaWorkflow`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMediaWorkflow), fullyQualifiedName: "@alicloud/ros-cdk-mps.IMediaWorkflow")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.IMediaWorkflow
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreationTime: The time when the media workflow was created.</summary>
            [JsiiProperty(name: "attrCreationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreationTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MediaWorkflowId: The ID of the media workflow.</summary>
            [JsiiProperty(name: "attrMediaWorkflowId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMediaWorkflowId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the media workflow.</summary>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute State: The state of the media workflow.</summary>
            [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Topology: The topology of the media workflow.</summary>
            [JsiiProperty(name: "attrTopology", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopology
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TriggerMode: The trigger mode of the media workflow.</summary>
            [JsiiProperty(name: "attrTriggerMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTriggerMode
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mps.MediaWorkflowProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mps.IMediaWorkflowProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mps.IMediaWorkflowProps>()!;
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

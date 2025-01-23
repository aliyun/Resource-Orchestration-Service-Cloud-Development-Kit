using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr.Datasource
{
    /// <summary>Represents a `FlowProjects`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowProjects), fullyQualifiedName: "@alicloud/ros-cdk-emr.datasource.IFlowProjects")]
    public interface IFlowProjects : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FlowProjectIds: The list of flow project IDs.</summary>
        [JsiiProperty(name: "attrFlowProjectIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowProjectIds
        {
            get;
        }

        /// <summary>Attribute FlowProjects: The list of flow projects.</summary>
        [JsiiProperty(name: "attrFlowProjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowProjects
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.datasource.FlowProjectsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IFlowProjectsProps Props
        {
            get;
        }

        /// <summary>Represents a `FlowProjects`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlowProjects), fullyQualifiedName: "@alicloud/ros-cdk-emr.datasource.IFlowProjects")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IFlowProjects
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FlowProjectIds: The list of flow project IDs.</summary>
            [JsiiProperty(name: "attrFlowProjectIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowProjectIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlowProjects: The list of flow projects.</summary>
            [JsiiProperty(name: "attrFlowProjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowProjects
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.datasource.FlowProjectsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IFlowProjectsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IFlowProjectsProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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

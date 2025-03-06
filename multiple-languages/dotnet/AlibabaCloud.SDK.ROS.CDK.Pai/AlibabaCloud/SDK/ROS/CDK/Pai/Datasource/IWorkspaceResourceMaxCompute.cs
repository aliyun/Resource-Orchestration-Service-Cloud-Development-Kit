using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Represents a `WorkspaceResourceMaxCompute`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkspaceResourceMaxCompute), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceMaxCompute")]
    public interface IWorkspaceResourceMaxCompute : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute GroupName: Resource group name.</summary>
        /// <remarks>
        /// If you want to obtain a resource group name.
        /// </remarks>
        [JsiiProperty(name: "attrGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupName
        {
            get;
        }

        /// <summary>Attribute IsDefault: Indicates whether it is the default resource.</summary>
        /// <remarks>
        /// Currently, this parameter only supports the input of true and does not support false.
        /// </remarks>
        [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsDefault
        {
            get;
        }

        /// <summary>Attribute Resources: Resource List.</summary>
        [JsiiProperty(name: "attrResources", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResources
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceResourceMaxComputeProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceMaxComputeProps Props
        {
            get;
        }

        /// <summary>Represents a `WorkspaceResourceMaxCompute`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWorkspaceResourceMaxCompute), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceMaxCompute")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceMaxCompute
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GroupName: Resource group name.</summary>
            /// <remarks>
            /// If you want to obtain a resource group name.
            /// </remarks>
            [JsiiProperty(name: "attrGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsDefault: Indicates whether it is the default resource.</summary>
            /// <remarks>
            /// Currently, this parameter only supports the input of true and does not support false.
            /// </remarks>
            [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsDefault
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Resources: Resource List.</summary>
            [JsiiProperty(name: "attrResources", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResources
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceResourceMaxComputeProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceMaxComputeProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceMaxComputeProps>()!;
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

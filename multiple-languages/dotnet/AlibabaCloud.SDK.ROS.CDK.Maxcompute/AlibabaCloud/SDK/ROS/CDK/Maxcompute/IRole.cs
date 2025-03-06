using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>Represents a `Role`.</summary>
    [JsiiInterface(nativeType: typeof(IRole), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.IRole")]
    public interface IRole : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ProjectName: The name of the MaxCompute project.</summary>
        [JsiiProperty(name: "attrProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProjectName
        {
            get;
        }

        /// <summary>Attribute RoleName: The name of the project role.</summary>
        [JsiiProperty(name: "attrRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RoleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRoleProps Props
        {
            get;
        }

        /// <summary>Represents a `Role`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRole), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.IRole")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRole
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ProjectName: The name of the MaxCompute project.</summary>
            [JsiiProperty(name: "attrProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleName: The name of the project role.</summary>
            [JsiiProperty(name: "attrRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RoleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRoleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRoleProps>()!;
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

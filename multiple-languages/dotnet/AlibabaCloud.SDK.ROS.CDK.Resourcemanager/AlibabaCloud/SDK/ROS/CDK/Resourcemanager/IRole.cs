using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `Role`.</summary>
    [JsiiInterface(nativeType: typeof(IRole), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IRole")]
    public interface IRole : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arn: The resource descriptor of the role.</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.</summary>
        [JsiiProperty(name: "attrAssumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAssumeRolePolicyDocument
        {
            get;
        }

        /// <summary>Attribute CreateTime: Role creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description of the Resource Manager role.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute MaxSessionDuration: Role maximum session time.</summary>
        /// <remarks>
        /// Valid values: [3600-43200].
        /// </remarks>
        [JsiiProperty(name: "attrMaxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxSessionDuration
        {
            get;
        }

        /// <summary>Attribute RoleId: This ID of Resource Manager role.</summary>
        [JsiiProperty(name: "attrRoleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleId
        {
            get;
        }

        /// <summary>Attribute RoleName: Role Name.</summary>
        [JsiiProperty(name: "attrRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleName
        {
            get;
        }

        /// <summary>Attribute UpdateDate: Role update time.</summary>
        [JsiiProperty(name: "attrUpdateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateDate
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RoleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRoleProps Props
        {
            get;
        }

        /// <summary>Represents a `Role`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRole), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IRole")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRole
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arn: The resource descriptor of the role.</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.</summary>
            [JsiiProperty(name: "attrAssumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAssumeRolePolicyDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Role creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the Resource Manager role.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxSessionDuration: Role maximum session time.</summary>
            /// <remarks>
            /// Valid values: [3600-43200].
            /// </remarks>
            [JsiiProperty(name: "attrMaxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxSessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleId: This ID of Resource Manager role.</summary>
            [JsiiProperty(name: "attrRoleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleName: Role Name.</summary>
            [JsiiProperty(name: "attrRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateDate: Role update time.</summary>
            [JsiiProperty(name: "attrUpdateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateDate
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RoleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRoleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRoleProps>()!;
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

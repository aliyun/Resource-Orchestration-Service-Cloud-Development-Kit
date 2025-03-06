using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Represents a `Role`.</summary>
    [JsiiInterface(nativeType: typeof(IRole), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.IRole")]
    public interface IRole : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Arn: The ARN of the RAM role.</summary>
        [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArn
        {
            get;
        }

        /// <summary>Attribute CreateDate: The time when the RAM role was created.</summary>
        [JsiiProperty(name: "attrCreateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateDate
        {
            get;
        }

        /// <summary>Attribute Description: The description of the RAM role.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute MaxSessionDuration: The maximum session duration of the RAM role.</summary>
        [JsiiProperty(name: "attrMaxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxSessionDuration
        {
            get;
        }

        /// <summary>Attribute RoleId: The ID of the RAM role.</summary>
        [JsiiProperty(name: "attrRoleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleId
        {
            get;
        }

        /// <summary>Attribute RoleName: The name of the RAM role.</summary>
        [JsiiProperty(name: "attrRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRoleName
        {
            get;
        }

        /// <summary>Attribute UpdateDate: The time when the RAM role was last updated.</summary>
        [JsiiProperty(name: "attrUpdateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateDate
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.datasource.RoleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRoleProps Props
        {
            get;
        }

        /// <summary>Represents a `Role`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRole), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.IRole")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRole
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Arn: The ARN of the RAM role.</summary>
            [JsiiProperty(name: "attrArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateDate: The time when the RAM role was created.</summary>
            [JsiiProperty(name: "attrCreateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the RAM role.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxSessionDuration: The maximum session duration of the RAM role.</summary>
            [JsiiProperty(name: "attrMaxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxSessionDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleId: The ID of the RAM role.</summary>
            [JsiiProperty(name: "attrRoleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RoleName: The name of the RAM role.</summary>
            [JsiiProperty(name: "attrRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateDate: The time when the RAM role was last updated.</summary>
            [JsiiProperty(name: "attrUpdateDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateDate
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.datasource.RoleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRoleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRoleProps>()!;
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

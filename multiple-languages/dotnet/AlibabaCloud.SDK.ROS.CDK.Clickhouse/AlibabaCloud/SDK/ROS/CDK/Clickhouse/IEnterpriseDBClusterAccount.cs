using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Represents a `EnterpriseDBClusterAccount`.</summary>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterAccount), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterAccount")]
    public interface IEnterpriseDBClusterAccount : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Account: The name of the database account.</summary>
        [JsiiProperty(name: "attrAccount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccount
        {
            get;
        }

        /// <summary>Attribute AccountType: The type of the database account.</summary>
        [JsiiProperty(name: "attrAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountType
        {
            get;
        }

        /// <summary>Attribute Description: The description of the account.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DmlAuthSetting: The information about permissions.</summary>
        [JsiiProperty(name: "attrDmlAuthSetting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDmlAuthSetting
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccountProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterAccountProps Props
        {
            get;
        }

        /// <summary>Represents a `EnterpriseDBClusterAccount`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterAccount), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterAccount")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterAccount
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Account: The name of the database account.</summary>
            [JsiiProperty(name: "attrAccount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AccountType: The type of the database account.</summary>
            [JsiiProperty(name: "attrAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the account.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DmlAuthSetting: The information about permissions.</summary>
            [JsiiProperty(name: "attrDmlAuthSetting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDmlAuthSetting
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccountProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterAccountProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterAccountProps>()!;
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

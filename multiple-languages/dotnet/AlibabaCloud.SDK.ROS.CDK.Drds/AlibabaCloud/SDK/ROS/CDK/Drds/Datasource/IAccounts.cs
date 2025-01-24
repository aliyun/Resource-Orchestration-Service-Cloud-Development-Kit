using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Represents a `Accounts`.</summary>
    [JsiiInterface(nativeType: typeof(IAccounts), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IAccounts")]
    public interface IAccounts : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Accounts: Indicates the information about the instance accounts.</summary>
        [JsiiProperty(name: "attrAccounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccounts
        {
            get;
        }

        /// <summary>Attribute DrdsAccountNames: Indicates the username of an instance accounts.</summary>
        [JsiiProperty(name: "attrDrdsAccountNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDrdsAccountNames
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.AccountsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IAccountsProps Props
        {
            get;
        }

        /// <summary>Represents a `Accounts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccounts), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IAccounts")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IAccounts
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Accounts: Indicates the information about the instance accounts.</summary>
            [JsiiProperty(name: "attrAccounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DrdsAccountNames: Indicates the username of an instance accounts.</summary>
            [JsiiProperty(name: "attrDrdsAccountNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDrdsAccountNames
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.AccountsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IAccountsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IAccountsProps>()!;
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

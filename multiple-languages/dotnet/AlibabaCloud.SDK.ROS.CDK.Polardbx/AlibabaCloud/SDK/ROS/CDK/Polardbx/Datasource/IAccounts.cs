using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource
{
    /// <summary>Represents a `Accounts`.</summary>
    [JsiiInterface(nativeType: typeof(IAccounts), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.datasource.IAccounts")]
    public interface IAccounts : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.</summary>
        [JsiiProperty(name: "attrPolarDbxAccountNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolarDbxAccountNames
        {
            get;
        }

        /// <summary>Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.</summary>
        [JsiiProperty(name: "attrPolarDbxAccounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolarDbxAccounts
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardbx.datasource.AccountsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IAccountsProps Props
        {
            get;
        }

        /// <summary>Represents a `Accounts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccounts), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.datasource.IAccounts")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IAccounts
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.</summary>
            [JsiiProperty(name: "attrPolarDbxAccountNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolarDbxAccountNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.</summary>
            [JsiiProperty(name: "attrPolarDbxAccounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolarDbxAccounts
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardbx.datasource.AccountsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IAccountsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IAccountsProps>()!;
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

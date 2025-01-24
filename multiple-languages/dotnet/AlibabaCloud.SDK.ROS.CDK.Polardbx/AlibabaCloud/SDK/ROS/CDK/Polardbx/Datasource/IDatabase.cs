using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource
{
    /// <summary>Represents a `Database`.</summary>
    [JsiiInterface(nativeType: typeof(IDatabase), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.datasource.IDatabase")]
    public interface IDatabase : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Accounts: The list of accounts that can be used to access the database.</summary>
        [JsiiProperty(name: "attrAccounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccounts
        {
            get;
        }

        /// <summary>Attribute CharacterSetName: The character set that is supported by the database.</summary>
        [JsiiProperty(name: "attrCharacterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCharacterSetName
        {
            get;
        }

        /// <summary>Attribute DatabaseDescription: The description of the database.</summary>
        [JsiiProperty(name: "attrDatabaseDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatabaseDescription
        {
            get;
        }

        /// <summary>Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        /// <summary>Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.</summary>
        [JsiiProperty(name: "attrPolarDbxDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolarDbxDatabaseName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardbx.datasource.DatabaseProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabaseProps Props
        {
            get;
        }

        /// <summary>Represents a `Database`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatabase), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.datasource.IDatabase")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabase
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Accounts: The list of accounts that can be used to access the database.</summary>
            [JsiiProperty(name: "attrAccounts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CharacterSetName: The character set that is supported by the database.</summary>
            [JsiiProperty(name: "attrCharacterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCharacterSetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DatabaseDescription: The description of the database.</summary>
            [JsiiProperty(name: "attrDatabaseDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatabaseDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.</summary>
            [JsiiProperty(name: "attrPolarDbxDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolarDbxDatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardbx.datasource.DatabaseProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabaseProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabaseProps>()!;
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

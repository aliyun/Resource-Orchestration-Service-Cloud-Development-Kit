using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Represents a `Databases`.</summary>
    [JsiiInterface(nativeType: typeof(IDatabases), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.IDatabases")]
    public interface IDatabases : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Databases: The list of The RDS databases.</summary>
        [JsiiProperty(name: "attrDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatabases
        {
            get;
        }

        /// <summary>Attribute DBNames: The list of The RDS database names.</summary>
        [JsiiProperty(name: "attrDbNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbNames
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rds.datasource.DatabasesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDatabasesProps Props
        {
            get;
        }

        /// <summary>Represents a `Databases`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatabases), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.IDatabases")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDatabases
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Databases: The list of The RDS databases.</summary>
            [JsiiProperty(name: "attrDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatabases
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBNames: The list of The RDS database names.</summary>
            [JsiiProperty(name: "attrDbNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbNames
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rds.datasource.DatabasesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDatabasesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDatabasesProps>()!;
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

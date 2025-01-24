using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource
{
    /// <summary>Represents a `Databases`.</summary>
    [JsiiInterface(nativeType: typeof(IDatabases), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.datasource.IDatabases")]
    public interface IDatabases : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.</summary>
        [JsiiProperty(name: "attrPolarDbxDatabaseNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolarDbxDatabaseNames
        {
            get;
        }

        /// <summary>Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.</summary>
        [JsiiProperty(name: "attrPolarDbxDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolarDbxDatabases
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardbx.datasource.DatabasesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabasesProps Props
        {
            get;
        }

        /// <summary>Represents a `Databases`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatabases), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.datasource.IDatabases")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabases
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.</summary>
            [JsiiProperty(name: "attrPolarDbxDatabaseNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolarDbxDatabaseNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.</summary>
            [JsiiProperty(name: "attrPolarDbxDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolarDbxDatabases
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardbx.datasource.DatabasesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabasesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardbx.Datasource.IDatabasesProps>()!;
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

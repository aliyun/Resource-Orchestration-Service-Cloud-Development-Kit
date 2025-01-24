using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Represents a `DrdsDB`.</summary>
    [JsiiInterface(nativeType: typeof(IDrdsDB), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IDrdsDB")]
    public interface IDrdsDB : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: Database creation timestamp.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DrdsDatabaseName: The name of the Drds database.</summary>
        [JsiiProperty(name: "attrDrdsDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDrdsDatabaseName
        {
            get;
        }

        /// <summary>Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.</summary>
        [JsiiProperty(name: "attrInstRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstRole
        {
            get;
        }

        /// <summary>Attribute Schema: The schema ID that is assigned to the partitioned database by the system.</summary>
        [JsiiProperty(name: "attrSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSchema
        {
            get;
        }

        /// <summary>Attribute SplitMode: The partition mode of the database.Valid values:  HORIZONTAL: The database is horizontally partitioned. VERTICAL: The database is vertically partitioned.</summary>
        [JsiiProperty(name: "attrSplitMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSplitMode
        {
            get;
        }

        /// <summary>Attribute StorageType: The storage type of the Drds database.</summary>
        /// <remarks>
        /// Valid values:
        /// RDS
        /// PolarDB
        /// </remarks>
        [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsDBProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBProps Props
        {
            get;
        }

        /// <summary>Represents a `DrdsDB`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDrdsDB), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IDrdsDB")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDB
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: Database creation timestamp.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DrdsDatabaseName: The name of the Drds database.</summary>
            [JsiiProperty(name: "attrDrdsDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDrdsDatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.</summary>
            [JsiiProperty(name: "attrInstRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstRole
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Schema: The schema ID that is assigned to the partitioned database by the system.</summary>
            [JsiiProperty(name: "attrSchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSchema
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SplitMode: The partition mode of the database.Valid values:  HORIZONTAL: The database is horizontally partitioned. VERTICAL: The database is vertically partitioned.</summary>
            [JsiiProperty(name: "attrSplitMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSplitMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageType: The storage type of the Drds database.</summary>
            /// <remarks>
            /// Valid values:
            /// RDS
            /// PolarDB
            /// </remarks>
            [JsiiProperty(name: "attrStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsDBProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBProps>()!;
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

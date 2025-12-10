using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms.Datasource
{
    /// <summary>Represents a `Database`.</summary>
    [JsiiInterface(nativeType: typeof(IDatabase), fullyQualifiedName: "@alicloud/ros-cdk-dms.datasource.IDatabase")]
    public interface IDatabase : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CatalogName: Database catalog name.</summary>
        [JsiiProperty(name: "attrCatalogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCatalogName
        {
            get;
        }

        /// <summary>Attribute DatabaseId: Database ID.</summary>
        [JsiiProperty(name: "attrDatabaseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatabaseId
        {
            get;
        }

        /// <summary>Attribute DbaId: Database administrator ID.</summary>
        [JsiiProperty(name: "attrDbaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbaId
        {
            get;
        }

        /// <summary>Attribute DbaName: Database administrator name.</summary>
        [JsiiProperty(name: "attrDbaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbaName
        {
            get;
        }

        /// <summary>Attribute DbType: Database type.</summary>
        [JsiiProperty(name: "attrDbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbType
        {
            get;
        }

        /// <summary>Attribute Encoding: Database encoding.</summary>
        [JsiiProperty(name: "attrEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEncoding
        {
            get;
        }

        /// <summary>Attribute EnvType: Database environment type.</summary>
        [JsiiProperty(name: "attrEnvType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvType
        {
            get;
        }

        /// <summary>Attribute Host: Database connection address.</summary>
        [JsiiProperty(name: "attrHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHost
        {
            get;
        }

        /// <summary>Attribute InstanceAlias: Database instance alias.</summary>
        [JsiiProperty(name: "attrInstanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceAlias
        {
            get;
        }

        /// <summary>Attribute InstanceId: Database instance ID.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute OwnerIdList: Database owner ID list.</summary>
        [JsiiProperty(name: "attrOwnerIdList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOwnerIdList
        {
            get;
        }

        /// <summary>Attribute OwnerNameList: Database owner name list.</summary>
        [JsiiProperty(name: "attrOwnerNameList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOwnerNameList
        {
            get;
        }

        /// <summary>Attribute Port: Database connection port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPort
        {
            get;
        }

        /// <summary>Attribute SchemaName: Database schema name.</summary>
        [JsiiProperty(name: "attrSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSchemaName
        {
            get;
        }

        /// <summary>Attribute SearchName: Database search name.</summary>
        [JsiiProperty(name: "attrSearchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSearchName
        {
            get;
        }

        /// <summary>Attribute Sid: Database SID.</summary>
        [JsiiProperty(name: "attrSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSid
        {
            get;
        }

        /// <summary>Attribute State: Database state.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrState
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dms.datasource.DatabaseProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dms.Datasource.IDatabaseProps Props
        {
            get;
        }

        /// <summary>Represents a `Database`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatabase), fullyQualifiedName: "@alicloud/ros-cdk-dms.datasource.IDatabase")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.Datasource.IDatabase
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CatalogName: Database catalog name.</summary>
            [JsiiProperty(name: "attrCatalogName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCatalogName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DatabaseId: Database ID.</summary>
            [JsiiProperty(name: "attrDatabaseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatabaseId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbaId: Database administrator ID.</summary>
            [JsiiProperty(name: "attrDbaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbaId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbaName: Database administrator name.</summary>
            [JsiiProperty(name: "attrDbaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbaName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DbType: Database type.</summary>
            [JsiiProperty(name: "attrDbType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Encoding: Database encoding.</summary>
            [JsiiProperty(name: "attrEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEncoding
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvType: Database environment type.</summary>
            [JsiiProperty(name: "attrEnvType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Host: Database connection address.</summary>
            [JsiiProperty(name: "attrHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceAlias: Database instance alias.</summary>
            [JsiiProperty(name: "attrInstanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: Database instance ID.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OwnerIdList: Database owner ID list.</summary>
            [JsiiProperty(name: "attrOwnerIdList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOwnerIdList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OwnerNameList: Database owner name list.</summary>
            [JsiiProperty(name: "attrOwnerNameList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOwnerNameList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Port: Database connection port.</summary>
            [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SchemaName: Database schema name.</summary>
            [JsiiProperty(name: "attrSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSchemaName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SearchName: Database search name.</summary>
            [JsiiProperty(name: "attrSearchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSearchName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Sid: Database SID.</summary>
            [JsiiProperty(name: "attrSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute State: Database state.</summary>
            [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrState
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dms.datasource.DatabaseProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dms.Datasource.IDatabaseProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dms.Datasource.IDatabaseProps>()!;
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

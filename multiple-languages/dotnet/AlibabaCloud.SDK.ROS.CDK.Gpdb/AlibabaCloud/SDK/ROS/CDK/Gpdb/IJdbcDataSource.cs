using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Represents a `JdbcDataSource`.</summary>
    [JsiiInterface(nativeType: typeof(IJdbcDataSource), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IJdbcDataSource")]
    public interface IJdbcDataSource : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.</summary>
        /// <remarks>
        /// Otherwise, "" is returned "".
        /// </remarks>
        [JsiiProperty(name: "attrConnectionMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionMessage
        {
            get;
        }

        /// <summary>Attribute ConnectionStatus: Service Status:.</summary>
        [JsiiProperty(name: "attrConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionStatus
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DataSourceDescription: Data Source Description.</summary>
        [JsiiProperty(name: "attrDataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataSourceDescription
        {
            get;
        }

        /// <summary>Attribute DataSourceId: The data source ID.</summary>
        [JsiiProperty(name: "attrDataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataSourceId
        {
            get;
        }

        /// <summary>Attribute DataSourceName: Data Source Name.</summary>
        [JsiiProperty(name: "attrDataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataSourceName
        {
            get;
        }

        /// <summary>Attribute DataSourceType: Data Source Type.</summary>
        [JsiiProperty(name: "attrDataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataSourceType
        {
            get;
        }

        /// <summary>Attribute ExternalDataServiceId: External Data Service id.</summary>
        [JsiiProperty(name: "attrExternalDataServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExternalDataServiceId
        {
            get;
        }

        /// <summary>Attribute JdbcConnectionString: The JDBC connection string.</summary>
        [JsiiProperty(name: "attrJdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJdbcConnectionString
        {
            get;
        }

        /// <summary>Attribute JdbcPassword: The password of the database account.</summary>
        [JsiiProperty(name: "attrJdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJdbcPassword
        {
            get;
        }

        /// <summary>Attribute JdbcUserName: The name of the database account.</summary>
        [JsiiProperty(name: "attrJdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJdbcUserName
        {
            get;
        }

        /// <summary>Attribute ModifyTime: Last modification time.</summary>
        [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifyTime
        {
            get;
        }

        /// <summary>Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.</summary>
        /// <remarks>
        /// A null value in the normal Running state.
        /// </remarks>
        [JsiiProperty(name: "attrStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatusMessage
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.JdbcDataSourceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps Props
        {
            get;
        }

        /// <summary>Represents a `JdbcDataSource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IJdbcDataSource), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IJdbcDataSource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConnectionMessage: Return Information: If the connection fails, an error message is returned.</summary>
            /// <remarks>
            /// Otherwise, "" is returned "".
            /// </remarks>
            [JsiiProperty(name: "attrConnectionMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionStatus: Service Status:.</summary>
            [JsiiProperty(name: "attrConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataSourceDescription: Data Source Description.</summary>
            [JsiiProperty(name: "attrDataSourceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataSourceDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataSourceId: The data source ID.</summary>
            [JsiiProperty(name: "attrDataSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataSourceName: Data Source Name.</summary>
            [JsiiProperty(name: "attrDataSourceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataSourceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataSourceType: Data Source Type.</summary>
            [JsiiProperty(name: "attrDataSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExternalDataServiceId: External Data Service id.</summary>
            [JsiiProperty(name: "attrExternalDataServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExternalDataServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JdbcConnectionString: The JDBC connection string.</summary>
            [JsiiProperty(name: "attrJdbcConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJdbcConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JdbcPassword: The password of the database account.</summary>
            [JsiiProperty(name: "attrJdbcPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJdbcPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JdbcUserName: The name of the database account.</summary>
            [JsiiProperty(name: "attrJdbcUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJdbcUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifyTime: Last modification time.</summary>
            [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StatusMessage: Service status information, such as exceptions, displays the reason for the exception.</summary>
            /// <remarks>
            /// A null value in the normal Running state.
            /// </remarks>
            [JsiiProperty(name: "attrStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatusMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.JdbcDataSourceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.IJdbcDataSourceProps>()!;
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

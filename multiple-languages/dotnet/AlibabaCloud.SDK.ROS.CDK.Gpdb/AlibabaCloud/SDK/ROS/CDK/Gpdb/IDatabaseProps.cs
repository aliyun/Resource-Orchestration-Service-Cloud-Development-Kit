using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `Database`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DatabaseProps")]
    public interface IDatabaseProps
    {
        /// <summary>Property databaseName: Database Name.</summary>
        [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabaseName
        {
            get;
        }

        /// <summary>Property dbInstanceId: Instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property owner: Data Sheet owner.</summary>
        [JsiiProperty(name: "owner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Owner
        {
            get;
        }

        /// <summary>Property characterSetName: Character set, default value is UTF8.</summary>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CharacterSetName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property collate: Database locale parameters, specifying string comparison\/collation.</summary>
        [JsiiProperty(name: "collate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Collate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ctype: Database locale parameters, specifying character classification\/case conversion rules.</summary>
        [JsiiProperty(name: "ctype", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ctype
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Database Description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Database`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DatabaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IDatabaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property databaseName: Database Name.</summary>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: Instance ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property owner: Data Sheet owner.</summary>
            [JsiiProperty(name: "owner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Owner
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property characterSetName: Character set, default value is UTF8.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CharacterSetName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property collate: Database locale parameters, specifying string comparison\/collation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "collate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Collate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ctype: Database locale parameters, specifying character classification\/case conversion rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ctype", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ctype
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Database Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

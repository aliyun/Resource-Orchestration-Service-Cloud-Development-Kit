using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsDB`.</summary>
    [JsiiInterface(nativeType: typeof(IDrdsDBProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsDBProps")]
    public interface IDrdsDBProps
    {
        /// <summary>Property drdsInstanceId: DRDS instance ID.</summary>
        [JsiiProperty(name: "drdsInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DrdsInstanceId
        {
            get;
        }

        /// <summary>Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceIsCreating: Check whether the RDS instance is being created.</summary>
        [JsiiProperty(name: "dbInstanceIsCreating", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIsCreating
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstType: The type of the attached storage.</summary>
        /// <remarks>
        /// Valid values:
        /// RDS or POLARDB
        /// </remarks>
        [JsiiProperty(name: "dbInstType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbInstType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbName: Database Name.</summary>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encode: Encoding used by the database.</summary>
        [JsiiProperty(name: "encode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Encode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instDbName:.</summary>
        [JsiiProperty(name: "instDbName", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstDbName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property password: The logon password of the database instance.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rdsInstance: This property is required only for vertical partitioning.</summary>
        [JsiiProperty(name: "rdsInstance", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? RdsInstance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: Database Sharding method.</summary>
        /// <remarks>
        /// For more information, see scalability principle. Valid values:
        /// HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        /// and table sharding.
        /// VERTICAL: indicates VERTICAL partitioning.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsDB`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDrdsDBProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsDBProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.IDrdsDBProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property drdsInstanceId: DRDS instance ID.</summary>
            [JsiiProperty(name: "drdsInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DrdsInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbInstanceIsCreating: Check whether the RDS instance is being created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIsCreating", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceIsCreating
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstType: The type of the attached storage.</summary>
            /// <remarks>
            /// Valid values:
            /// RDS or POLARDB
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbInstType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbName: Database Name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property encode: Encoding used by the database.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Encode
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instDbName:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instDbName", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstDbName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: The logon password of the database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Password
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property rdsInstance: This property is required only for vertical partitioning.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rdsInstance", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? RdsInstance
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property type: Database Sharding method.</summary>
            /// <remarks>
            /// For more information, see scalability principle. Valid values:
            /// HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
            /// and table sharding.
            /// VERTICAL: indicates VERTICAL partitioning.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Type
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

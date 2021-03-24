using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::ReadOnlyDBInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IReadOnlyDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps")]
    public interface IReadOnlyDBInstanceProps
    {
        /// <summary>Property dbInstanceClass: The type of the instance.</summary>
        /// <remarks>
        /// For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceClass
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the master instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <summary>Property dbInstanceStorage: The storage space of the instance.</summary>
        /// <remarks>
        /// Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}")]
        double DbInstanceStorage
        {
            get;
        }

        /// <summary>Property engineVersion: The version of the database.</summary>
        /// <remarks>
        /// The database and the master instance must have the same database version. Valid values:
        /// 
        /// <list type="bullet">
        /// <description>5.6</description>
        /// <description>5.7</description>
        /// <description>8.0</description>
        /// <description>2017_ent</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}")]
        string EngineVersion
        {
            get;
        }

        /// <summary>Property zoneId: The ID of the zone.</summary>
        /// <remarks>
        /// You can call the DescribeRegions API operation to view the latest zones.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Property category: The edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>Basic</description>
        /// <description>HighAvailability</description>
        /// <description>AlwaysOn</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceStorageType: The storage type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>local_ssd/ephemeral_ssd: local SSDs.</description>
        /// <description>cloud_ssd: SSDs.</description>
        /// <description>cloud_essd: ESSDs.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbInstanceStorageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method.</summary>
        /// <remarks>
        /// The system only supports Pay-As-You-Go. Valid value: Postpaid.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: The private IP address of the read-only instance.</summary>
        /// <remarks>
        /// It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The tags of an instance.</summary>
        /// <remarks>
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 5 tags can be specified.
        /// Key
        /// It can be up to 64 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Cannot be a null string.
        /// Value
        /// It can be up to 128 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Can be a null string.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::ReadOnlyDBInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IReadOnlyDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ReadOnlyDBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IReadOnlyDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceClass: The type of the instance.</summary>
            /// <remarks>
            /// For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceClass
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the master instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbInstanceStorage: The storage space of the instance.</summary>
            /// <remarks>
            /// Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}")]
            public double DbInstanceStorage
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property engineVersion: The version of the database.</summary>
            /// <remarks>
            /// The database and the master instance must have the same database version. Valid values:
            /// 
            /// <list type="bullet">
            /// <description>5.6</description>
            /// <description>5.7</description>
            /// <description>8.0</description>
            /// <description>2017_ent</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}")]
            public string EngineVersion
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property zoneId: The ID of the zone.</summary>
            /// <remarks>
            /// You can call the DescribeRegions API operation to view the latest zones.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property category: The edition of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 
            /// <list type="bullet">
            /// <description>Basic</description>
            /// <description>HighAvailability</description>
            /// <description>AlwaysOn</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Category
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbInstanceDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbInstanceStorageType: The storage type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 
            /// <list type="bullet">
            /// <description>local_ssd/ephemeral_ssd: local SSDs.</description>
            /// <description>cloud_ssd: SSDs.</description>
            /// <description>cloud_essd: ESSDs.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbInstanceStorageType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property payType: The billing method.</summary>
            /// <remarks>
            /// The system only supports Pay-As-You-Go. Valid value: Postpaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PayType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property privateIpAddress: The private IP address of the read-only instance.</summary>
            /// <remarks>
            /// It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateIpAddress
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: The tags of an instance.</summary>
            /// <remarks>
            /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
            /// At most 5 tags can be specified.
            /// Key
            /// It can be up to 64 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:// or https://.
            /// Cannot be a null string.
            /// Value
            /// It can be up to 128 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:// or https://.
            /// Can be a null string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

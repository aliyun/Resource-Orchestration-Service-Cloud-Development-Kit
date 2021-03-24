using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`.</summary>
    [JsiiInterface(nativeType: typeof(IDBInstanceSecurityIpsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBInstanceSecurityIpsProps")]
    public interface IDBInstanceSecurityIpsProps
    {
        /// <summary>Property dbInstanceId: Database instance id to update security ips.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <summary>Property dbInstanceIpArrayAttribute: Security ips to add or remove.</summary>
        [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceIpArrayAttribute
        {
            get;
        }

        /// <summary>Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.</summary>
        /// <remarks>
        /// Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbInstanceIpArrayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceSecurityIpsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBInstanceSecurityIpsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceSecurityIpsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: Database instance id to update security ips.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbInstanceIpArrayAttribute: Security ips to add or remove.</summary>
            [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceIpArrayAttribute
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.</summary>
            /// <remarks>
            /// Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbInstanceIpArrayName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}

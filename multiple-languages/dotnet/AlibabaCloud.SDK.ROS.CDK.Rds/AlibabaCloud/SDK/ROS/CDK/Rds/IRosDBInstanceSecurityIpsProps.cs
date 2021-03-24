using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDBInstanceSecurityIpsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceSecurityIpsProps")]
    public interface IRosDBInstanceSecurityIpsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database instance id to update security ips.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIpArrayAttribute: Security ips to add or remove.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceIpArrayAttribute
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
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
        [JsiiTypeProxy(nativeType: typeof(IRosDBInstanceSecurityIpsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceSecurityIpsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceSecurityIpsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Database instance id to update security ips.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceIpArrayAttribute: Security ips to add or remove.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceIpArrayAttribute
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
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

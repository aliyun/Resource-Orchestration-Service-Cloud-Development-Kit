using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccountPrivilegeProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosAccountPrivilegeProps")]
    public interface IRosAccountPrivilegeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: RDS account name.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        string AccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPrivilege: RDS account privilege
        /// </remarks>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}")]
        string AccountPrivilege
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: RDS instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: RDS database name
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
        string DbName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountPrivilegeProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosAccountPrivilegeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosAccountPrivilegeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: RDS account name.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountPrivilege: RDS account privilege
            /// </remarks>
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountPrivilege
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: RDS instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: RDS database name
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
            public string DbName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
    [JsiiInterface(nativeType: typeof(IAccountPrivilegeProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.AccountPrivilegeProps")]
    public interface IAccountPrivilegeProps
    {
        /// <summary>Property accountName: RDS account name.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        string AccountName
        {
            get;
        }

        /// <summary>Property accountPrivilege: RDS account privilege.</summary>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}")]
        string AccountPrivilege
        {
            get;
        }

        /// <summary>Property dbInstanceId: RDS instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <summary>Property dbName: RDS database name.</summary>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
        string DbName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccountPrivilegeProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.AccountPrivilegeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IAccountPrivilegeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: RDS account name.</summary>
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountPrivilege: RDS account privilege.</summary>
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountPrivilege
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbInstanceId: RDS instance ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbName: RDS database name.</summary>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
            public string DbName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

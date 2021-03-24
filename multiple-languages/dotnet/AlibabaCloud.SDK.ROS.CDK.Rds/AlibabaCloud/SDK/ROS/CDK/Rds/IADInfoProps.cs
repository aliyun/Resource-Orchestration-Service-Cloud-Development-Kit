using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
    [JsiiInterface(nativeType: typeof(IADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ADInfoProps")]
    public interface IADInfoProps
    {
        /// <summary>Property adAccountName: Domain account name.</summary>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"primitive\":\"string\"}")]
        string AdAccountName
        {
            get;
        }

        /// <summary>Property addns: Active directory domain name.</summary>
        [JsiiProperty(name: "addns", typeJson: "{\"primitive\":\"string\"}")]
        string Addns
        {
            get;
        }

        /// <summary>Property adPassword: Domain password.</summary>
        [JsiiProperty(name: "adPassword", typeJson: "{\"primitive\":\"string\"}")]
        string AdPassword
        {
            get;
        }

        /// <summary>Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.</summary>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"primitive\":\"string\"}")]
        string AdServerIpAddress
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ADInfoProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IADInfoProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property adAccountName: Domain account name.</summary>
            [JsiiProperty(name: "adAccountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AdAccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property addns: Active directory domain name.</summary>
            [JsiiProperty(name: "addns", typeJson: "{\"primitive\":\"string\"}")]
            public string Addns
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property adPassword: Domain password.</summary>
            [JsiiProperty(name: "adPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string AdPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.</summary>
            [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"primitive\":\"string\"}")]
            public string AdServerIpAddress
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

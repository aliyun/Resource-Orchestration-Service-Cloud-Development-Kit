using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
    [JsiiInterface(nativeType: typeof(IRosADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosADInfoProps")]
    public interface IRosADInfoProps
    {
        /// <remarks>
        /// <strong>Property</strong>: adAccountName: Domain account name.
        /// </remarks>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"primitive\":\"string\"}")]
        string AdAccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: addns: Active directory domain name.
        /// </remarks>
        [JsiiProperty(name: "addns", typeJson: "{\"primitive\":\"string\"}")]
        string Addns
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: adPassword: Domain password.
        /// </remarks>
        [JsiiProperty(name: "adPassword", typeJson: "{\"primitive\":\"string\"}")]
        string AdPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        /// </remarks>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"primitive\":\"string\"}")]
        string AdServerIpAddress
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string DbInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosADInfoProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosADInfoProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: adAccountName: Domain account name.
            /// </remarks>
            [JsiiProperty(name: "adAccountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AdAccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: addns: Active directory domain name.
            /// </remarks>
            [JsiiProperty(name: "addns", typeJson: "{\"primitive\":\"string\"}")]
            public string Addns
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: adPassword: Domain password.
            /// </remarks>
            [JsiiProperty(name: "adPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string AdPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
            /// </remarks>
            [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"primitive\":\"string\"}")]
            public string AdServerIpAddress
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

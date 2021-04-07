using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::ADInfo`.</summary>
    [JsiiInterface(nativeType: typeof(IADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.ADInfoProps")]
    public interface IADInfoProps
    {
        /// <summary>Property adAccountName: Domain account name.</summary>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdAccountName
        {
            get;
        }

        /// <summary>Property addns: Active directory domain name.</summary>
        [JsiiProperty(name: "addns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Addns
        {
            get;
        }

        /// <summary>Property adPassword: Domain password.</summary>
        [JsiiProperty(name: "adPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdPassword
        {
            get;
        }

        /// <summary>Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.</summary>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdServerIpAddress
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
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
            [JsiiProperty(name: "adAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addns: Active directory domain name.</summary>
            [JsiiProperty(name: "addns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Addns
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property adPassword: Domain password.</summary>
            [JsiiProperty(name: "adPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.</summary>
            [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdServerIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

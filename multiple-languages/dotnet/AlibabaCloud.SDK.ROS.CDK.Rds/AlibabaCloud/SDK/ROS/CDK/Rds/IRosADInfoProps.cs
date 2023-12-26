using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `RosADInfo`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosADInfoProps")]
    public interface IRosADInfoProps
    {
        /// <remarks>
        /// <strong>Property</strong>: adAccountName: Domain account name.
        /// </remarks>
        [JsiiProperty(name: "adAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdAccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: addns: Active directory domain name.
        /// </remarks>
        [JsiiProperty(name: "addns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Addns
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: adPassword: Domain password.
        /// </remarks>
        [JsiiProperty(name: "adPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
        /// </remarks>
        [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AdServerIpAddress
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosADInfo`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosADInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosADInfoProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosADInfoProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: adAccountName: Domain account name.
            /// </remarks>
            [JsiiProperty(name: "adAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: addns: Active directory domain name.
            /// </remarks>
            [JsiiProperty(name: "addns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Addns
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: adPassword: Domain password.
            /// </remarks>
            [JsiiProperty(name: "adPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
            /// </remarks>
            [JsiiProperty(name: "adServerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AdServerIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

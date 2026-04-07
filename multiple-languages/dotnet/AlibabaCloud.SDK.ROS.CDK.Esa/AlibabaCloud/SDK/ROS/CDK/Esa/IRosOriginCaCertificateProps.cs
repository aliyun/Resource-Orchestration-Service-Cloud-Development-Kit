using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosOriginCaCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOriginCaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosOriginCaCertificateProps")]
    public interface IRosOriginCaCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: certificate: Certificate content.
        /// </remarks>
        [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Certificate
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The website ID
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The certificate name.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: validityDays: The validity period of the certificate. Unit: day.
        /// </remarks>
        [JsiiProperty(name: "validityDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidityDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosOriginCaCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOriginCaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosOriginCaCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosOriginCaCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: certificate: Certificate content.
            /// </remarks>
            [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Certificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The website ID
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The certificate name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: validityDays: The validity period of the certificate. Unit: day.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validityDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidityDays
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

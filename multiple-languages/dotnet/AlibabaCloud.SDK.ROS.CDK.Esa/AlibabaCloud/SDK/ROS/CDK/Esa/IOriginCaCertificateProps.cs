using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `OriginCaCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOriginCaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginCaCertificateProps")]
    public interface IOriginCaCertificateProps
    {
        /// <summary>Property certificate: Certificate content.</summary>
        [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Certificate
        {
            get;
        }

        /// <summary>Property siteId: The website ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property name: The certificate name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property validityDays: The validity period of the certificate.</summary>
        /// <remarks>
        /// Unit: day.
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

        /// <summary>Properties for defining a `OriginCaCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOriginCaCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginCaCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginCaCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property certificate: Certificate content.</summary>
            [JsiiProperty(name: "certificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Certificate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The website ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The certificate name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validityDays: The validity period of the certificate.</summary>
            /// <remarks>
            /// Unit: day.
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

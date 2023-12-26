using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `AdditionalCertificateAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAdditionalCertificateAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AdditionalCertificateAssociationProps")]
    public interface IAdditionalCertificateAssociationProps
    {
        /// <summary>Property certificates: The list of the additional certificates.</summary>
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAdditionalCertificateAssociation.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Certificates
        {
            get;
        }

        /// <summary>Property listenerId: The ID of the listener.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Properties for defining a `AdditionalCertificateAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-additionalcertificateassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAdditionalCertificateAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AdditionalCertificateAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IAdditionalCertificateAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property certificates: The list of the additional certificates.</summary>
            [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAdditionalCertificateAssociation.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Certificates
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: The ID of the listener.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

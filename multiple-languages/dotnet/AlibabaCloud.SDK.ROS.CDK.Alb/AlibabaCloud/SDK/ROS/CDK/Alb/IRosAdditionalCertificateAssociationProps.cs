using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ALIYUN::ALB::AdditionalCertificateAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAdditionalCertificateAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAdditionalCertificateAssociationProps")]
    public interface IRosAdditionalCertificateAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: certificates: The list of the additional certificates.
        /// </remarks>
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAdditionalCertificateAssociation.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Certificates
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ALB::AdditionalCertificateAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAdditionalCertificateAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAdditionalCertificateAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosAdditionalCertificateAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: certificates: The list of the additional certificates.
            /// </remarks>
            [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAdditionalCertificateAssociation.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Certificates
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerId: The ID of the listener.
            /// </remarks>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

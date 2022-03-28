using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::QosAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosQosAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosQosAssociationProps")]
    public interface IRosQosAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: qosId: The instance ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::QosAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosQosAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosQosAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosQosAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: qosId: The instance ID of the QoS policy.
            /// </remarks>
            [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

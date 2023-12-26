using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `QosAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQosAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.QosAssociationProps")]
    public interface IQosAssociationProps
    {
        /// <summary>Property qosId: The instance ID of the QoS policy.</summary>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosId
        {
            get;
        }

        /// <summary>Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `QosAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQosAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.QosAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IQosAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property qosId: The instance ID of the QoS policy.</summary>
            [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.</summary>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

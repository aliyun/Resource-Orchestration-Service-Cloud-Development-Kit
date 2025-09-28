using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datalakeformation
{
    /// <summary>Properties for defining a `RosVpcConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-datalakeformation.RosVpcConfigProps")]
    public interface IRosVpcConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC ID to be config.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Properties for defining a `RosVpcConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-datalakeformation.RosVpcConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datalakeformation.IRosVpcConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The VPC ID to be config.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

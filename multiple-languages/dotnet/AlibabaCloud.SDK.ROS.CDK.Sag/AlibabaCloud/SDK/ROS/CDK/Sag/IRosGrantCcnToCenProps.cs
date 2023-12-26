using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `RosGrantCcnToCen`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosGrantCcnToCenProps")]
    public interface IRosGrantCcnToCenProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ccnInstanceId: The ID of the CCN instance.
        /// </remarks>
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CcnInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenInstanceId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenUid: The ID of the account to which the CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenUid
        {
            get;
        }

        /// <summary>Properties for defining a `RosGrantCcnToCen`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosGrantCcnToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosGrantCcnToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ccnInstanceId: The ID of the CCN instance.
            /// </remarks>
            [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CcnInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenInstanceId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenUid: The ID of the account to which the CEN instance belongs.
            /// </remarks>
            [JsiiProperty(name: "cenUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenUid
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

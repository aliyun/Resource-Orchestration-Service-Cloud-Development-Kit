using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `GrantCcnToCen`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.GrantCcnToCenProps")]
    public interface IGrantCcnToCenProps
    {
        /// <summary>Property ccnInstanceId: The ID of the CCN instance.</summary>
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CcnInstanceId
        {
            get;
        }

        /// <summary>Property cenInstanceId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenInstanceId
        {
            get;
        }

        /// <summary>Property cenUid: The ID of the account to which the CEN instance belongs.</summary>
        [JsiiProperty(name: "cenUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenUid
        {
            get;
        }

        /// <summary>Properties for defining a `GrantCcnToCen`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.GrantCcnToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ccnInstanceId: The ID of the CCN instance.</summary>
            [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CcnInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenInstanceId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenUid: The ID of the account to which the CEN instance belongs.</summary>
            [JsiiProperty(name: "cenUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenUid
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `RosAccessKey`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAccessKeyProps")]
    public interface IRosAccessKeyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <summary>Properties for defining a `RosAccessKey`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAccessKeyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosAccessKeyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

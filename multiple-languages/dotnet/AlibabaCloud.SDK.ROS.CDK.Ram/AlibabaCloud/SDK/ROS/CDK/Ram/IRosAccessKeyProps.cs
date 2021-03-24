using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::AccessKey`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccessKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAccessKeyProps")]
    public interface IRosAccessKeyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
        string UserName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::AccessKey`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosAccessKeyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosAccessKeyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            public string UserName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

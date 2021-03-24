using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::AccessKey`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AccessKeyProps")]
    public interface IAccessKeyProps
    {
        /// <summary>Property userName: Specifies the user name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
        string UserName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::AccessKey`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.AccessKeyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IAccessKeyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property userName: Specifies the user name, containing up to 64 characters.</summary>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            public string UserName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
